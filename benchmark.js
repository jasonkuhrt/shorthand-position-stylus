


var uubench = require('uubench');
var stylus  = require('stylus');

uubench.defaults = {
  type: 'fixed',
  iterations: 100,
  delay: 1
};

var suite = new uubench.Suite({
  start: function() {
    console.log("starting...");
  },
  result: function(name, stats) {
    console.log(name + ": " + stats.elapsed);
    console.log(name + ": " + stats.iterations/stats.elapsed);
  },
  done: function() {
    console.log("finished");
  }
});


var a = stylus('.a{color:red;} .foo { absolute: 4px 2px;}')
.use(require('./index'))
.import('position-shorthand')

suite.bench("absolute", function(next) {
  a.render(function(err,r) {
    next();
  });
});


suite.run();
