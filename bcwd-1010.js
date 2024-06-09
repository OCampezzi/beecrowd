var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines.shift();
var linha2 = lines.shift();

var splittedLinha1 = linha1.split(' ');
var splittedLinha2 = linha2.split(' ');

var codigo1 = parseInt(splittedLinha1[0]);
var numeroPecas1 = parseInt(splittedLinha1[1]);
var valorUnitario1 = parseFloat(splittedLinha1[2]);

var codigo2 = parseInt(splittedLinha2[0]);
var numeroPecas2 = parseInt(splittedLinha2[1]);
var valorUnitario2 = parseFloat(splittedLinha2[2]);

var total = numeroPecas1 * valorUnitario1 + numeroPecas2 * valorUnitario2;
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);