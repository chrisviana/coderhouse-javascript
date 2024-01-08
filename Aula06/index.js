// EXEMPLOS DE FOR

// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// let numero = parseInt(prompt("Digite um numero"))

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i
//   console.log(numero + " X " + i + " = " + resultado)
// }

// let numero = parseInt(prompt("Inserir Número"));

// function produtorio(numero) {
//   let resultado = 1;
//   for (let i = 1; i <= numero; i++) {

//     resultado = resultado * i;
//   }
//   console.log("Produtorio de " + numero + " = " + resultado);
// }

// produtorio(numero)

// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     break
//   }
//   console.log(i)
// }

// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     continue
//   }
//   console.log(i)
// }

// function exibirNumerosMenores(numero) {
//   if (numero >= 1 && numero <= 10) {
//     console.log("Numeros menores que " + numero + ":")
//     for (let i = 1; i < numero; i++) {
//       console.log(i)
//     }
//   } else {
//     console.log("Por favor insira um numero de 1 a 10")
//   }

// }

// let numeroInserido = parseInt(prompt("Inserir um numero"))
// exibirNumerosMenores(numeroInserido)
// ############################################################
// Exemplo de While

// let entrada = prompt("Inserir uma palavra...")
// while (entrada != "sair") {
//   alert("O usuário inseriu " + entrada)
//   entrada = prompt("Inserir uma palavra dentro do whiele...")
// }


// function calcularFatorial(numero) {
//   console.log(numero)
//   if (numero < 0) {
//     console.log("Digite um numero positivo")
//     return
//   }

//   let resultado = 1
//   let i = 1

//   while (i <= numero) {
//     resultado *= i
//     i++
//   }

//   console.log("O fatorial de " + numero + " é " + resultado)

// }

// let numeroDigitado = parseInt(prompt("Digite o numero"))
// calcularFatorial(numeroDigitado)


let entrada;

while (entrada !== null && entrada !== "") {
  entrada = prompt("Inserir um nome")
  console.log(entrada)
  alert("Voce digitou: " + entrada)
}


// ############################################################
// Exemplo de  Do While

// let numero = 0
// do {
//   numero = prompt("Inserir um numero...")
//   console.log(numero)
// } while (parseInt(numero))

// let cont = 0

// do {
//   console.log("Este é o looop numero " + cont)
//   cont++
// } while (cont == 0)

// while (cont != 0) {
//   console.log("While")
// }


// ############################################################
// Exemplo de switch

// let entrada = prompt("Digite seu nome...")

// while (entrada != 'sair') {
//   switch (entrada) {
//     case "Christian":
//       alert("Ola Christian")
//       break
//     case "Camilla":
//       alert("Olá Camilla")
//       break
//     case "Fabio":
//       alert("Olá Fabioa")
//     default:
//       alert("Olá desconhecido")
//       break
//   }

//   entrada = prompt("Digite seu nome")
// }

// function identificarDezena(numero) {
//   if (numero < 1 || numero > 100) {
//     console.log("Digite um numero entre 1 a 100")
//     return
//   }

//   let dezena = Math.floor(numero / 10) * 10
//   switch (dezena) {
//     case 0:
//       console.log("O numero " + numero + "pertence a familia do 0")
//       break
//     case 10:
//       console.log("O numero " + numero + "pertence a familia do 10")
//       break
//     case 20:
//       console.log("O numero " + numero + "pertence a familia do 20")
//       break
//     case 30:
//       console.log("O numero " + numero + "pertence a familia do 30")
//       break
//     case 40:
//       console.log("O numero " + numero + "pertence a familia do 40")
//       break
//     case 90:
//       console.log("O numero " + numero + "pertence a familia do 90")
//       break
//   }
// }

// let numeroInserido = parseInt(prompt("Insira um numero"))
// identificarDezena(numeroInserido)