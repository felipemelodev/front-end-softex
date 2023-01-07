const carros = ["Uno", "Gol", "Ferrari"]

const [, ...outrosCarros] = carros;
console.log(outrosCarros)

// Resultado:
// (2) ['Gol'], ['Ferrari']
