var Lisp = require('brandly-lisp');
var readline = require('readline');
var lisp = new Lisp();
var package = require('./package');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line){
  if (line.length) {
    try {
      var result = lisp.exec(line);
      handleResult(result);
    } catch (e) {
      write(e.toString() + '\n');
    }
  }

  writePrompt();
});

function write(message) {
  process.stdout.write(message);
}

function writePrompt() {
  write('>> ');
}

function handleResult(result) {
  if (typeof result !== 'undefined') {
    write(result.toString() + '\n');
  }
}

write('brandly-lisp v' + package.version + '\n');
writePrompt();
