export function problem(lines){
    let valores = lines.map(Number);
    let valoresPositivos = valores.filter(numero=>numero>0);

    let soma = valoresPositivos.reduce((value,total) => total += value);
    let media = soma/(valoresPositivos.length);
    console.log(`${valoresPositivos.length} valores positivos`);
    console.log(media.toFixed(1));
}