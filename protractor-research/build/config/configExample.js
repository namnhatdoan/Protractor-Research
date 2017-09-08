// conf.js
exports.config = {
    //framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['../spec.js'],
    // capabilities:{
    //   browserName: 'chrome'
    // },
    // ---- 1. To start a standalone Selenium Server locally ---------------------
    // seleniumServerJar?: string;
    //seleniumServerStartTimeout?: 30000;
    /*localSeleniumStandaloneOpts?: {
        port?: any;
        args?: any;
        jvmArgs?: string[];
    };*/
    //chromeDriver: 'C:\Users\namndoan\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\chromedriver_2.32.exe',
    //chromeDriver: 'E:\GeckoDriver\chromedriver.exe',
    //geckoDriver: "C:\Users\namndoan\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\geckodriver.exe",
    //geckoDriver: 'E:\GeckoDriver\geckodriver.exe',
    // ---- 2. To connect to a Selenium Server which is already running ----------
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumSessionId?: string,
    //sauceProxy?: string;
    //webDriverProxy?: string;
    //useBlockingProxy?: boolean;
    //blockingProxyUrl?: string;
    /* ---- 3. To use remote browsers via Sauce Labs -----------------------------
    sauceUser?: string;
    sauceKey?: string;
    sauceAgent?: any;
    sauceBuild?: string;
    sauceSeleniumUseHttp?: boolean;
    sauceSeleniumAddress?: string;
    */
    /* ---- 4. To use remote browsers via BrowserStack ---------------------------
    browserstackUser?: string;
    browserstackKey?: string;
    */
    //---- 5. To connect directly to Drivers ------------------------------------
    directConnect: true,
    //geckoDriver: 'E:\\NEXT\\GeckoDriver\\geckodriver.exe',
    //firefoxPath: "E:\\NEXT\\GeckoDriver\\geckodriver.exe",
    chromeDriver: 'E:\\NEXT\\GeckoDriver\\chromedriver.exe',
    // ---------------------------------------------------------------------------
    // ----- What tests to run ---------------------------------------------------
    // ---------------------------------------------------------------------------
    //noGlobals?: boolean;
    /**
     * Required. Spec patterns are relative to the location of this config.
     */
    //specs: ['../../specs/google/search.js'],
    specs: ['../../specs/ngaythobet/signin.js'],
    /**
     * Patterns to exclude specs.
     */
    exclude: ['../learning/*'],
    /**
     * run with --suite=smoke
     * Example:
     * suites: {
     *   smoke: 'spec/smoketests/*.js',
     *   full: 'spec/*.js'
     * }
     */
    //suites?: any;
    /**
     * default suite
     */
    //suite?: string;
    // ---------------------------------------------------------------------------
    // ----- How to set up browsers ----------------------------------------------
    // ---------------------------------------------------------------------------
    capabilities: {
        browserName: 'chrome',
    },
    //multiCapabilities?: Array<any>;
    /**
     * If you need to resolve multiCapabilities asynchronously (i.e. wait for
     * server/proxy, set firefox profile, etc), you can specify a function here
     * which will return either `multiCapabilities` or a promise to
     * `multiCapabilities`.
     *
     * If this returns a promise, it is resolved immediately after
     * `beforeLaunch` is run, and before any driver is set up. If this is
     * specified, both capabilities and multiCapabilities will be ignored.
     */
    //getMultiCapabilities?: any;
    /**
     * Maximum number of total browser sessions to run. Tests are queued in
     * sequence if number of browser sessions is limited by this parameter.
     * Use a number less than 1 to denote unlimited. Default is unlimited.
     */
    //maxSessions?: number;
    /**
     * Whether or not to buffer output when running tests on multiple browsers
     * in parallel. By default, when running multiple browser sessions, the
     * results are buffered and not logged until the test run finishes. If true,
     * when running multiple sessions in parallel results will be logged when
     * each test finishes.
     */
    //verboseMultiSessions?: boolean;
    // ---------------------------------------------------------------------------
    // ----- Global test information
    // ---------------------------------------------
    // ---------------------------------------------------------------------------
    /**
     * A base URL for your application under test. Calls to protractor.get()
     * with relative paths will be resolved against this URL (via url.resolve)
     */
    //baseUrl?: string;
    /**
     * A CSS Selector for a DOM element within your Angular application.
     * Protractor will attempt to automatically find your application, but it is
     * necessary to set rootElement in certain cases.
     *
     * In Angular 1, Protractor will use the element your app bootstrapped to by
     * default.  If that doesn't work, it will then search for hooks in `body` or
     * `ng-app` elements (details here: https://git.io/v1b2r).
     *
     * In later versions of Angular, Protractor will try to hook into all angular
     * apps on the page. Use rootElement to limit the scope of which apps
     * Protractor waits for and searches within.
     */
    //rootElement?: string;
    /**
     * The timeout in milliseconds for each script run on the browser. This
     * should be longer than the maximum time your application needs to
     * stabilize between tasks.
     */
    //allScriptsTimeout?: number;
    /**
     * How long to wait for a page to load.
     */
    //getPageTimeout?: number;
    /**
     * A callback function called once configs are read but before any
     * environment setup. This will only run once, and before onPrepare.
     *
     * You can specify a file containing code to run by setting beforeLaunch to
     * the filename string.
     *
     * At this point, global variable 'protractor' object will NOT be set up,
     * and globals from the test framework will NOT be available. The main
     * purpose of this function should be to bring up test dependencies.
     */
    beforeLaunch: () => {
    },
    /**
     * A callback function called once protractor is ready and available, and
     * before the specs are executed. If multiple capabilities are being run,
     * this will run once per capability.
     *
     * You can specify a file containing code to run by setting onPrepare to
     * the filename string. onPrepare can optionally return a promise, which
     * Protractor will wait for before continuing execution. This can be used if
     * the preparation involves any asynchronous calls, e.g. interacting with
     * the browser. Otherwise Protractor cannot guarantee order of execution
     * and may start the tests before preparation finishes.
     *
     * At this point, global variable 'protractor' object will be set up, and
     * globals from the test framework will be available. For example, if you
     * are using Jasmine, you can add a reporter with:
     *
     *    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
     *      'outputdir/', true, true));
     *
     * If you need access back to the current configuration object,
     * use a pattern like the following:
     *
     *    return browser.getProcessedConfig().then(function(config) {
     *      // config.capabilities is the CURRENT capability being run, if
     *      // you are using multiCapabilities.
     *      console.log('Executing capability', config.capabilities);
     *    });
     */
    onPrepare: () => {
    },
    /**
     * A callback function called once tests are finished. onComplete can
     * optionally return a promise, which Protractor will wait for before
     * shutting down webdriver.
     *
     * At this point, tests will be done but global objects will still be
     * available.
     */
    onComplete: () => {
    },
    /**
     * A callback function called once the tests have finished running and
     * the WebDriver instance has been shut down. It is passed the exit code
     * (0 if the tests passed). This is called once per capability.
     */
    onCleanUp: (exitCode) => {
    },
    /**
     * A callback function called once all tests have finished running and
     * the WebDriver instance has been shut down. It is passed the exit code
     * (0 if the tests passed). afterLaunch must return a promise if you want
     * asynchronous code to be executed before the program exits.
     * This is called only once before the program exits (after onCleanUp).
     */
    afterLaunch: (exitCode) => {
    },
    /**
     * The params object will be passed directly to the Protractor instance,
     * and can be accessed from your test as browser.params. It is an arbitrary
     * object and can contain anything you may need in your test.
     * This can be changed via the command line as:
     *   --params.login.user "Joe"
     *
     * Example:
     * params: {
     *   login: {
     *     user: 'Jane',
     *     password: '1234'
     *   }
     * }
     */
    //params?: any;
    /**
     * If set, protractor will save the test output in json format at this path.
     * The path is relative to the location of this config.
     */
    //resultJsonOutputFile?: any;
    /**
     * If true, protractor will restart the browser between each test. Default
     * value is false.
     *
     * CAUTION: This will cause your tests to slow down drastically.
     */
    //restartBrowserBetweenTests?: boolean;
    /**
     * Protractor will track outstanding $timeouts by default, and report them
     * in the error message if Protractor fails to synchronize with Angular in
     * time. In order to do this Protractor needs to decorate $timeout.
     *
     * CAUTION: If your app decorates $timeout, you must turn on this flag. This
     * is false by default.
     */
    //untrackOutstandingTimeouts?: boolean;
    /**
     * If set, Protractor will ignore uncaught exceptions instead of exiting
     * without an error code. The exceptions will still be logged as warnings.
     */
    //ignoreUncaughtExceptions?: boolean;
    /**
     * If set, will create a log file in the given directory with a readable log of
     * the webdriver commands it executes.
     *
     * This is an experimental feature. Enabling this will also turn on Blocking Proxy
     * synchronization, which is also experimental.
     */
    //webDriverLogDir?: string;
    /**
     * If set, Protractor will pause the specified amount of time (in milliseconds)
     * before interactions with browser elements (ie, sending keys, clicking). It will
     * also highlight the element it's about to interact with.
     *
     * This is an experimental feature. Enabling this will also turn on Blocking Proxy
     * synchronization, which is also experimental.
     */
    //highlightDelay?: number;
    // ---------------------------------------------------------------------------
    // ----- The test framework
    // ---------------------------------------------------------------------------
    /**
     * Test framework to use. This may be one of: jasmine, mocha or custom.
     * Default value is 'jasmine'
     *
     * When the framework is set to "custom" you'll need to additionally
     * set frameworkPath with the path relative to the config file or absolute:
     *
     *   framework: 'custom',
     *   frameworkPath: './frameworks/my_custom_jasmine.js',
     *
     * See github.com/angular/protractor/blob/master/lib/frameworks/README.md
     * to comply with the interface details of your custom implementation.
     *
     * Jasmine is fully supported as test and assertion frameworks.
     * Mocha has limited support. You will need to include your
     * own assertion framework (such as Chai) if working with Mocha.
     */
    framework: 'jasmine',
    /**
     * Options to be passed to jasmine.
     *
     * See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
     * for the exact options available.
     */
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        //defaultTimeoutInterval?: number;
        // Function called to print jasmine results.
        //print?: () => void,
        isVerbose: true,
        includeStackTrace: true,
    },
    /**
     * Options to be passed to Mocha.
     *
     * See the full list at http://mochajs.org/
     */
    //mochaOpts?: {[key: string]: any; ui?: string; reporter?: string;};
    /**
     * See docs/plugins.md
     */
    //plugins?: PluginConfig[];
    /**
     * Turns off source map support.  Stops protractor from registering global
     * variable `source-map-support`.  Defaults to `false`
     */
    skipSourceMapSupport: true,
    /**
     * Turns off WebDriver's environment variables overrides to ignore any
     * environment variable and to only use the configuration in this file.
     * Defaults to `false`
     */
    disableEnvironmentOverrides: false,
    /**
     * Tells Protractor to interpret any angular apps it comes across as hybrid
     * angular1/angular2 apps (i.e. apps using ngUpgrade)
     * Defaults to `false`
     *
     * @type {boolean}
     */
    ng12Hybrid: false,
    /**
     * Protractor will exit with an error if it sees any command line flags it doesn't
     * recognize. Set disableChecks true to disable this check.
     */
    disableChecks: false,
};
