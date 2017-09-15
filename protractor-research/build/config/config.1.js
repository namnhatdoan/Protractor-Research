// conf.js
exports.config = {
    directConnect: true,
    chromeDriver: 'E:\\NEXT\\GeckoDriver\\chromedriver.exe',
    //specs: ['../specs/pa/spec.js'],
    specs: ['../specs/testDDD.js'],
    exclude: ['../learning/*'],
    capabilities: {
        browserName: 'firefox',
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
