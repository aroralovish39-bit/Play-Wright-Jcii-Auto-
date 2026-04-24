import { test } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test('Verify JC Automax homepage UI', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.closePopupIfVisible();
  await homePage.verifyTitle();
  await homePage.verifyNavbar();
  await homePage.verifyLoginButton();
  await homePage.verifySearchIcon();
  await homePage.closePopupIfVisible();
  await homePage.verifyGetApprovedButton();
});

test('Verify clicking Inventory navigates correctly', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.closePopupIfVisible();
  await homePage.clickInventory();
})

test('Verify Login button is clickable', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.clickLogin();
})

test('Verify Search icon opens search input/modal' , async({page }) =>{
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.searchButtonClick();
})

test('Verify Shop by Body Style section is visible', async({ page }) =>{
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.closePopupIfVisible();
  await homePage.ShopByBodyStyle();
})

test('Verify if the right and left carousel buttons work', async({ page }) =>{
   
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.closePopupIfVisible();
  await homePage.clickrightcrousoul();
  await homePage.clickleftcrousoul();

})