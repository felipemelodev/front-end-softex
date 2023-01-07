class complexos:

    def soma():
        n1 = int(input('Digite a parte real do primeiro número complexo: '))
        n2 = int(input('Digite a parte imaginária do primeiro número complexo: '))
        n3 = int(input('Digite a parte real do segundo número complexo: '))
        n4 = int(input('Digite a parte imaginária do segundo número complexo: '))
        n5 = int(input('Digite a parte real do terceiro número complexo: '))
        n6 = int(input('Digite a parte imaginária do terceiro número complexo: '))

        complexo1 = complex(n1,n2)
        complexo2 = complex(n3,n4)
        complexo3 = complex(n5,n6)
        soma_complexos = complexo1 + complexo2 + complexo3

        return(f'''
        A soma entre esses 3 números complexos resulta em: {soma_complexos}

        A propriedade real da soma entre esses 3 números complexos é: {soma_complexos.real}
        A propriedade imaginária da soma entre esses 3 números complexos é: {soma_complexos.imag}
        ''')

    def subtracao():
        n1 = int(input('Digite a parte real do primeiro número complexo: '))
        n2 = int(input('Digite a parte imaginária do primeiro número complexo: '))
        n3 = int(input('Digite a parte real do segundo número complexo: '))
        n4 = int(input('Digite a parte imaginária do segundo número complexo: '))
        n5 = int(input('Digite a parte real do terceiro número complexo: '))
        n6 = int(input('Digite a parte imaginária do terceiro número complexo: '))

        complexo1 = complex(n1,n2)
        complexo2 = complex(n3,n4)
        complexo3 = complex(n5,n6)
        sub_complexos = complexo1 - complexo2 - complexo3

        return(f'''
        A subtração entre esses 3 números complexos resulta em: {sub_complexos}

        A propriedade real da subtração entre esses 3 números complexos é: {sub_complexos.real}
        A propriedade imaginária da subtração entre esses 3 números complexos é: {sub_complexos.imag}
        ''')

    def multiplicacao():
        n1 = int(input('Digite a parte real do primeiro número complexo: '))
        n2 = int(input('Digite a parte imaginária do primeiro número complexo: '))
        n3 = int(input('Digite a parte real do segundo número complexo: '))
        n4 = int(input('Digite a parte imaginária do segundo número complexo: '))
        n5 = int(input('Digite a parte real do terceiro número complexo: '))
        n6 = int(input('Digite a parte imaginária do terceiro número complexo: '))

        complexo1 = complex(n1,n2)
        complexo2 = complex(n3,n4)
        complexo3 = complex(n5,n6)
        mult_complexos = complexo1 * complexo2 * complexo3

        return(f'''
        A multiplicação entre esses 3 números complexos resulta em: {mult_complexos}

        A propriedade real da multiplicação entre esses 3 números complexos é: {mult_complexos.real}
        A propriedade imaginária da multiplicação entre esses 3 números complexos é: {mult_complexos.imag}
        ''')

    def divisao():
        n1 = int(input('Digite a parte real do primeiro número complexo: '))
        n2 = int(input('Digite a parte imaginária do primeiro número complexo: '))
        n3 = int(input('Digite a parte real do segundo número complexo: '))
        n4 = int(input('Digite a parte imaginária do segundo número complexo: '))
        n5 = int(input('Digite a parte real do terceiro número complexo: '))
        n6 = int(input('Digite a parte imaginária do terceiro número complexo: '))

        complexo1 = complex(n1,n2)
        complexo2 = complex(n3,n4)
        complexo3 = complex(n5,n6)
        div_complexos = complexo1 / complexo2 / complexo3

        return(f'''
        A divisão entre esses 3 números complexos resulta em: {div_complexos}

        A propriedade real da divisão entre esses 3 números complexos é: {div_complexos.real}
        A propriedade imaginária da divisão entre esses 3 números complexos é: {div_complexos.imag}
        ''')
        