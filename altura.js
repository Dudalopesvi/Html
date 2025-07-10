// fazer um programa para ler um número inteiro N e a altura de N pessoas. 
// Armamzene as N alturas em um vetor. Em seguida,mostrar a altura média dessas pessoas.
let num = prompt("Quantas alturas você vai cadastrar?")
let alturas = []

let soma = 0
for (let i = 0; i < num; i++) {
    let altura = Number (prompt(`Qual é a ${i+1} altura:`))
soma = soma + altura // somando as alturas para calcular a média
   alturas[i] = altura // armazenando a altura no vetor

}
let media = soma / num

alert(`a media é ${i}`)