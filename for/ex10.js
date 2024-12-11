let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
    console.log(`${numeros[i]} multiplicado por 2 é: ${numeros[i] * 2}`);
}
