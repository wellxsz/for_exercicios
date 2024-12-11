let frase = prompt("Digite uma frase:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== " ") {
        contador++;
    }
}
console.log(`A quantidade de caracteres (sem contar os espaços) é: ${contador}`);
