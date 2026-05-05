import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;

        this.navbar = page.getByRole('navigation');

        this.homeLink = this.navbar.getByRole('link', { name: 'Home' });
        this.inventoryLink = this.navbar.getByRole('link', { name: 'Inventory' });
        this.accessoriesLink = this.navbar.getByRole('link', { name: 'Accessories' });
        this.carFinderLink = this.navbar.getByRole('link', { name: 'Car Finder' });

        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.popupClose = page.locator('button:has-text("×")');
        this.getApprovedButton = page.getByRole('button', { name: 'Get Approved Now' });

        this.bodyStyleSection = page.getByRole('heading', { name: 'Shop by Body Style' });

        this.carouselRight = page.getByRole('button', { name: 'Next slide' });
        this.carouselLeft = page.getByRole('button', { name: 'Previous slide' });
    }

    async navigate() {
        await this.page.setViewportSize({ width: 1920, height:  1053});
        await this.page.goto('/');
    }

    async closePopupIfVisible() {
        if (await this.popupClose.isVisible()) {
            await this.popupClose.click();
        }
    }

    async clickInventory() {
        await this.inventoryLink.click();
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async clickSearch() {
        await this.searchButton.click();
    }

    async clickGetApproved() {
        await this.getApprovedButton.click();
    }

    async clickCarouselRight() {
        await this.carouselRight.click();
    }

    async clickCarouselLeft() {
        await this.carouselLeft.click();
    }
}