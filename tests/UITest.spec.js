import { test } from "playwright/test";

test("Firstt Test", async ({browser}) => {

    const context=await browser.newContext();
    const page=await context.newPage(context);
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    const attachedShadow=document.querySelector(".shadow").attachShadow({mode:open}).querySelector
    
})