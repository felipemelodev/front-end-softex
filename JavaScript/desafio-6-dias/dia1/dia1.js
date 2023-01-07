const num_colab = Number(prompt("Número do colaborador: "));
const horas_trabalhadas = Number(prompt("Quantidade de horas trabalhadas: "));
const valor_hora = Number(prompt("Valor por hora: "));
const salario = (horas_trabalhadas * valor_hora);

console.log(`Número = ${num_colab}\nSalário = R$ ${salario.toFixed(2)}`);
