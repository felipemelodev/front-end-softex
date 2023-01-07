tabela = ['Corinthians','Bahia','Chapecoense','Palmeiras'];

function classificacao() {
    posicao = 1
    for (const time of tabela) {
        console.log(`${posicao}°: ${time}`);
        posicao++
    };
}

classificacao()
