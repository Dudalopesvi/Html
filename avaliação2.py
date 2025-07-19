# 1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.
numero = int (input('Digite um número:'))
valor_inteiro = numero
for valor_inteiro in range(1,11):
    print(f'{numero}x{valor_inteiro} ={numero * valor_inteiro}')
    
    print(f'{valor_inteiro}')
    
# 2) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.
username = input('Digite seu username: ')
senha1 = int (input('Digite sua senha:'))
senha2 = int (input('Digite sua senha novamente:'))
while senha2 != senha1:
    senha2 = (input("Digite sua senha:"))