



//  Shorthand Omissions Test Runner
//  -------------------------------


var testRunnerConfig = {
  describe: 'Position shorthand',
  stylus: {
    use: require('./index')(),
    import: 'position-shorthand'
  },
  mocha: { reporter: 'min' }
}

require('stylus-test-runner')(testRunnerConfig)

