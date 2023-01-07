function contar() {
    let campoTexto = document.querySelector("#texto").value.trim();
    let palavras = campoTexto.split(" ").length;
    document.querySelector("#resultado").innerHTML = (`O texto inserido possui ${palavras} palavras`);
}
