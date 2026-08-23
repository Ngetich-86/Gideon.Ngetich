import { test, expect, type Locator } from '@playwright/test';

const GITHUB_URL = 'https://github.com/Ngetich-86';
const LINKEDIN_URL = 'https://www.linkedin.com/in/gideon-ngetich/';

async function expectSafeExternalLink(locator: Locator, href: string) {
  await expect(locator).toHaveAttribute('href', href);
  await expect(locator).toHaveAttribute('target', '_blank');
  const rel = (await locator.getAttribute('rel')) ?? '';
  expect(rel).toContain('noopener');
  expect(rel).toContain('noreferrer');
}

test.describe('External and contact links', () => {
  test('GitHub links throughout the page are correct and safe', async ({ page }) => {
    await page.goto('/');
    const githubLinks = page.locator(`a[href="${GITHUB_URL}"]`);
    expect(await githubLinks.count()).toBeGreaterThanOrEqual(3);

    for (let i = 0; i < (await githubLinks.count()); i++) {
      await expectSafeExternalLink(githubLinks.nth(i), GITHUB_URL);
    }
  });

  test('LinkedIn links throughout the page are correct and safe', async ({ page }) => {
    await page.goto('/');
    const linkedinLinks = page.locator(`a[href="${LINKEDIN_URL}"]`);
    expect(await linkedinLinks.count()).toBeGreaterThanOrEqual(3);

    for (let i = 0; i < (await linkedinLinks.count()); i++) {
      await expectSafeExternalLink(linkedinLinks.nth(i), LINKEDIN_URL);
    }
  });

  test('no Twitter/X link remains anywhere on the page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href*="x.com"], a[href*="twitter.com"]')).toHaveCount(0);
  });

  test('email and phone use mailto/tel links', async ({ page }) => {
    await page.goto('/#contact');
    await expect(page.locator('a[href="mailto:ngetich.gideon@outlook.com"]')).toBeVisible();
    await expect(page.locator('a[href="tel:+254742252910"]')).toBeVisible();
  });

  test('Download CV opens the resume in a new, safe tab', async ({ page }) => {
    await page.goto('/#about');
    const cvLink = page.getByRole('link', { name: 'Download CV' });
    await expect(cvLink).toHaveAttribute(
      'href',
      'https://drive.google.com/file/d/1FrF8MLK2k0sUdCxETcA_HHBkYX2V-S0K/view?usp=sharing'
    );
    await expect(cvLink).toHaveAttribute('target', '_blank');
  });

  test('footer quick links point to the correct hash-anchored sections', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/#about');
    await expect(footer.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/#projects');
    await expect(footer.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#contact');
  });

  test('every project card GitHub link points to a github.com URL', async ({ page }) => {
    await page.goto('/#projects');
    const links = page.locator('.project-card').getByRole('link', { name: 'GitHub' });
    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).toMatch(/^https:\/\/github\.com\//);
    }
  });
});
