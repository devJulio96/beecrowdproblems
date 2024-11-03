export function problem(lines) {
    let N = Number(lines[0]);

    for(let i = 1; i <= N; i++){
        if (i%2===0){
            let nQuadrado = Math.pow(i,2);
            console.log(`${i}^2 = ${nQuadrado}`);
        }
    }
}