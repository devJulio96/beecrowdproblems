export function problem(lines){

let chaVenc = parseInt(lines[0]);
let listaResposta = lines[1].split(" ").map(Number);
let i;
let numAcertos = 0;

for( i = 0; i < listaResposta.length; i++) {
    if (listaResposta[i] == chaVenc){
        numAcertos += 1
    }
}
console.log(numAcertos);

}