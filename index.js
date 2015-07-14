// It shall be called ruq
var fs = require('fs');
var path = require('path');

// Get a basic understanding of how file paths / names work
console.log('Globals');
console.log(__dirname);
console.log(__filename);

console.log("\nUsing path module");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));

// Define callback that will check for node_modules
var isRoot = function(err, files) {
  var exists = false;
  while (!exists)
  {
    if (files.indexOf('node_modules') != -1)
      exists = true;

    parent = path.resolve(cwd + '/..');
    console.log(parent);
    files = fs.readdirSync(path.resolve(parent));
  }

  return exists;
}

console.log("\nDo work");
var cwd = path.dirname(__filename);
fs.readdir(cwd, isRoot);
//console.log(process.env);


// path.separator; // : or ;
// path.normalize(); // Normalizes directory

/* 1. Add something to NODE_PATH and see if it affects the requires
 * 2. Inspect the following line and see what required object looks like:
require('module').Module._initPaths();
 * 3. Determine the absolute path to the root of this project
 * 4. Determine the absolute path to the root of a project that requires this module
 */
