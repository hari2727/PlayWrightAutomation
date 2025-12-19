import{test,Browser, chromium, Page, expect} from '@playwright/test'


test('HandlesAlert',async()=>{
const browser :Browser = await chromium.launch({headless:false ,channel:'chrome'});
const page:Page=await browser.newPage()

await page.goto('https://gotranscript.com/text-compare');

await page.fill('//textarea[@placeholder="Paste one version of the text here."]','Welcome to Automation');



// for combination of two buttons we use---> press , 
//for single single we use ---> down and up, down(press), up(release)

await page.keyboard.press('Control+A');

await page.keyboard.press('Control+C');
//tab
await page.keyboard.down('Tab');
await page.keyboard.up('Tab');

await page.keyboard.press('Control+V');

await page.waitForTimeout(5000);




}); 
