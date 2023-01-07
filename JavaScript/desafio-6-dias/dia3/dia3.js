var alcool = 0;
var gasolina = 0;
var diesel = 0;
var tipo = 0

while (tipo != 4) {
    var tipo = Number(prompt("Digite o tipo de combústivel abastecido.\nUse 1 para Álcool, 2 para Gasolina, 3 para Diesel ou 4 para finalizar o programa: \n"));

    if (tipo == 1) {
        alcool+=1;
    } else if (tipo == 2) {
        gasolina+=1;
    } else if (tipo == 3) {
        diesel+=1;
    } else if (tipo == 4) {
        console.log("MUITO OBRIGADO!");
        break;
    } else {
        var tipo = Number(prompt("Valor inválido, digite somente esses números:\n1 para Álcool\n2 para Gasolina\n3 para Diesel\n4 para finalizar"));
        if (tipo == 4) {console.log("MUITO OBRIGADO")};
    }
}

console.log("Àlcool: ", alcool);
console.log("Gasolina: ", gasolina);
console.log("Diesel: ", diesel);
