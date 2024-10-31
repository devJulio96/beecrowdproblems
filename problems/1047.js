export function problem(lines){
    let [horaI, minutoI, horaF, minutoF] = lines[0].split(" ").map(Number);
    let tmpJogoH = 0;
    let tmpJogoM = 0;

    if (horaI < horaF) {
        tmpJogoH += (horaF - horaI);
            if (minutoI < minutoF){
                tmpJogoM += (minutoF - minutoI);
            } else {
                tmpJogoH -= 1;
                tmpJogoM += (60-minutoI) + minutoF;
            }
    } else {
        tmpJogoH +=(24 - horaI) + horaF;
            if (minutoI < minutoF){
                    if (horaF === horaI) { tmpJogoH = 0};
                tmpJogoM += (minutoF - minutoI);
            }  else {
                tmpJogoH -= 1;
                tmpJogoM += (60-minutoI) + minutoF;
            }
    }

    if (minutoI === minutoF){
        tmpJogoH +=1;
        tmpJogoM = 0;
    }

    console.log(`O JOGO DUROU ${tmpJogoH} HORA(S) E ${tmpJogoM} MINUTO(S)`)
}