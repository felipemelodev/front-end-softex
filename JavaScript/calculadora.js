var num1 = Number(prompt("Digite um número: "));
var operador = (prompt("Digite o sinal a operação que deseja realizar: "))
var num2 = Number(prompt("Digite outro número: "));

var soma = num1+num2;
var sub = num1-num2;
var mult = num1*num2;
var div = num1/num2;

if (operador == ("+")) {
    console.log(num1, "+", num2, "=", soma);
}

else if (operador == ("-")) {
    console.log(num1, "-", num2, "=", sub);
}

else if (operador == ("x")) {
    console.log(num1, "x", num2, "=", mult);
}

else if (operador == ("/")) {
    console.log(num1, "dividido por", num2, "=", div);
}

else {
    console.log("Operação Inválida");
}
