exports.config = {

    // The address of a running selenium server.
    seleniumServerJar: 'lib/Selenium/selenium-server-standalone-2.35.0.jar',
    chromeDriver: 'lib/Selenium/chromedriver.exe',
    seleniumPort: 4444,
    seleniumArgs: [],
    sauceUser: null,
    sauceKey: null,


    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['e2e/**/*.e2e.js'],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:81',

    jasmineNodeOpts: {
        // onComplete will be called before the driver quits.
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true
    }
};
