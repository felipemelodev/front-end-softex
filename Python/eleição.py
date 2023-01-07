x = []
y = []
z = []
brancos = []
nulos = []

voto = int(input('Digite o número do candidato em que deseja votar: '))


final = int(input('Deseja finalizar a votação? (Digite 1 para CONTINUAR ou 2 para FINALIZAR): '))
while final < 1 or final > 2:
    final = int(input('Digite um número válido: (Digite 1 para CONTINUAR ou 2 para FINALIZAR): '))

