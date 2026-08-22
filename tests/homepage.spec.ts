import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('renders the hero section with the current positioning', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/');

    await expect(page).toHaveTitle(/Gideon Ngetich/);
    await expect(
      page
        .locator('#main-content')
        .getByText('Software Engineer specializing in Quality Engineering & Test Automation')
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get in Touch' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Projects' })).toBeVisible();

    expect(consoleErrors, `Unexpected console errors: ${consoleErrors.join('\n')}`).toEqual([]);
  });

  test('renders all primary sections on the same page', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#technologies')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('has a single main landmark and a working skip link', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('main#main-content')).toHaveCount(1);

    const skipLink = page.getByRole('link', { name: 'Skip to main content' });
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });
});
