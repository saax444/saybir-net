import { test, expect } from '@playwright/test';
import { apps } from '../data/apps';
for (const [width,height,theme,lang] of [[320,740,'dark','tr'],[390,844,'dark','tr'],[768,1024,'light','en'],[1440,900,'light','en']] as const) {
 test(`cinematic layout ${width} ${theme}`,async({page})=>{
 await page.setViewportSize({width,height});
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.addInitScript(({theme,lang})=>{localStorage.setItem('saybir-theme',theme);localStorage.setItem('saybir-lang',lang);},{theme,lang});
 await page.goto('/#story-hushloom');
 await expect(page.locator('.product-world')).toHaveAttribute('data-rendered','true');
 await page.locator('.work-stage').screenshot({path:`../../outputs/world-layout-${width}.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await expect(page.locator('.work-actions a')).toBeVisible();
 await page.getByRole('button',{name:lang==='tr'?'Tüm uygulamalar':'All apps',exact:false}).click();
 await expect(page.locator('.work-index-grid button')).toHaveCount(apps.length);
 await page.locator('.work-index-grid button').last().click();
 await expect(page.locator('.work-index')).toBeHidden();
 });
}

for(const width of [390,1440]) test(`opening product showcase ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});
 await page.goto('/');
 await expect(page.locator('.opening__tile img')).toHaveCount(9);
 await expect(page.locator('.opening h1')).toBeVisible();
 await expect(page.locator('.opening__lower a')).toHaveAttribute('href','#uygulamalar');
 await page.locator('.opening').screenshot({path:`../../outputs/polished-opening-${width}.png`,animations:'disabled'});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('scroll changes the product camera and pause keeps it still',async({page})=>{
 await page.setViewportSize({width:1440,height:900});
 await page.goto('/#story-kedilik');
 const scene=page.locator('.work-stage');
 await expect(page.locator('.product-world')).toHaveAttribute('data-rendered','true');
 await page.waitForTimeout(1400);
 const canvas=page.locator('.product-world canvas');
 const before=await canvas.screenshot();
 await page.evaluate(()=>{const el=document.querySelector<HTMLElement>('.work-theatre')!;scrollTo({top:scrollY+el.getBoundingClientRect().top+(el.offsetHeight-innerHeight)*.8,behavior:'instant'})});
 await page.waitForTimeout(150);
 expect((await canvas.screenshot()).equals(before)).toBe(false);
 expect(await scene.evaluate(el=>Math.abs(el.getBoundingClientRect().top))).toBeLessThan(2);
 await page.getByRole('button',{name:'Hareketi durdur',exact:true}).click();
 await page.waitForTimeout(100);
 const paused=await canvas.screenshot();
 await page.mouse.wheel(0,-150);
 await page.waitForTimeout(250);
 expect((await canvas.screenshot()).equals(paused)).toBe(true);
});
