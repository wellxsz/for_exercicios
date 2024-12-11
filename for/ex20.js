let participantes = [];
let numParticipantes = parseInt(prompt("Digite o número de participantes:"));

for (let i = 0; i < numParticipantes; i++) {
    let nome = prompt(`Digite o nome do participante ${i + 1}:`);
    participantes.push(nome);
}

console.log("Participantes do sorteio:");
for (let i = 0; i < participantes.length; i++) {
    console.log(participantes[i]);
}

let vencedor = participantes[Math.floor(Math.random() * participantes.length)];
console.log(`O vencedor do sorteio é: ${vencedor}`);
