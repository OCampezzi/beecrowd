var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notaA = parseFloat(lines.shift());
let notaB = parseFloat(lines.shift());
let notaC = parseFloat(lines.shift());

let media = (notaA * 2 + notaB * 3 + notaC * 5) / 10;
console.log(`MEDIA = ${media.toFixed(1)}`);