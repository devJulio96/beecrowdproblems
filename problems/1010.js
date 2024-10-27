export function problem(lines) {
//Declarei  variáveis dentro de um array correspondente aos valores do array lines
let [codigo1, qtd1, valor1] = lines[0].split(" ");
let [codigo2, qtd2, valor2] = lines[1].split(" ");

let pg1 = parseInt(qtd1) * parseFloat(valor1);
let pg2 = parseInt(qtd2) * parseFloat(valor2);

let pgT = pg1 + pg2;

 console.log(`VALOR A PAGAR: R$ ${pgT.toFixed(2)}`);
}