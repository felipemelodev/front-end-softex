var nota1 = Number(prompt("Digite a primeira nota: "));
var nota2 = Number(prompt("Digite a segunda nota: "));
var nota3 = Number(prompt("Digite a terceira nota: "));
var total = nota1 + nota2 + nota3;
var resultado = (total < 21) ? 'REPROVADO' : 'APROVADO';

console.log(resultado);
