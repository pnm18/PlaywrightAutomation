const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/practice")

});
test.only('page Playwright Test', async ({page})=>
{

await page.goto("https://google.com");
//gettitle - assertion
console.log (await page.title());
await expect(page).toHaveTitle("Google");


});