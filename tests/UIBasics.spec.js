const {test, expect} = require('@playwright/test');


test.only('Browser Context Playwright test', async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagepractice");
    console.log(page.title());
//automating login page 
await page.locator("input#username").fill("poonamgaur");
await page.locator("input#password").fill("password");
await page.locator("#signInBtn").click();

});
test('page Playwright Test', async ({page})=>
{

await page.goto("https://google.com");
//gettitle - assertion
console.log (await page.title());
await expect(page).toHaveTitle("Google");


});