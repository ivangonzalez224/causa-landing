import { test, expect } from '@playwright/test';

test.describe('Pricing section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows three pricing cards', async ({ page }) => {
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    const cards = page.locator('[class*="card"]');
    await expect(cards).toHaveCount(3);
  });

  test('opens WhatsApp modal when CTA is clicked', async ({ page }) => {
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await page.locator('[class*="btn"]').first().click();
    await expect(page.locator('[class*="modal"]')).toBeVisible();
    await expect(page.locator('a[href*="wa.me"]')).toBeVisible();
  });

  test('closes modal when clicking outside', async ({ page }) => {
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await page.locator('[class*="btn"]').first().click();
    await page.locator('[class*="modalOverlay"]').click({ position: { x: 10, y: 10 } });
    await expect(page.locator('[class*="modal"]')).not.toBeVisible();
  });
});
