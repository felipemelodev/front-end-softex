salario = float(input('Qual o seu salário atual? '))
aumento20 = salario*20/100
aumento15 = salario*15/100
aumento10 = salario*10/100
aumento5 = salario*5/100

if salario <= 280:
    print('''
    Salário antes do reajuste: R${:.2f}
    Percentual de aumento aplicado: 20%
    Valor do aumento: R${:.2f}
    Novo salário: R${:.2f}
    '''.format(salario, aumento20, salario + aumento20))

elif salario > 280 and salario <= 700:
    print('''
    Salário antes do reajuste: R${:.2f}
    Percentual de aumento aplicado: 15%
    Valor do aumento: R${:.2f}
    Novo salário: R${:.2f}
    '''.format(salario, aumento15, salario + aumento15))

elif salario > 700 and salario <= 1500:
    print('''
    Salário antes do reajuste: R${:.2f}
    Percentual de aumento aplicado: 10%
    Valor do aumento: R${:.2f}
    Novo salário: R${:.2f}
    '''.format(salario, aumento10, salario + aumento10))

elif salario > 1500:
    print('''
    Salário antes do reajuste: R${:.2f}
    Percentual de aumento aplicado: 5%
    Valor do aumento: R${:.2f}
    Novo salário: R${:.2f}
    '''.format(salario, aumento5, salario + aumento5))
