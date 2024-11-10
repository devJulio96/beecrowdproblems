export function problem (lines){
    let valores = lines.slice(0, 5).map(Number);

    let par = valores.filter(a => Math.abs(a%2) === 0).length;
    let impar = valores.filter(a => Math.abs(a%2) !==0).length;
    let positivo = valores.filter(a => a > 0).length;
    let negativo = valores.filter(a => a < 0).length;

    console.log(`${par} valor(es) par(es)`);
    console.log(`${impar} valor(es) impar(es)`);
    console.log(`${positivo} valor(es) positivo(s)`);
    console.log(`${negativo} valor(es) negativo(s)`);
}