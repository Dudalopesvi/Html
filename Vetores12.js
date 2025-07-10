let nome = prompt("Qual é seu nome?")
let senha = Number ( prompt("Qual é sua senha?"))



while (senha != "1234" && nome != "nome")  {
   alert ("Erro, escreva novamente")

    nome = prompt("Qual é seu nome?")
     senha = Number (prompt("Qual é sua senha?"))
     console.log(senha)
}

alert("acesso liberado!" + (nome))
/*
let contador = 0
while (true) {

let login = prompt("digite seu login:")
let senha = prompt("Digite sua senha: ")

if ( login === "admin" && senha === "123456"){
    alert ('Bem vindo ${login}')
break;
 

}else {

    alert("Credenciais inválidas, tente novamente ")
}
}
if (contador ===3){
    alert("conta bloqueada, entre em contato com o suporte tecnico do senai")
}
}
    */