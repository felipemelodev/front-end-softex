var nota1 = Number(prompt("Digite a primeira nota: "));
var nota2 = Number(prompt("Digite a segunda nota: "));
var total = nota1 + nota2;
var notaMinima = 21 - total;

if (total < 11) {
    console.log("Reprovado independente da terceira nota");
}

else if (total >= 11 && total <= 20) {
    console.log("Sua terceira nota precisa ser de no mínimo ", notaMinima, "para que seja aprovado com média 7.");
}

else {
    console.log("Notas inválidas.");
}
