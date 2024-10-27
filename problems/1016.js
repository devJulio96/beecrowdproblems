export function problem(lines) {
/*    let difDist = parseInt(lines[0]);
    let velX = 60/60; //velocidade carro X em km/min
    let velY = 90/60; //velocidade carro X em km/min

    let difYX = velY - velX; //diferença de velocidade em km/min
    
    const tempo = (a) => {
        return a/difYX;
    } //retorna o tempo, em min para um parametro "a";

    console.log(`${tempo(difDist)} minutos`); */

    let tempo = parseInt(lines[0]) * 2;
    console.log(`${tempo} minutos`);
}
