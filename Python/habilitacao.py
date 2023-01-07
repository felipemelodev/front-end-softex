rodas = int(input('Quantidade de rodas: '))
peso = float(input('Peso bruto em quilogramas: '))
pessoas = int(input('Quantidade de pessoas no veículo: '))

if rodas == 2 or rodas == 3:
    print('A melhor categoria de habilitação para esse veículo é: Categoria A.')

elif rodas == 4 and pessoas <= 8 and peso <= 3500:
    print('A melhor categoria de habilitação para esse veículo é: Categoria B.')

elif rodas >= 4 and peso >= 3500 and peso <= 6000:
    print('A melhor categora de habilitação para esse veículo é: Categoria C.')

elif rodas >= 4 and pessoas > 8:
    print('A melhor categora de habilitação para esse veículo é: Categoria D.')

elif rodas >= 4 and peso > 6000:
    print('A melhor categora de habilitação para esse veículo é: Categoria E.')
