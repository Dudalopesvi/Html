/*
INSTRUÇÕES PARA AS ATIVIDADES
Rode um código por vez. Quando testar e estiver tudo certo,
comente o código igual essas questões, utilizando /* e */

/*
1. A Porta do Guardião
Contexto: O guardião pergunta sua idade antes de entrar no castelo.

Se você tiver menos de 12 anos, ele diz “Entrada infantil”.


Entre 12 e 17, diz “Entrada jovem”.

Se for 18 ou mais, “Entrada adulto”.
*/
//Escreva seu código abaixo
console.log("\n Exercício 1 \n")
// declaração de variavel 
 let idade = prompt("digite sua idade: ")

 // se voce tiver menos de 12 anos, ele diz "entrada infantil"
 if(idade <12){
    alert("entrada infantil")
 }
//entre 12 e 17, diz "entrada jovem"
else if(idade <= 17){
    alert("entrada jovem")
}
// se for 18 ou mais, "entrada adulto"
else {
    alert("entrada adulto")
}


/*
2. A Escadaria Infinita (enquanto)
Contexto: Para subir até a torre do mapa, você sobe um degrau por vez.

Use while para imprimir: “Subindo... 1”, “Subindo... 2” ... até 10.
*/

console.log("\n Exercício 2 \n")
//Escreva seu código abaixo
let totaldegraus
let contador = 1

totaldegraus = prompt ("Quantos Degraus tem?")

while (contador <= totaldegraus ){
    alert("Subindo..." + contador)
    contador = contador + 1
}
 







/*
3. O Oráculo dos Números (positivo, negativo, zero)
Contexto: O Oráculo vê um número e precisa saber se é positivo, negativo ou zero.

Peça um número e mostre a categoria usando condicionais.
*/

console.log("\n Exercício 3 \n")

let num1 = prompt("digite seu numero")
if(num1 > 0){
    alert("numero positivo")
}
else if(num1 < 0){
    alert("numero negativo")
}
else {
    alert("numero igual a zero")
}

/*
 




/*
4. O Cofre Secreto (senha simples)
Contexto: Há um cofre que abre com senha.

Peça uma senha. Se for "1234", exiba “Cofre aberto”.

Caso contrário, “Senha incorreta”.
*/
//Escreva seu código abaixo
console.log("\n Exercício 4 \n")
let senha = prompt("digite sua senha")
if (senha==1234){
    alert("cofre aberto")
}
else {
   alert("senha incorreta")
}



/*
5. O Cofre Teimoso (senha com loop)
Contexto: O cofre só abre quando a senha certa for digitada.

Use while para pedir senha até o usuário acertar "1234".

Ao acertar, escreva “Acesso concedido”.
*/
//Escreva seu código abaixo
console.log("\n Exercício 5 \n")
let indentificação = "1234"
let tentativa = prompt ("Digite sua senha: ")

while(tentativa != 1234 ){
    prompt("digite sua senha :")
    alert ("senha incorreta, tente novamente ")
}
tentativa = indentificação
alert ("cofre aberto")

/*
6. A Torre dos Degraus (soma com while)
Contexto: Precisamos saber quantos degraus você subiu até uma certa altura.

Pergunte ao usuário quantos degraus quer subir (n).

Use while, some de 1 até n e exiba a soma total de degraus subidos.
*/
//Escreva seu código abaixo
console.log("\n Exercício 6 \n")



/*
7. Os Pergaminhos da Sabedoria (for com soma)
Contexto: Um sábio te pede para contar quantos pergaminhos existem de 1 até n.

Peça n e use for para contar de 1 a n e exibir “Total de x pergaminhos”.
*/
//Escreva seu código abaixo
console.log("\n Exercício 7 \n")
