var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var p1 = lines.shift().split(" ");
var p2 = lines.shift().split(" ");

let x1 = parseFloat(p1.shift());
let y1 = parseFloat(p1.shift());
let x2 = parseFloat(p2.shift());
let y2 = parseFloat(p2.shift());

console.log(
  `${Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(4)}`
);
