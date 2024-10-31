export function problem(lines) {
    let [inicio, fim] = lines[0].split(" ").map(Number);
    let dia = [];
    let tempoJogo = 0;

    if (fim <= inicio) {
        tempoJogo += ((24-inicio) + fim);
    } else {
        tempoJogo += (fim - inicio);
    }
    
    console.log(`O JOGO DUROU ${tempoJogo} HORA(S)`);
}