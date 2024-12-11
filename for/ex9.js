let palavra = prompt("Digite uma palavra:");
let contagemVogais = 0;
let vogais = "aeiouAEIOU";

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
        contagemVogais++;
    }
}
console.log(`A quantidade de vogais na palavra é: ${contagemVogais}`);
