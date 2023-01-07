numeros = []
soma=0

for c in range(1,6):
  numeros.append(float(input(f'Número {c}:')))
  soma = numeros[c-1] + soma


media = soma / len(numeros)

print(f'Soma dos números digitados: {soma}')
print(f'Média dos números digitados: {media}')
