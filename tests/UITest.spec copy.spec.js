import { test,expect } from "playwright/test";
import { allure } from "allure-playwright";


test("First Test", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    expect.soft(page.locator(".las"))
   
    
})