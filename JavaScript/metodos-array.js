const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
]

// usando map

let idades = usuarios.map(function(valor){
    return valor.idade;
}); console.log(idades);

// usando filter

let usuariosRocketseat = usuarios.filter(function(valor){
    if (valor.idade >= 18 && valor.empresa == 'Rocketseat'){
        return valor;
    }
}); console.log(usuariosRocketseat);

// usando find

let usuariosGoogle = usuarios.find(function(valor){
    return valor.empresa == 'Google';
}); console.log(usuariosGoogle);

// usando filter

let menos50 = usuarios.filter(valor => (valor.idade*2 < 50));
console.log(menos50);

// arrow functions

const arr = [1,2,3,4,5];
console.log(arr.map(item => (item+10)));

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = () => usuario.idade;
console.log(mostraIdade(usuario));
