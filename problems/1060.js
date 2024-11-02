export function problem(lines){
    let valores = lines.map(Number)
    let valPositivos = valores.filter(numero => numero > 0).length;

    console.log(`${valPositivos} valores positivos`);
}