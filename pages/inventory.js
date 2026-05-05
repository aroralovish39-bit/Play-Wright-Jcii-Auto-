import { expect } from "@playwright/test";



export class inventory {
    constructor(page) {
        this.page = page;

        this.inventoryTitle = page.getByRole('heading', { name: 'Inventory' });
        this.vehicleCards = page.locator('button:has-text("VIEW DETAILS")').locator('..');
        //this.vehicleCards = page.locator('div.rounded-lg.bg-white.overflow-hidden.shadow');

        //this.vehicleTitles = this.vehicleCards.locator('h3');
       this.vehicleTitles = page.locator('img[alt]');
        
        this.searchPopUp = page.getByRole('button', { name: 'Search' })
        this.searchInput = page.getByRole('textbox', { name: 'Search for vehicles by make, model, year...' })
        this.makeFilter = page.getByRole('button', { name: 'Make' });
        this.jeepFilter = page.getByRole('checkbox', { name: 'Jeep' })
        this.modelFilter = page.getByRole('button', { name: 'Model' })
        this.WragglerFilter = page.getByLabel('Wrangler', { exact: true })
        this.bodytypefilter = page.getByRole('button', { name: 'Body Type' })
        this.suvFilter = page.getByRole('checkbox', { name: 'SUVs' })
        this.clearFilterButtons = page.locator('button[aria-label*="Remove"]');
        this.sortDropdown = page.locator('button:has-text("Default")');
        this.priceLowToHigh = page.getByText('Price: Low to High');
        this.priceHighToLow = page.getByText('Price: High to Low');
        this.viewDetailsButtons = page.getByRole('button', { name: 'VIEW DETAILS' }).first();
        this.page2button = page.getByRole('button',{name:2})
        this.confirmAvailabilityButton = page.getByRole('button', { name: 'Confirm Availability' })
        this.firstNameAvailabilityInput = page.getByLabel('First Name');
        this.lastNameAvailabilityInput = page.getByLabel('Last Name');
        this.phoneNumberAvailabilityInput = page.getByLabel('Phone Number');
        this.emailAvailabilityInput = page.locator('input[name="email"]');
        this.commentsAvailabilityInput = page.getByLabel('Comments');
        this.phoneCheckBox = page.getByRole('checkbox', { name: 'Phone' })
        this.acceptTermsCheckBox = page.getByRole('checkbox', { name: 'I accept all the above terms *' })
        this.subMitRequestButton = page.getByRole('button', { name: 'Submit Request' })
        this.successToast = page.locator('text=Your availability request has been submitted successfully!');
    }
    async navigateInventory() {
        await this.page.goto('/inventory');
    }

    async getdetails() {
        await this.vehicleCards.click();;
    }

    async clickSearch(value) {
        await this.searchPopUp.click();
        await this.searchInput.fill(value);
        await this.searchInput.press('Enter')
        //await expect()
        await this.page.locator('text=/SEARCH: honda/i')
    }

    async clickMakeFilter() {
        await this.makeFilter.click();
        await this.jeepFilter.click();
    }

    async multiplefilters() {
        await this.makeFilter.click();
        await this.jeepFilter.click();
        await this.modelFilter.click();
        await this.WragglerFilter.click();
        await this.bodytypefilter.click();
        await this.suvFilter.click();
    }

    async clearFilters() {
        const count = await this.clearFilterButtons.count();

        // if(count === 0){
        //     console.log('No filters to clear');
        //     return;
        // }

        for (let i = 0; i < count; i++) {
            if (count === 0) {
                await this.clearFilterButtons.first().click();
            }
        }
    }
    async sortByLowToHigh() {
        await this.sortDropdown.click(); //  open dropdown
        //await this.page.waitForSelector('text=Price: Low to High'); //  wait
        await this.priceLowToHigh.click(); //  select option
    }

    async sortByHighToLow() {
        await this.sortDropdown.click(); //  open dropdown
        //await this.page.waitForSelector('text=Price: High to Low'); //  wait
        await this.priceHighToLow.click(); //  select option
    }
  async clickViewDetails() {
    await this.viewDetailsButtons.click();
  }
 
  async clickConfirmAvailability(FirstName,LastName,PhoneNumber,Email,Comments) {
    await this.confirmAvailabilityButton.click();
    await this.firstNameAvailabilityInput.fill(FirstName);
    await this.lastNameAvailabilityInput.fill(LastName);
    await this.phoneNumberAvailabilityInput.fill(PhoneNumber);
    await this.emailAvailabilityInput.fill(Email)
    await this.commentsAvailabilityInput.fill(Comments);
    await this.phoneCheckBox.click();
    await this.acceptTermsCheckBox.click();
    await this.subMitRequestButton.click();
}



}