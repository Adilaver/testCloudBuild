import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";
import { test,chromium } from "@playwright/test";

setDefaultTimeout(60000)

BeforeAll(async function () {
   global.browser = await chromium.launch({
       headless: false,
       slowMo: 1000,
   });

});

AfterAll(async function () {
   await global.browser.close();
});

Before(async function () {
   global.context = await global.browser.newContext();
   global.page = await global.context.newPage();
});

After(async function () {
   await global.page.close();
   await global.context.close();
});