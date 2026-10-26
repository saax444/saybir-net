import { test, expect } from '@playwright/test';
import { apps } from '../data/apps';
const paths = ['/', ...apps.flatMap(app=>['','/support','/privacy',...(['hushloom','sancta'].includes(app.slug)?['/terms']:[]),...(app.slug==='retro-snake'?['/terms','/eula','/purchases']:[])].map(s=>`/apps/${app.slug}${s}`))];

test('every indexable page has its own server-rendered canonical and social metadata',async({request})=>{
 for(const path of paths){
  const response=await request.get(path);expect(response.status(),path).toBe(200);
  const html=await response.text();const url=`https://saybir.net${path==='/'?'':path}`;
  expect(html,path).toContain(`rel="canonical" href="${url}"`);
  expect(html,path).toContain(`property="og:url" content="${url}"`);
  expect(html,path).toMatch(/name="description" content="[^"]{20,}"/);
  expect(html,path).toMatch(/property="og:title" content="[^"]+"/);
  expect(html,path).toMatch(/name="twitter:image" content="https:\/\/saybir.net\//);
  expect(html.match(/<title>(.*?)<\/title>/)?.[1],path).not.toMatch(/SAYBIR.*\| SAYBIR/);
 }
});

test('security headers cover pages and assets without exposing framework headers',async({request,page})=>{
 for(const path of ['/','/apps/kedilik','/apps/kedilik/privacy','/apps/kedilik.png']){
  const response=await request.get(path),headers=response.headers();
  expect(headers['x-powered-by']).toBeUndefined();
  expect(headers['x-content-type-options']).toBe('nosniff');
  expect(headers['x-frame-options']).toBe('DENY');
  expect(headers['content-security-policy']).toContain("frame-ancestors 'none'");
  expect(headers['content-security-policy']).toContain("object-src 'none'");
  expect(headers['content-security-policy']).not.toContain('unsafe-eval');
  expect(headers['permissions-policy']).toContain('camera=()');
 }
 const violations:string[]=[];
 await page.addInitScript(()=>{document.addEventListener('securitypolicyviolation',e=>console.error('CSP violation: '+e.violatedDirective))});
 page.on('console',msg=>{if(msg.text().includes('CSP violation:'))violations.push(msg.text())});
 await page.goto('/#story-sancta');
 await expect(page.locator('.artwork-emblem img')).toBeVisible();
 await page.getByRole('button',{name:'Switch to English'}).click();
 await expect(page.locator('html')).toHaveAttribute('lang','en');
 await page.getByRole('button',{name:'Switch to light theme'}).click();
 await expect(page.locator('html')).toHaveAttribute('data-theme','light');
 expect(violations).toEqual([]);
});

test('sitemap, robots and structured data accurately describe public content',async({request})=>{
 const sitemap=await (await request.get('/sitemap.xml')).text();
 const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
 expect(new Set(urls).size).toBe(paths.length);
 expect(sitemap).not.toContain('<lastmod>');
 for(const path of paths)expect(urls).toContain(`https://saybir.net${path==='/'?'':path}`);
 expect(await (await request.get('/robots.txt')).text()).toContain('Sitemap: https://saybir.net/sitemap.xml');
 const html=await (await request.get('/')).text();
 const script=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
 expect(script).toBeTruthy();
 const schema=JSON.parse(script!);expect(schema['@graph'][2].itemListElement).toHaveLength(apps.length);
 expect((await request.get('/apps/missing-app')).status()).toBe(404);
 expect(await (await request.get('/apps/missing-app')).text()).toContain('noindex');
});
