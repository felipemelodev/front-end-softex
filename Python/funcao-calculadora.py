op = 1

while op != 0:

    op = int(input('''
    Qual operação deseja realizar?
    1: Soma
    2: Subtração
    3: Multiplicação
    4: Divisão
    0: Sair

    Digite o número da operação:
    '''))

    while op > 4 or op < 0:
        op = int(input('''
        Operação inválida, tente novamente:
        1: Soma
        2: Subtração
        3: Multiplicação
        4: Divisão
        0: Sair
    
    Digite o número da operação:
    '''))

    if op == 0:
        break

    num1 = float(input('Digite o primeiro valor: '))
    num2 = float(input('Digite o segundo valor: '))

    if op == 1:
        soma = num1 + num2
        print(f'{num1} + {num2} = {soma}')

    elif op == 2:
        subtração = num1 - num2
        print(f'{num1} - {num2} = {subtração}')

    elif op == 3:
        multiplicação = num1 * num2
        print(f'{num1} x {num2} = {multiplicação}')

    elif op == 4:
        divisão = num1 / num2
        print(f'{num1} / {num2} = {divisão}')
