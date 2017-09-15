// conf.js
const SRC_PATH ="../../";
exports.config = {
    directConnect: true,
    chromeDriver: 'E:\\NEXT\\GeckoDriver\\chromedriver.exe',
    specs: ['../specs/pa/spec.js'],
    //specs:['../specs/testDDD.js'],
    exclude: ['../learning/*'],
    capabilities: {
      browserName: 'chrome',
    },

    beforeLaunch: () => {

    },
  
    onPrepare: () => {
      let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },
  
    onComplete: () => {
  
    },
  
    onCleanUp: (exitCode: number) => {
      
    },
  
    afterLaunch: (exitCode: number) => {

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
  
    // params: {
    //     //fileaddr: 'E:\\Workspace\\Nodejs\\protractor-research\\data\\test.csv'
    // }
}