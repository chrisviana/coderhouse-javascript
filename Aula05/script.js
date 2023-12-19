variavel global
var nome = "Lucas"

function sobrescreveNome() {
  //aqui dentro é um escopo
  var nome = "Jonas"
  console.log("Nome: " + nome)
}

function sobrescreveNomeNovamente() {
  var nome = "Maria"
  console.log("Nome2: " + nome)
}

sobrescreveNome()
sobrescreveNomeNovamente()

console.log(nome)


var resultado = 0

function somar(primeiroNumero, segundoNumero) {
  var resultado = primeiroNumero + segundoNumero
}

somar(10, 40)
console.log(resultado)

var desconto;

function calculaDesconto(preco) {
  desconto = preco * 0.4
}

calculaDesconto(50)
console.log("desconto de 40% = R$" + desconto)


//ESCOPO GLOBAL
var nome = "Maria"

function saudacao() {
  //Escopo LOCAL
  var nome = "Joao"
  console.log(nome)
}

saudacao()
console.log(nome)

let idade = 5;
idade = 10
console.log(idade)
const sobrenome = "Viana"
sobrenome = "Coelho"
console.log(sobrenome)

const PORT = 5000
const bancoDeDados = env.bancoDeDados



function somar(n1, n2) {
  let qualResultadoMaior = 0;
  if (n1 > n2) {
    resultado = n1 + n2
  } else {
    resultado = n2 + n1
  }

  if (resultado > qualResultadoMaior) {
    let estouAqui = "Aqui"
    qualResultadoMaior = resultado

    if (estouAqui == "Aqui") {
      console.log("Estou na Aula")
    }
  }

  console.log(estouAqui)

  console.log(qualResultadoMaior)

  return resultado
}

console.log(somar(1, 2))
console.log(qualResultadoMaior)



if (true) {
  var variavel1 = 'teste'
}
console.log(variavel1)

if (true) {
  let variavel2 = 'teste2'
  console.log(variavel2)
}
console.log(variavel2)


var num1 = 3

notaFiscal = "Valor da nota fiscal de 10 reais"
quantidadeDeProdutosNaNota = 10
valorDaNota = 20


num2 = 4
console.log(num1 + ' ' + num2)
var num2

nome = 10
b = "Viana"
console.log(a + ' ' + b)

function exibir() {

  frase = "Olá Fabio"
  console.log(frase)


}

var frase;
exibir()