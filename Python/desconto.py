nome = input('Digite o nome do cliente: ')
sexo = int(input('Digite o sexo do cliente (1 para masculino ou 2 para feminino): '))
valor = float(input('Digite o valor total da compra: '))

if sexo == 1:
    valor_final = valor - (valor*5/100)
    print('O valor total das compras com desconto de 5% é de: R${:.2f}'.format(valor_final))
elif sexo == 2:
    valor_final = valor - (valor*13/100)
    print('O valor total das compras com desconto de 13% é de: R${:.2f}'.format(valor_final))
else:
    print('Sexo inválido. Digite novamente as informações de forma correta.')
