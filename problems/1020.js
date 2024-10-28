export function problem(lines){
    let numDias = parseInt(lines[0]);
    let anos;
    let meses;
    let dias;
    
    function changeDiasAnos (numDias) {
        anos = numDias/365;
        return Math.trunc(anos);
    }
    
    function changeDiasMes (restoDiasAnos) {
        restoDiasAnos = (numDias%365)
        meses = restoDiasAnos/30
        return Math.trunc(meses);
    }

    function sobraDias(restoDiasMes){
        dias = (numDias%365)%30
        return dias;
    }
    console.log(`${changeDiasAnos(numDias)} ano(s)\n${changeDiasMes(numDias)} mes(es)\n${sobraDias(numDias)} dia(s)`)
}