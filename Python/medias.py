nome = input('Digite o seu nome completo: ')
nota1 = float(input('Digite a primeira nota: '))
nota2 = float(input('Digite a segunda nota: '))
faltas = int(input('Quantas faltas você teve? '))
media = (nota1 + nota2)/2

if media < 7:
    print(f'{nome}, infelizmente você foi reprovado.')

elif faltas > 3:
    print(f'{nome}, você foi reprovado por faltas.')

else:
    print(f'{nome}, parabéns, você foi aprovado!')
