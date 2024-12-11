let numero = parseInt(prompt("Digite um número para calcular as potências de 1 a 5:"));
for (let i = 1; i <= 5; i++) {
    console.log(`${numero} elevado a ${i} é: ${Math.pow(numero, i)}`);
}
