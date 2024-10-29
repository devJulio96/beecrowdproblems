export function problem(lines){
let valores = lines[0].split(" ");
let i;

for(i = 0; i < valores.length; i++){ //transforma cada string de valores em numero inteiro
    valores[i] = parseInt(valores[i]);
}

let A = valores [0];
let B = valores [1];
let C = valores [2];
let D = valores [3];

if (B>C && D>A && C+D>A+B && C >= 0 && D >= 0 && A%2 == 0){
    console.log(`Valores aceitos`)
} else {
    console.log(`Valores nao aceitos`)
}

}