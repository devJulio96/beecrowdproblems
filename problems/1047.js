export function problem(lines){
    let [horaI, minutoI, horaF, minutoF] = lines[0].split(" ").map(Number);

    const transformarMinutos = (hora, minuto) => {
        return hora*60 + minuto;
    }

    let dia = transformarMinutos(24,0);
    let inicioMin = transformarMinutos(horaI, minutoI);
    let finalMin = transformarMinutos(horaF, minutoF);
    let durJogoMin = 0;

    if (inicioMin < finalMin){
        durJogoMin += (finalMin - inicioMin);
    } else {
        durJogoMin += (dia - inicioMin) + finalMin;
    }
    
    const transformarHora = (minutosTotais) => {
        return Math.floor(durJogoMin/60);
    }

    let horasJogo = transformarHora(durJogoMin); 
    let minutosJogo = durJogoMin%60;
    console.log(`O JOGO DUROU ${horasJogo} HORA(S) E ${minutosJogo} MINUTO(S)`)
}