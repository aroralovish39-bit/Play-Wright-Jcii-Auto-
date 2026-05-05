import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { inventory } from '../pages/inventory';

test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);
    await home.navigate();
    await home.closePopupIfVisible();
    await home.clickInventory();
})

test('Verify URL contains /inventory', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);


    await expect(page).toHaveURL(/inventory/);
});


test('Verify at least 1 vehicle is displayed', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);


    await expect(inventoryPage.vehicleCards.first()).toBeVisible();
});

test('Search valid keyword', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);


    // await expect(inventoryPage.searchPopUp).toBeVisible();
    await inventoryPage.clickSearch('Honda');
    const count = await inventoryPage.vehicleCards.count();
    console.log(`Number of vehicles found: ${count}`);

    // Add assertion to verify results are shown (e.g., check for vehicle cards or specific text)
    await expect(inventoryPage.vehicleCards.first()).toBeVisible();
})

test('Search invalid keyword', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);

    await inventoryPage.clickSearch('InvalidSearchTerm');
    // Add assertion to verify no results are shown (e.g., check for "No results found" message)
    await expect(page.locator('text=No vehicles found in inventory')).toBeVisible();
})

test('Filter By Make', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);

    await inventoryPage.clickMakeFilter();
    await expect(inventoryPage.vehicleCards.first()).toBeVisible();
})

test('Apply multiple filters', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);

    await inventoryPage.multiplefilters();
    await expect(inventoryPage.vehicleCards.first()).toBeVisible();
})

test('Clear filters', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);

    await inventoryPage.multiplefilters();

    await inventoryPage.clearFilters();

    await expect(inventoryPage.vehicleCards.first()).toBeVisible();
})

test('Price low to high', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);

    await inventoryPage.sortByLowToHigh();
    await expect(inventoryPage.vehicleCards.first()).toBeVisible();
})

test('Price high to low', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);

    await inventoryPage.sortByHighToLow();
    await expect(inventoryPage.vehicleCards.first()).toBeVisible();
})

test('View details of a vehicle', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);

    await inventoryPage.clickViewDetails();

    // Add assertion to verify navigation to details page (e.g., check URL or specific element on details page)
    await expect(page).toHaveURL(/inventory\/\d+/); // Assuming URL contains vehicle ID
    const currentUrl = page.url();
    console.log('Navigated URL:', currentUrl);
})

test('Verify if the confirm availability is working', async ({ page }) => {
    const home = new HomePage(page);
    const inventoryPage = new inventory(page);
    await inventoryPage.clickViewDetails();
    await inventoryPage.clickConfirmAvailability("Lovish", "Zaveri", "1234567890", "lovish.zaveri@example.com", "I would like to schedule a test drive.");
    await expect(page).toHaveURL(/inventory\/\d+/);

})



