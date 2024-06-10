var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let distancia = parseInt(lines.shift());
let combustivelGasto = parseFloat(lines.shift());

console.log(`${(distancia / combustivelGasto).toFixed(3)} km/l`);
