import {test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices ['iPhone XR']
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for colours on iPhone XR', async ( page )) => {
        await page.goto('http://')
    }
})