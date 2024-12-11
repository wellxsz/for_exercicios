let N = parseInt(prompt("Digite um número N:"));
let quadrados = [];

for (let i = 1; i <= N; i++) {
    quadrados.push(i * i);
}
console.log(`Os quadrados dos números de 1 até ${N} são: ${quadrados}`);
