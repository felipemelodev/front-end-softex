function reajustar() {
    let salario = Number(document.querySelector("#salario").value);

    if (salario <= 280) {
        document.querySelector("#salarioAtual").innerHTML = ("R$ " + salario)
        document.querySelector("#percentual").innerHTML = ("20%");
        document.querySelector("#aumento").innerHTML = ("R$ " + (salario*0.20).toFixed(2));
        document.querySelector("#novoSalario").innerHTML = ("R$ " + (salario+salario*0.20).toFixed(2));
    }
    else if (salario > 280 && salario <= 700) {
        document.querySelector("#salarioAtual").innerHTML = ("R$ " + salario)
        document.querySelector("#percentual").innerHTML = ("15%");
        document.querySelector("#aumento").innerHTML = ("R$ " + (salario*0.15).toFixed(2));
        document.querySelector("#novoSalario").innerHTML = ("R$ " + (salario+salario*0.15).toFixed(2));
    }
    else if (salario > 700 && salario <= 1500) {
        document.querySelector("#salarioAtual").innerHTML = ("R$ " + salario)
        document.querySelector("#percentual").innerHTML = ("10%");
        document.querySelector("#aumento").innerHTML = ("R$ " + (salario*0.10).toFixed(2));
        document.querySelector("#novoSalario").innerHTML = ("R$ " + (salario+salario*0.10).toFixed(2));
    }
    else if (salario > 1500) {
        document.querySelector("#salarioAtual").innerHTML = ("R$ " + salario)
        document.querySelector("#percentual").innerHTML = ("5%");
        document.querySelector("#aumento").innerHTML = ("R$ " + (salario*0.5).toFixed(2));
        document.querySelector("#novoSalario").innerHTML = ("R$ " + ((salario+salario*0.5).toFixed(2)));
    }

}