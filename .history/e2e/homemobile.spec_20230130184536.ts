import {test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices ['iPhone XR']
})

test.describe("")