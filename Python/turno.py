turno = input('Em que turno você estuda? Responda com M para matutino, V para vespertino ou N para noturno: ')

if turno == 'M':
    print('Bom dia!')

elif turno == 'V':
    print('Boa tarde!')

elif turno == 'N':
    print('Boa noite!')

else:
    print('Turno inválido, responda novamente de forma correta!')
