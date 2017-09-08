// conf.js
exports.config = {
    directConnect: true,
    chromeDriver: 'E:\\NEXT\\GeckoDriver\\chromedriver.exe',
    specs: ['../specs/ngaythobet/signin.js'],
    exclude: ['../learning/*'],
    capabilities: {
        browserName: 'chrome',
    },
    beforeLaunch: () => {
    },
    onPrepare: () => {
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
    },
    onComplete: () => {
    },
    onCleanUp: (exitCode) => {
    },
    afterLaunch: (exitCode) => {
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
    },
    skipSourceMapSupport: true,
    ng12Hybrid: false,
    disableChecks: false,
};
