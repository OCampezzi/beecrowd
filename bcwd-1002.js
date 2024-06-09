var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines.shift());
let pi = 3.14159;

let area = pi * Math.pow(raio, 2);
console.log(`A=${area.toFixed(4)}`);