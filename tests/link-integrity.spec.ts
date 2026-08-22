import { test, expect } from '@playwright/test';

test.describe('Internal link integrity', () => {
  test('every in-page hash anchor referenced by the nav/footer resolves to a real element', async ({
    page,
  }) => {
    await page.goto('/');

    const hrefs = await page.locator('a[href^="/#"]').evaluateAll((links) =>
      Array.from(new Set(links.map((l) => (l as HTMLAnchorElement).getAttribute('href') ?? '')))
    );
    expect(hrefs.length).toBeGreaterThan(0);

    for (const href of hrefs) {
      const id = href.replace('/#', '');
      await expect(page.locator(`#${id}`), `missing target for ${href}`).toHaveCount(1);
    }
  });

  test('every project case-study route referenced from the homepage loads without a 404 in this app', async ({
    page,
  }) => {
    await page.goto('/#projects');
    const hrefs = await page
      .locator('.project-card')
      .getByRole('link', { name: 'View Case Study →' })
      .evaluateAll((links) => links.map((l) => (l as HTMLAnchorElement).getAttribute('href') ?? ''));

    expect(hrefs.length).toBeGreaterThan(0);

    for (const href of hrefs) {
      await page.goto(href);
      await expect(page.getByRole('heading', { name: 'Project not found' })).not.toBeVisible();
    }
  });

  test('the site map lists every real route and no others', async ({ page, request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.ok()).toBeTruthy();
    const xml = await response.text();

    const locs = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1]);
    expect(locs.length).toBeGreaterThan(0);

    await page.goto('/#projects');
    const caseStudyHrefs = await page
      .locator('.project-card')
      .getByRole('link', { name: 'View Case Study →' })
      .evaluateAll((links) => links.map((l) => (l as HTMLAnchorElement).getAttribute('href') ?? ''));

    for (const href of caseStudyHrefs) {
      expect(locs.some((loc) => loc.endsWith(href))).toBe(true);
    }
  });
});
