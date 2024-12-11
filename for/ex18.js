let notas = [];
let pesos = [];
let somaNotas = 0;
let somaPesos = 0;

for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    let peso = parseFloat(prompt(`Digite o peso da nota ${i + 1}:`));
    notas.push(nota);
    pesos.push(peso);
    somaNotas += nota * peso;
    somaPesos += peso;
}

let mediaPonderada = somaNotas / somaPesos;
console.log(`A média ponderada das notas é: ${mediaPonderada}`);
