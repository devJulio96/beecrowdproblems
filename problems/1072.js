export function problem(lines){
    let n = Number(lines[0]);
    let valores = lines.slice(1, n + 1).map(Number);
    let dentro =0;
    let fora = 0;

    valores.forEach( numero => {
        if (numero >= 10 && numero <= 20){
            dentro ++;
        } else {
            fora ++;
        }
    })
    console.log(`${dentro} in\n${fora} out`);
}