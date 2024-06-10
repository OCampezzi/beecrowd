var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let raio = parseFloat(lines.shift());
let pi = 3.14159;

console.log(`VOLUME = ${((4 / 3) * pi * Math.pow(raio, 3)).toFixed(3)}`);
