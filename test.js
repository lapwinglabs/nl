var fs = require('fs');
var read = fs.readFileSync;
var nl = require('./')

var str = read('./Readme.md', 'utf8');

console.log(nl(str));
