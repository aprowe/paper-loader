/**
 * PaperScript Loader
 * This is a simple loader to load in the source code and
 * wrap it in a portable function.
 */
module.exports = function(source) {

  return [
    'var paper = require("paper")',

    // Export a function that will create the scope
    // set up the view and execute the code.
    'module.exports = function(view) {',

    // Create new scope
    'var scope = new paper.PaperScope()',

    // Copy any globals to the scope
    'paper.install(scope)',

    // Set up the scope on the view param passed in
    'paper.setup(view)',

    // This part is a hack- we need paper.js to think
    // it is a node environiment, when it is actually browser
    // this prevents paper from appending <script>s to execute code
    'scope.agent.chrome = false',
    'scope.agent.firefox = false',

    // Execute the source code
    'scope.execute(' + JSON.stringify(source) + ')',
    'return scope',
    '}'
  ].join(';\n');

};
