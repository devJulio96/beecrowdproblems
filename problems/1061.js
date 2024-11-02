export function problem(lines){
    let [valor1, valor2, valor3, valor4] = lines;
    
    let diaI = Number(valor1.replace("Dia ",""));
    let [horaI, minutoI, segI] = valor2.split(" : ").map(Number);

    let diaF = Number(valor3.replace("Dia ",""));
    let [horaF, minutoF, segF] = valor4.split(" : ").map(Number);
    
    const convDiaSeg = (valor) => {
        return valor*86400;
    }

    const convHoraSeg = (valor) => {
        return valor*3600;
    }

    const convMinSeg = (valor) => {
        return valor*60;
    }

    let totalSegI = convDiaSeg(diaI) + convHoraSeg(horaI) + convMinSeg(minutoI) + segI
    let totalSegF = convDiaSeg(diaF) + convHoraSeg(horaF) + convMinSeg(minutoF) + segF
    let duracaoJogo = totalSegF - totalSegI;

    let durDia = Math.floor(duracaoJogo/86400);
    let durHoras = Math.floor((duracaoJogo%86400)/3600);
    let durMin = Math.floor(((duracaoJogo%86400)%3600)/60);
    let durSeg = ((duracaoJogo%86400)%3600)%60;

    console.log(`${durDia} dia(s)`);
    console.log(`${durHoras} hora(s)`);
    console.log(`${durMin} minuto(s)`);
    console.log(`${durSeg} segundo(s)`);
}
//1 dia = 86400s
//1hora = 3600s
//1min = 60s