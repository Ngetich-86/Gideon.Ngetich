import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

test.describe('Responsive behavior', () => {
  for (const viewport of VIEWPORTS) {
    test.describe(viewport.name, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      test('renders the hero, projects, and contact sections without horizontal overflow', async ({
        page,
      }) => {
        await page.goto('/');

        await expect(page.getByRole('link', { name: 'Get in Touch' })).toBeVisible();
        await expect(page.locator('#projects')).toBeVisible();
        await expect(page.locator('#contact')).toBeVisible();

        const hasHorizontalOverflow = await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth
        );
        expect(hasHorizontalOverflow, 'page should not scroll horizontally').toBe(false);
      });

      test('project cards stack in a usable grid', async ({ page }) => {
        await page.goto('/#projects');
        const cards = page.locator('.project-card');
        await expect(cards).toHaveCount(3);
        await expect(cards.first()).toBeVisible();
      });
    });
  }

  test('the navbar switches from desktop links to a mobile toggle at the md breakpoint', async ({
    page,
  }) => {
    await page.goto('/');

    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByTestId('desktop-nav')).toBeVisible();
    await expect(page.getByTestId('mobile-nav-toggle')).not.toBeVisible();

    await page.setViewportSize({ width: 500, height: 900 });
    await expect(page.getByTestId('desktop-nav')).not.toBeVisible();
    await expect(page.getByTestId('mobile-nav-toggle')).toBeVisible();
  });
});
