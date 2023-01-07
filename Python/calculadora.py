def calculadora(num1,num2,operação):
    if operação == 1:
        soma = num1 + num2
        return soma
    elif operação == 2:
        subtracao = num1 - num2
        return subtracao
    elif operação == 3:
        multiplicacao = num1 * num2
        return multiplicacao
    elif operação == 4:
        divisao = num1 / num2
        return divisao
    else:
        return 0
