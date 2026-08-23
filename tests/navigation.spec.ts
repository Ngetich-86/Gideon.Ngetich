import { test, expect } from '@playwright/test';

const NAV_LINKS: Array<{ name: string; href: string }> = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Technologies', href: '/#technologies' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Community', href: '/#community' },
  { name: 'Contact', href: '/#contact' },
];

test.describe('Desktop navigation', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('shows all primary links pointing to the right sections', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByTestId('desktop-nav');

    for (const link of NAV_LINKS) {
      await expect(nav.getByRole('link', { name: link.name, exact: true })).toHaveAttribute(
        'href',
        link.href
      );
    }
  });

  test('clicking a link scrolls the matching section into view', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('desktop-nav').getByRole('link', { name: 'Projects', exact: true }).click();
    await expect(page.locator('#projects')).toBeInViewport();
  });

  test('does not show the mobile menu toggle', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('mobile-nav-toggle')).not.toBeVisible();
  });
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('hides the desktop menu and shows a labelled toggle button', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('desktop-nav')).not.toBeVisible();

    const toggle = page.getByTestId('mobile-nav-toggle');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-label', 'Open navigation menu');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('opens the menu, navigates, and closes after selecting a link', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByTestId('mobile-nav-toggle');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-label', 'Close navigation menu');
    const mobileMenu = page.getByTestId('mobile-nav');
    await expect(mobileMenu).toBeVisible();

    await mobileMenu.getByRole('link', { name: 'Projects', exact: true }).click();

    await expect(page.locator('#projects')).toBeInViewport();
    await expect(mobileMenu).not.toBeVisible();
  });
});
