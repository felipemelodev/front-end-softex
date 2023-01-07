import time
agora = (time.localtime())
ano = agora.tm_year

#time.localtime retorna varios elementos sobre o horario atual no local em que o código foi rodado.
#usei o nome da variavel .tm_year para pegar o ano, ou seja, o código funciona em qualquer ano que precise
#por exemplo, caso eu quisesse usar as horas, eu usaria .tm_hour, os minutos, .tm_min, e assim por diante

nascimento = int(input('Em que ano você nasceu? '))

if ano - nascimento < 18:
    print('Você ainda não tem 18 anos, portanto não pode votar.')
else:
    print('Você já pode votar, faça boas escolhas.')
