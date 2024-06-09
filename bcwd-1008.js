var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorPorHora = parseFloat(lines.shift());

let salario = valorPorHora * horasTrabalhadas;
console.log(`NUMBER = ${num}\nSALARY = U$ ${salario.toFixed(2)}`);