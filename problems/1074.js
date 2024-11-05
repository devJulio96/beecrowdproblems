export function problem(lines){
    let n = Number(lines[0]);
    let valores = lines.slice(1, n + 1).map(Number);

    valores.forEach(numero => {
        if(numero > 0) {
            if(numero%2 === 0){
                console.log(`EVEN POSITIVE`)
            } else {
                console.log(`ODD POSITIVE`)
            }
        } else {
            if (numero === 0) {
                console.log(`NULL`)
            } else if(numero%2 === 0){
                console.log(`EVEN NEGATIVE`)
            } else {
                console.log(`ODD NEGATIVE`)
            }
        }
    });
}