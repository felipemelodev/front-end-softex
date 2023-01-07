def notas():
    lista = [0,1,2,3,4,5,6,7,8,9,10]

    soma_lista = 0
    for c in lista:
        soma_lista+=c
    media = soma_lista/len(lista)

    notasAbaixo6 = []
    notasAcima6 = []
    notasMedia = []
    maiorNota = 0
    menorNota = 10

    for c in range(len(lista)):
        if lista[c] < 6:
            notasAbaixo6.append(lista[c])
            if lista[c] < menorNota:
                menorNota = lista[c]

        elif lista[c] >= 6:
            notasAcima6.append(lista[c])
            if lista[c] >= media:
                notasMedia.append(lista[c])
                if lista[c] > maiorNota:
                    maiorNota = lista[c]

    return(f'''
    Média = {media}
    Quantidade de notas abaixo de 6: {len(notasAbaixo6)}
    Quantidade de notas igual ou acima de 6: {len(notasAcima6)}
    Quantidade de notas igual ou acima da média: {len(notasMedia)}
    Maior nota: {maiorNota}
    Menor nota: {menorNota}
    ''')

print(notas())
