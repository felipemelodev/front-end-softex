const {consultarCep} = require('correios-brasil');
const cep = '56321610';
consultarCep(cep).then(response =>{
    console.log(response);
});

const {rastrearEncomendas} = require('correios-brasil');
let codigoRastreio = ['QD724032585BR'];
rastrearEncomendas(codigoRastreio).then(response => {
    console.log(response);
});
