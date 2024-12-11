let inicio = parseInt(prompt("Digite o número inicial do intervalo:"));
let fim = parseInt(prompt("Digite o número final do intervalo:"));
let soma = 0;

for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}
console.log(`A soma dos números pares no intervalo é: ${soma}`);
