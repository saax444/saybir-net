import { test, expect } from '@playwright/test';
for (const [width,height,theme,lang] of [[320,740,'dark','tr'],[390,844,'dark','tr'],[768,1024,'light','en'],[1440,900,'light','en']] as const) {
 test(`3D layout ${width} ${theme}`,async({page})=>{
 await page.setViewportSize({width,height});
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.addInitScript(({theme,lang})=>{localStorage.setItem('saybir-theme',theme);localStorage.setItem('saybir-lang',lang);},{theme,lang});
 await page.goto('/#story-hushloom');
 await expect(page.locator('.product-world')).toHaveAttribute('data-rendered','true');
 await page.locator('.work-stage').screenshot({path:`../../outputs/world-layout-${width}.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await expect(page.locator('.work-actions a')).toBeVisible();
 await page.getByRole('button',{name:lang==='tr'?'Tüm uygulamalar':'All apps',exact:false}).click();
 await expect(page.locator('.work-index-grid button')).toHaveCount(18);
 await page.locator('.work-index-grid button').last().click();
 await expect(page.locator('.work-index')).toBeHidden();
 });
}

for(const width of [390,1440]) test(`opening sculpture ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});
 await page.goto('/');
 await expect(page.locator('.opening-world')).toHaveAttribute('data-rendered','true');
 await expect(page.locator('.opening h1')).toBeVisible();
 await page.locator('.opening__motion').click();
 await expect(page.locator('.opening__motion')).toHaveAttribute('aria-pressed','true');
 await page.locator('.opening').screenshot({path:`../../outputs/polished-opening-${width}.png`,animations:'disabled'});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
