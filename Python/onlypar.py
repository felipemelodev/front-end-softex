try:
    num = int(input('Digite um número par: '))
except Exception as erro:
    print('Valor inválido, você precisa digitar um número')
    print(erro)
    num = int(input('Tente novamente, digite um número par: '))

if num%2 != 0:
    raise Exception('ERRO! Número ímpar digitado. Digite um número par.')
