function calcular() {
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;

    imc = (peso/(altura*altura)).toFixed(1);

    if (imc < 18.5) {
        document.querySelector("#resultado1").innerHTML = (`SEU IMC: ${imc}`);
        document.querySelector("#resultado2").innerHTML = ("Classificação: Magreza");
    }
    else if (imc >= 18.5 && imc < 25) {
        document.querySelector("#resultado1").innerHTML = (`SEU IMC: ${imc}`);
        document.querySelector("#resultado2").innerHTML = ("Classificação: Normal");
    }
    else if (imc >= 25 && imc < 30) {
        document.querySelector("#resultado1").innerHTML = (`SEU IMC: ${imc}`);
        document.querySelector("#resultado2").innerHTML = ("Classificação: Sobrepeso");
    }
    else if (imc >= 30 && imc < 40) {
        document.querySelector("#resultado1").innerHTML = (`SEU IMC: ${imc}`);
        document.querySelector("#resultado2").innerHTML = ("Classificação: Obesidade");
    }
    else {
        document.querySelector("#resultado1").innerHTML = (`SEU IMC: ${imc}`);
        document.querySelector("#resultado2").innerHTML = ("Classificação: Obesidade grave");
    }
}
