sexo = int(input('Qual o seu sexo? Digite 1 para Masculino ou 2 para Feminino: '))
h = float(input('Digite a sua altura: '))

if sexo == 1:
    peso_ideal = (72.7*h)-58
    print('De acordo com seu sexo e altura, seu peso ideal é de {:.1f}kg'.format(peso_ideal))

elif sexo == 2:
    peso_ideal = (62.1*h)-44.7
    print('De acordo com seu sexo e altura, seu peso ideal é de {:.1f}kg'.format(peso_ideal))

else:
    print('Sexo inválido, responda novamente de forma correta.')
