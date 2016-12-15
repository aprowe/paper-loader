# [PaperJS](http://paperjs.org) loader for [webpack](http://webpack.github.io/)

## Install

`npm install paper-loader paper --save-dev`

The paper-loader requires [paper](http://paperjs.org) and [webpack](https://github.com/webpack/webpack)
as a [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies). Thus you are able to specify the required versions accurately.

---

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var executePaperScript = require('file.paper.js');

// Wait for canvas to be created
window.onload = function () {
  // Call the module to create a paperjs scope and execute the code
  var scope = executePaperScript('myCanvasID');
}
```

The module returns a function that can be called to create a PaperJS Scope.
It takes one parameter that sets up the view, and returns the scope created.

<!-- See [PaperScope] and [PaperScope.setup]; -->

### Apply via webpack config


``` javascript
module.exports = {
  ...
  module: {
    loaders: [
      {
        test: /\.paper.js$/,
        loader: "paper-loader"
      }
    ]
  }
};
```

## License

MIT
