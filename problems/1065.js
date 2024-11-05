export function problem(lines) {
    let valores = lines.slice(0, 5).map(Number);
    let valPares = valores.filter(numero => numero%2 == 0);

    console.log(`${valPares.length} valores pares`)
}