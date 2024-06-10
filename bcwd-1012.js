var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());
let pi = 3.14159;

console.log(`TRIANGULO: ${((a * c) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(pi * Math.pow(c, 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((a + b) * c) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(b * b).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);
