import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage has no serious or critical axe violations', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page }).analyze();

    const seriousOrWorse = results.violations.filter(
      (v) => v.impact === 'serious' || v.impact === 'critical'
    );

    expect(
      seriousOrWorse,
      JSON.stringify(seriousOrWorse.map((v) => ({ id: v.id, help: v.help, nodes: v.nodes.length })), null, 2)
    ).toEqual([]);
  });

  test('project case-study page has no serious or critical axe violations', async ({ page }) => {
    await page.goto('/projects/automated-seat-reservation-system');
    const results = await new AxeBuilder({ page }).analyze();

    const seriousOrWorse = results.violations.filter(
      (v) => v.impact === 'serious' || v.impact === 'critical'
    );

    expect(
      seriousOrWorse,
      JSON.stringify(seriousOrWorse.map((v) => ({ id: v.id, help: v.help, nodes: v.nodes.length })), null, 2)
    ).toEqual([]);
  });

  test('skip link is reachable by keyboard and jumps to main content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();

    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main-content$/);
  });

  test('mobile nav toggle is keyboard operable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const toggle = page.getByTestId('mobile-nav-toggle');
    await toggle.focus();
    await expect(toggle).toBeFocused();

    await page.keyboard.press('Enter');
    await expect(page.getByTestId('mobile-nav')).toBeVisible();
  });
});
