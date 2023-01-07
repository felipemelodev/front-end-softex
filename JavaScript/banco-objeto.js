banco = {
    conta: "12345678",
    agencia: "01",
    tipoDeConta: "corrente",
    saldo: 1000,

    buscarSaldo: function() {
        return this.saldo;
    },
    deposito: function(valor) {
        this.saldo = this.saldo + valor;
        return this.saldo;
    },
    saque: function(valor) {
        this.saldo = this.saldo - valor;
        return this.saldo;
    },
    numeroDaConta: function() {
        return this.conta;
    }
}
