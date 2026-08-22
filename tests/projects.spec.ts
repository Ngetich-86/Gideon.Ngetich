import { test, expect } from '@playwright/test';

test.describe('Projects section', () => {
  test('renders all three project cards with a GitHub link and tech-stack chips', async ({ page }) => {
    await page.goto('/#projects');
    const cards = page.locator('.project-card');
    await expect(cards).toHaveCount(3);

    const seatReservationCard = cards.filter({
      hasText: 'Automated Seat reservation system in PSV',
    });
    await expect(seatReservationCard.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/Ngetich-86/Auto-seat-psv-Client'
    );
    await expect(seatReservationCard.getByText('React', { exact: true })).toBeVisible();
    await expect(seatReservationCard.getByText('PostgreSQL', { exact: true })).toBeVisible();

    const springBootCard = cards.filter({ hasText: 'Spring Boot + Next.js Employee Manager' });
    await expect(springBootCard.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/Ngetich-86/springboot-nextjs-employee-manager'
    );
    await expect(springBootCard.getByText('Redis', { exact: true })).toBeVisible();
  });

  test('each card links to its case-study route', async ({ page }) => {
    await page.goto('/#projects');
    const cards = page.locator('.project-card');

    for (let i = 0; i < (await cards.count()); i++) {
      await expect(cards.nth(i).getByRole('link', { name: 'View Case Study →' })).toHaveAttribute(
        'href',
        /^\/projects\/[a-z0-9-]+$/
      );
    }
  });

  test('navigating to a case-study route renders that project\'s full content', async ({ page }) => {
    await page.goto('/#projects');
    await page
      .locator('.project-card')
      .filter({ hasText: 'Automated Seat reservation system in PSV' })
      .getByRole('link', { name: 'View Case Study →' })
      .click();

    await expect(page).toHaveURL(/\/projects\/automated-seat-reservation-system$/);
    await expect(page.getByRole('heading', { name: 'Automated Seat reservation system in PSV' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Key Takeaway' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub Repository' })).toHaveAttribute(
      'href',
      'https://github.com/Ngetich-86/Auto-seat-psv-Client'
    );
  });

  test('an unknown project slug shows a not-found message with a way back', async ({ page }) => {
    await page.goto('/projects/does-not-exist');
    await expect(page.getByRole('heading', { name: 'Project not found' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Back to Projects/ })).toHaveAttribute(
      'href',
      '/#projects'
    );
  });
});
