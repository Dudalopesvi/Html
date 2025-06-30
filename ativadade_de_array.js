const num = [3,7,18,21,33]

function inserirFinalArray() {
    var novonum = prompt("Digite um novo número:")
    num.push(novonum)
    console.log(num)
}

function Calcularnum() {
var novonum = prompt("Digite o número que você colocou antes: ")
    media=(3+7+18+21+33+ novonum)/6
    alert("A sua média é" + media)
    console.log(num)
}

