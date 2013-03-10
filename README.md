# shorthand-position-stylus

Use CSS positions as properties that support [clockhand-stylus](https://github.com/jasonkuhrt/clockhand-stylus/blob/master/README.md#stylus-clockhand-shorthand) syntax

### Preview
```
.foo { absolute 1 _  }
.bar { fixed  _ 1 2 _ }  
.zed { relative  0 }
  

.foo { position:absolute; top:1; bottom:1; } 
.bar { position:fixed; right:1; bottom:2; }
.bar { position: relative; top: 0; right:0; bottom:0; left:0; }
```

### Summary
- Mixins: `absolute`/`fixed`/`relative`
- [clockhand-stylus syntax](https://github.com/jasonkuhrt/clockhand-stylus/blob/master/README.md#stylus-clockhand-shorthand) supported

.  
.  
.  
### Install

Until published on Npm, add git url to your `package.json`

### Roadmap
- Publish on Npm
- Make `!important` apply the the position property, not just the edge properties
