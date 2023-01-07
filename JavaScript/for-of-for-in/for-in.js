carro = {
    marca: 'Fiat',
    modelo: 'Uno Mille Way',
    ano: '2010'
};

function propriedades() {
    for (const propriedade in carro) {
        console.log(`${propriedade}: ${carro[propriedade]}`);
    };
}

propriedades();
