let numero = parseInt(prompt("Digite um número para contar seus divisores:"));
let contagemDivisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        contagemDivisores++;
    }
}

console.log(`O número ${numero} tem ${contagemDivisores} divisores.`);
