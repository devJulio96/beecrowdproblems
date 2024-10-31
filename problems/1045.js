export function problem(lines) {
    let valores = lines[0].split(" ").map(Number);
    valores.sort((a,b) => b - a);
    
    const [A, B, C] = valores;

    let quadA = Math.pow(A,2);
    let quadB = Math.pow(B,2);
    let quadC =Math.pow(C,2);

    if ( A >= B + C ){
        console.log(`NAO FORMA TRIANGULO`);
    } else {
        if ( quadA == quadB + quadC) {
            console.log(`TRIANGULO RETANGULO`);
        } else if ( quadA > quadB + quadC ){
            console.log(`TRIANGULO OBTUSANGULO`);
        } else if (quadA < quadB + quadC) {
            console.log(`TRIANGULO ACUTANGULO`);
        }
    }

    if (A==B && B==C){
        console.log(`TRIANGULO EQUILATERO`);
    } else if (A==B || A==C || B==C){
        console.log(`TRIANGULO ISOSCELES`);
    }
}