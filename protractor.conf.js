/*exports.config = {
  capabilities: {
    browserName: "firefox"
  },
  framework: 'mocha',
  specs: [
    'test/e2e/xx/x.spec.js'
  ],
  mochaOpts: {
    enableTimeouts: false
  },
  onPrepare: function () {
    process.env.PORT = 3001
    require('./server')
  }
}*/

exports.config = {
  framework: "mocha",
  specs: [
    'test/e2e/**/*.spec.js'
  ],
  mochaOpts: {
    enableTimeouts: false //Necessary to avoid possible timeout bugs with Mocha.
  },
  onPrepare: function () {
    //Booting node inside protractor.
    process.env.PORT = 3001
    require('./server')
  }
}
