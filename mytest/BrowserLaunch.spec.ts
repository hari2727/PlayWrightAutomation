import{test, Page,Locator ,Browser, chromium, expect} from '@playwright/test'
import { WebKitBrowser,ChromiumBrowser } from 'playwright'

test('browserLaunch',async()=>{
const browser :Browser=await chromium.launch({headless:false,channel:'chrome'});
const page:Page = await browser.newPage();

await page.goto('https://www.facebook.com/login/');
const title =await page.title();

console.log("title of the page",title);

expect(title).toEqual(title);

const email:Locator=await page.locator("#email");
const password:Locator=await page.locator("#pass");
const loginButton:Locator= await page.locator("#loginbutton");
await email.fill("hariharan@123");
await password.fill("hari");
await loginButton.click();


await page.screenshot({path:'homepage.png'});

});