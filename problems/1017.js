export function problem(lines){
    let tempoHoras = parseInt(lines[0]);
    let velocidade = parseInt(lines[1]);

    let consumo = ( (tempoHoras * velocidade)/12).toFixed(3); 
    console.log(consumo);
}