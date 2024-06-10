var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());

function verificaMaior(a, b, c) {
  let maiorAB = (a + b + Math.abs(a - b)) / 2;
  let maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

  return maiorABC;
}

console.log(`${verificaMaior(a, b, c)} eh o maior`);
