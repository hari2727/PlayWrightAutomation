
import { test, Browser, chromium, Page, expect } from '@playwright/test'
import{PageObjectManager} from '../PageObjectManager/PageObjectManager'
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')))

test('Book Hotel', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    const pom = new PageObjectManager(page);
    const loginPage=await pom.getLoginPage();
    const homePage =await pom. getHomePage();
    const selectHotelPage = await pom.getSelectHotelPage();
    const bookHotelPage=await pom. getBookHotelPage();
    const bookingConfirmation=await pom.getBookConfirmationPage();
    await loginPage.goToUrl();
    await loginPage.loginToTheApplication(testdata.username,testdata.password);
    await homePage.selectHotelType();
    await selectHotelPage.selectTheHotel();
    await bookHotelPage.bookAHotel();
    await bookingConfirmation.goToMyIternary();
});
