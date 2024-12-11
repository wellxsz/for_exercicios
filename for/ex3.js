let notas = [];
let soma = 0;
for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    notas.push(nota);
    soma += nota;
}
let media = soma / notas.length;
console.log(`A média das notas é: ${media}`);
