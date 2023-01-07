const numeros = [0,1,2,3,4,5];

console.log("Com o for:\n")
for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}

console.log("\nCom função forEach:\n")
numeros.forEach (function (n) {
    (n % 2 === 0) ? console.log(`${n} é par`) : console.log(`${n} é ímpar`);
});
