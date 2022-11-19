// An example configuration file.]
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/formedixlogin.js'],

  // overriding default value of getPageTimeout parameter //
  getPageTimeout: 10000,
  // overriding default value of allScriptsTimeout parameter for Protractor testing//      
  allScriptsTimeout: 10000,

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function () {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(30000);
},

};
