#   1) Crie um algoritmo no qual seja digitado a distância percorrida em quilômetros,
#   o tipo do carro e informe ao final a média de consumo estimado de combustível. 
#   Sabendo-se que um carro do tipo A faz 8km/litro, o carro do tipo B faz 12km/
#   litro e o tipo C faz 9km/litro. 
#   Caso seja fornecido um tipo de carro inválido (diferente de A, B ou C) 
#   o algoritmo deve mostrar uma mensagem "Tipo de carro inválido!" e encerrar.


distância = float (input('Qual foi a distância\km percorrida?')) 
tipo_carro = input('digite qual o tipo do carro?').upper()

match tipo_carro :
     case "A":
        consumo = distância / 8
        print(f'o consumo estimado foi de {consumo: .2f}litros')
     case "B":
         consumo = distância /12
         print(f'o consumo estimado foi de {consumo: .2f}litros')
     case "C":
        consumo = distância / 9
        print(f'o consumo estimado foi de {consumo: .2f}litros')
        case_: any
        print("tipo invalido") 

# 2) Crie um programa que leia três lados de um triângulo e determine se ele é equilátero, 
# isósceles ou escaleno.
# Quando os três lados forem iguais trata-se de um triângulo equilátero,
# dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.
lado1 = input('Qual o primeiro lado do seu triangulo:')
lado2 = input("Qual o seu segundo lado:")
lado3 = input('Qual seu terceiro lado:')

if(lado1 == lado2 and lado2 == lado3):
 print('triangulo equilatero!')
 
elif (lado3!= lado2 and lado1 !=lado3 and lado1!=lado2):
    print('triangulo escaleno!')
    
else :
    print("Triangulo isosceles!")   
 

# 3) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 3 pessoas.
# Ao final mostrar a soma das idades e a média das idades. 
nome = input("qual o seu nome:")
nome1 = input("qual o seu nome:")
nome2 = input("qual o seu nome:")
idade = int (input("qual a sua idade:"))
idade1 = int (input("qual a sua idade:"))
idade2 = int (input("qual a sua idade:"))

media = (idade+idade1+idade2) 
resutado = media / 3
print(f'o resultado é {resutado}') 

# # 4) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50.
# # A loja possui benefícios para assinantes em três categorias:
# 2) Assinante Gold, ganha 20% de desconto mas paga frete
# 3) Assinante Silver, ganha 10% de desconto mas paga frete.
# 4) Não assinante, sem benefícios.
# Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). 
# Mostrar na tela o valor da compra de acordo com a opção escolhida.



print("---ASSINATURAS---")
print('1) Assinante Premium, ganha 20% de desconto e frete grátis')
print('2) Assinante Gold, ganha 20% de desconto mas paga frete')
print('3) Assinante Silver, ganha 10% de desconto mas paga frete.')
print('4) Não assinante, sem benefícios.')

opção = int (input('Digite a sua escolha:'))
valor = float (input("Digite o valor da sua conta:"))

if opção == "1":  
    AssinantePremium = valor * 0.20
    calculo1 = valor - AssinantePremium
    print(f"O valor da sua compra é de: {AssinantePremium} ")
elif opção == "2":
    AssinanteGold =  valor * 0.20
    calculo2 = valor - AssinanteGold
    print(f"O valor da sua compra é de: {AssinanteGold} ")
elif opção == "3":
    AssinanteSilver = valor * 0.10
    calculo3 = valor - AssinanteSilver
    print(f"O valor da sua compra é de: {AssinanteSilver} ")
else:
  NãoAssinante = valor + 12.50
  print(f"O valor da sua compra é de: {NãoAssinante}")
    
    