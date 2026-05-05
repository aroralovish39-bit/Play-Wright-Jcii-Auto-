import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test('[@smoke] Verify homepage UI', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();
  await home.closePopupIfVisible();

  // ✅ Assertions here
  await expect(page).toHaveTitle(/JC Automax/);
  await expect(home.navbar).toBeVisible();
  await expect(home.homeLink).toBeVisible();
  await expect(home.inventoryLink).toBeVisible();
  await expect(home.loginButton).toBeVisible();
  await expect(home.searchButton).toBeVisible();
});



test('[@regression] Verify Inventory navigation', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();
  await home.closePopupIfVisible();

  await home.clickInventory();

  // ✅ Assertion
  await expect(page).toHaveURL(/inventory/);
});



test('[@regression] Verify Login navigation', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();

  await home.clickLogin();

  await expect(page).toHaveURL(/login/);
});



test('[@smoke] Verify search opens', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();

  await home.clickSearch();

  // Add assertion based on UI (input/modal visible)
});



test('[@regression] Verify body style section', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();
  await home.closePopupIfVisible();

  await expect(home.bodyStyleSection).toBeVisible();
});



test('[@regression] Verify carousel works', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();
  await home.closePopupIfVisible();

  await home.clickCarouselRight();
  await home.clickCarouselLeft();
});