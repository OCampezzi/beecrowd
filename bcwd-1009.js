var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let nome = lines.shift();
let salario = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());

let salarioTotal = salario + vendas * 0.15;
console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);
