const {devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
    //Option shared for all projects.
    timeout: 30800,
    use: {
        ignoreHTTPSErrors: true,
    },

    //options specfic to each project browser size
    projects: [
        { 
        name: 'Desktop Chromium',
        use:{
            browserName: 'chromium',
            viewport: {width: 1200, height: 720},
        },
    },
    name: 'Desktop Sa'
    
]
}