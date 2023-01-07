from time import sleep

n = int(input('Digite um número inteiro positivo: '))

for c in range(n+1):
    print(c)
    sleep(0.1)
print('FIM!')
