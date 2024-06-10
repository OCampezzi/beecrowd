var input = require("fs").readFileSync("/dev/stdin", "utf8");
var value = input.split("\n");

function cedulas(valor) {
  console.log(valor);
  var notas100 = 0,
    notas50 = 0,
    notas20 = 0,
    notas10 = 0,
    notas5 = 0,
    notas2 = 0,
    notas1 = 0;

  if (valor >= 100) {
    notas100 = parseInt(valor / 100);
    valor %= 100;
  }
  if (valor >= 50) {
    notas50 = parseInt(valor / 50);
    valor %= 50;
  }
  if (valor >= 20) {
    notas20 = parseInt(valor / 20);
    valor %= 20;
  }
  if (valor >= 10) {
    notas10 = parseInt(valor / 10);
    valor %= 10;
  }
  if (valor >= 5) {
    notas5 = parseInt(valor / 5);
    valor %= 5;
  }
  if (valor >= 2) {
    notas2 = parseInt(valor / 2);
    valor %= 2;
  }
  notas1 = valor;

  console.log(`${notas100} nota(s) de R$ 100,00`);
  console.log(`${notas50} nota(s) de R$ 50,00`);
  console.log(`${notas20} nota(s) de R$ 20,00`);
  console.log(`${notas10} nota(s) de R$ 10,00`);
  console.log(`${notas5} nota(s) de R$ 5,00`);
  console.log(`${notas2} nota(s) de R$ 2,00`);
  console.log(`${notas1} nota(s) de R$ 1,00`);
}

cedulas(value.shift());
