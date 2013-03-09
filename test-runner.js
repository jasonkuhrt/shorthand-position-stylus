


var testRunnerConfig = {
  stylus: {
    use: require('./index')(),
    import: 'shorthand-position'
  }
}

require('stylus-test-runner')(testRunnerConfig)

