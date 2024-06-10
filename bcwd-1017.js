var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let tempo = parseInt(lines.shift());
let velocidadeM = parseInt(lines.shift());
let distancia = tempo * velocidadeM;

console.log((distancia / 12).toFixed(3));
