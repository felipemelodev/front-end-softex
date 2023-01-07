import time

tempo = int(input('Defina a quantidade de segundos até a bomba explodir: '))

print('INICIANDO CONTAGEM REGRESSIVA!')
for c in range(tempo,-1,-1):
    time.sleep(1)
    print(c)

print('BUM!')
