import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.navbar = page.getByRole('navigation');

        // Locators
        this.homeLink = this.navbar.getByRole('link', { name: 'Home' });
        this.inventoryLink = this.navbar.getByRole('link', { name: 'Inventory' });
        this.accessoriesLink = this.navbar.getByRole('link', { name: 'Accessories' });
        this.carFinderLink = this.navbar.getByRole('link', { name: 'Car Finder' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.popupClose = page.locator('button:has-text("×")');
        this.getapprovedbutton = page.getByRole('button', { name: 'Get Approved Now' });
        this.bodyStyleSection = page.getByRole('heading', { name: 'Shop by Body Style' })
        this.crosoulright =  page.getByRole('button', { name: 'Next slide' })
        this.crosoulleft =  page.getByRole('button', { name: 'Previous slide' })
    }

    // Actions
    async navigate() {
        await this.page.goto('https://dev.jcautomax.com/', { waitUntil: 'load' });
    }

    async verifyTitle() {
        await expect(this.page).toHaveTitle(/JC Automax/);
    }

    async verifyNavbar() {
        await expect(this.navbar).toBeVisible();

        await expect(this.homeLink).toBeVisible();
        await expect(this.inventoryLink).toBeVisible();
        await expect(this.accessoriesLink).toBeVisible();
        await expect(this.carFinderLink).toBeVisible();
    }

    async verifyLoginButton() {
        await expect(this.loginButton).toBeVisible();
    }

    async verifySearchIcon() {
        await expect(this.searchButton).toBeVisible();
    }

    async closePopupIfVisible() {
        if (await this.popupClose.isVisible()) {
            await this.popupClose.click();
        }
    }

    async verifyGetApprovedButton() {
        if (await this.getapprovedbutton.isVisible()) {
            await this.getapprovedbutton.click();
        }
    }

    
    async clickInventory() {
        await this.inventoryLink.click();
        await expect(this.page).toHaveURL(/inventory/);
    }

    async clickLogin() {
        await expect(this.loginButton).toBeVisible();
        await expect(this.loginButton).toBeEnabled();
        await this.loginButton.click();
        await expect(this.page).toHaveURL(/login/);
    }

    async searchButtonClick() {
        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();
    }

    async ShopByBodyStyle() {
        await expect(this.bodyStyleSection).toBeVisible();
    }
      
    async clickrightcrousoul() {
        await expect(this.crosoulright).toBeVisible();
        await this.crosoulright.click();
    }
  
    async clickleftcrousoul() {
        await expect(this.crosoulleft).toBeVisible();
        await this.crosoulleft.click();
    }
}