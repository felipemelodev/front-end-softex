nome = input('Digite seu nome completo: ')
salario = float(input('Digite seu salário atual: '))
tempo = int(input('A quantos anos trabalha na empresa? '))

if tempo <= 3:
    salario_novo = salario + (salario*3/100)
    print('Parabéns {}! Seu novo salário é de R${:.2f}'.format(nome, salario_novo))
elif tempo > 3 and tempo < 10:
    salario_novo = salario +(salario*12.5/100)
    print('Parabéns {}! Seu novo salário é de R${:.2f}'.format(nome, salario_novo))
elif tempo >= 10:
    salario_novo = salario + (salario*20/100)
    print('Parabéns {}! Seu novo salário é de R${:.2f}'.format(nome, salario_novo))
