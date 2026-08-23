import { test, expect } from '@playwright/test';

test.describe('Experience section', () => {
  test('shows current QA work experience with dates and tools', async ({ page }) => {
    await page.goto('/#experience');
    const section = page.locator('#experience');

    await expect(section.getByRole('heading', { name: 'QA Engineer' })).toBeVisible();
    await expect(section.getByText('Icon Train Smarter')).toBeVisible();
    await expect(section.getByText('January 2026 - Present · Remote')).toBeVisible();

    await expect(section.getByRole('heading', { name: 'Junior QA Automation Engineer' })).toBeVisible();
    await expect(section.getByText('Tana')).toBeVisible();

    await expect(section.getByRole('heading', { name: 'Software Developer Intern' })).toBeVisible();
    await expect(section.getByText('The Jitu')).toBeVisible();

    // Tool chips for the current role
    await expect(section.getByText('Playwright', { exact: true }).first()).toBeVisible();
    await expect(section.getByText('Selenium', { exact: true })).toBeVisible();
  });

  test('shows the Leadership & Community sub-section separately from work experience', async ({ page }) => {
    await page.goto('/#experience');
    const section = page.locator('#experience');

    await expect(section.getByRole('heading', { name: 'Leadership & Community' })).toBeVisible();
    await expect(
      section.getByRole('heading', { name: 'Gold Microsoft Learn Student Ambassador' })
    ).toBeVisible();
    await expect(
      section.getByRole('heading', {
        name: 'Web Development Lead - Computer Society Of Kirinyaga University',
      })
    ).toBeVisible();
  });

  test('renders exactly three work-experience cards with no duplicate content', async ({ page }) => {
    await page.goto('/#experience');
    const workCards = page.locator('.work-experience-card');
    await expect(workCards).toHaveCount(3);
  });
});
