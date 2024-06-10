var input = require("fs").readFileSync("/dev/stdin", "utf8");

let distancia = parseInt(input);

function calcDistancia(dist) {
  return dist * 2;
}

console.log(`${calcDistancia(distancia)} minutos`);
