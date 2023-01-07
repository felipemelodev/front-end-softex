let aluno = {
    nome: "Felipe",
    sobrenome: "Melo",
    idade: 19,
    curso: "Front-End",
};

({ nome: vulgo } = aluno);
console.log(vulgo);
console.log(aluno);
