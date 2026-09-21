import { test, expect } from "@playwright/test";
import { apps } from "../data/apps";
import english from "../data/en.json";
import turkish from "../data/tr.json";

const routes = ["/", ...apps.flatMap(app => ["", "/support", "/privacy"].map(suffix => `/apps/${app.slug}${suffix}`)), "/apps/hushloom/terms", ...["terms", "eula", "purchases"].map(section => `/apps/retro-snake/${section}`)];
const knownRoutes = new Set(routes);
const names = apps.map(app => app.name).concat("Ezan Vakti: Namaz ve Kıble").sort((a,b) => b.length-a.length);

for (const lang of ["tr", "en"] as const) for (const theme of ["dark", "light"] as const) {
  for (const route of routes) {
    test(`${lang}/${theme} ${route}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      await page.addInitScript(({ lang, theme }) => {
        localStorage.setItem("saybir-lang", lang);
        localStorage.setItem("saybir-theme", theme);
      }, { lang, theme });
      await page.setViewportSize({ width: 390, height: 844 });
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      await expect(page.getByRole("button", { name: lang === "tr" ? "Switch to English" : "Türkçeye geç" })).toBeVisible();
      await expect(page.locator("h1")).toHaveCount(1);
      expect((await page.locator("main").innerText()).length).toBeGreaterThan(70);
      const background = await page.locator("body").evaluate(el => getComputedStyle(el).backgroundColor);
      expect(background).toBe(theme === "dark" ? "rgb(3, 3, 4)" : "rgb(250, 250, 250)");
      const nodes = await page.locator("body").evaluate(el => {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); const text: string[] = [];
        while (walker.nextNode()) { const n=walker.currentNode; if (!n.parentElement?.closest("script,style")) text.push(n.textContent?.replace(/\s+/g," ").trim() ?? ""); }
        return text.filter(Boolean);
      });
      if (lang === "en") {
        const leftovers = nodes.filter(text => {
          const withoutNames = names.reduce((s,name) => s.replaceAll(name,""), text);
          return /[ğüşıöçĞÜŞİÖÇ]/.test(withoutNames) && !text.includes("Türkçeye");
        });
        expect(leftovers, "Untranslated Turkish copy").toEqual([]);
        const untranslated = nodes.filter(text => text in english && english[text as keyof typeof english] !== text);
        expect(untranslated, "Untranslated catalog keys").toEqual([]);
      } else {
        expect(nodes.filter(text => text in turkish && turkish[text as keyof typeof turkish] !== text), "Untranslated English copy").toEqual([]);
      }
      const links = await page.locator('a[href^="/"]').evaluateAll(els => els.map(el => el.getAttribute("href")!.split("#")[0] || "/"));
      expect(links.filter(link => !knownRoutes.has(link)), "Broken internal route").toEqual([]);
      const brokenImages = await page.locator("img").evaluateAll(els => els.filter((el): el is HTMLImageElement => el instanceof HTMLImageElement && el.loading !== "lazy" && (!el.complete || el.naturalWidth === 0)).map(el => el.src));
      expect(brokenImages).toEqual([]);
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: width > 1000 ? 900 : 844 });
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}px`).toBe(true);
        const controls = page.locator(".pref-controls");
        await expect(controls).toBeInViewport();
      }
      expect(errors).toEqual([]);
    });
  }
}

test("language and theme persist through navigation, reload and browser back", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to English" }).click();
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await page.locator('.catalog-card[href="/apps/melodymap"]').click();
  await expect(page.locator("h1")).toHaveText("Melody Map");
  await page.getByRole("link", { name: "Support", exact: true }).click();
  await expect(page.locator("h1")).toHaveText("Melody Map Support");
  await expect(page).toHaveTitle("Melody Map · Support · SAYBIR");
  await expect(page.getByText("Loading music content", { exact: true })).toBeVisible();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.goBack();
  await expect(page.locator("h1")).toHaveText("Melody Map");
  await page.getByRole("link", { name: "Privacy", exact: true }).click();
  await expect(page.getByText("Music Content and Preferences", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Türkçeye geç" }).click();
  await expect(page.locator("h1")).toHaveText("Melody Map Gizlilik Politikası");
});

test("mobile menu, catalog access and keyboard dismissal", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menüyü aç" }).click();
  await expect(page.getByRole("navigation", { name: "Ana menü" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Menüyü aç" })).toBeFocused();
  await page.getByRole("button", { name: "Menüyü aç" }).click();
  await page.locator("#site-navigation").getByRole("link", { name: "Uygulamalar" }).click();
  await expect(page.locator("#site-navigation")).toBeHidden();
  await expect(page.locator(".catalog-card")).toHaveCount(apps.length);
});

test("reduced motion keeps the full catalog accessible without a long film", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const scene of await page.locator(".story__stage").all()) {
    expect(await scene.evaluate(el => getComputedStyle(el).position)).toBe("relative");
  }
  await expect(page.locator(".story")).toHaveCount(3);
  await expect(page.locator(".catalog-card")).toHaveCount(18);
});

test("invalid preferences and unavailable storage do not break the site", async ({ browser }) => {
  for (const blocked of [false, true]) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.addInitScript(blocked => {
      if (blocked) Object.defineProperty(window, "localStorage", { get() { throw new Error("Storage blocked"); } });
      else { localStorage.setItem("saybir-lang", "invalid"); localStorage.setItem("saybir-theme", "invalid"); }
    }, blocked);
    await page.goto("http://127.0.0.1:3000/apps/hushloom/privacy");
    await page.getByRole("button", { name: "Switch to English" }).click();
    await expect(page.locator("h1")).toHaveText("Hushloom Privacy Policy");
    await page.getByRole("button", { name: "Switch to light theme" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await context.close();
  }
});

test("unknown app and unknown page return a translated 404", async ({ page }) => {
  for (const route of ["/apps/not-a-product", "/missing-page", "/apps/not-a-product/privacy"]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(404);
    await expect(page.locator("h1")).toHaveText("Sayfa bulunamadı");
    await page.getByRole("button", { name: "Switch to English" }).click();
    await expect(page.locator("h1")).toHaveText("Page not found");
    await page.getByRole("button", { name: "Türkçeye geç" }).click();
  }
});
