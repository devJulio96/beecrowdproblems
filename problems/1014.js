export function problem(lines){
//a resolução começa aqui
let dist = parseInt(lines[0]);
let combs = parseFloat(lines[1]).toFixed(1);

const consumo = (a,b) => {
    return (a/b).toFixed(3);
}

console.log(`${consumo(dist,combs)} km/l`);
}