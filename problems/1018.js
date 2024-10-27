export function problem(lines) {
    let valor = parseInt(lines[0]);
    let nota = [100, 50, 20, 10, 5, 2, 1];
    let resto;
    let numNotas;
    console.log(valor);
    
    for( let i = 0; i < nota.length; i++) {
        resto = valor%nota[i]; //determina qual o resto da divisão pela nota da posição i
        numNotas = (valor - resto)/nota[i]; //determina o numero de notas[i] para o valor restante
        valor = resto; //torna o valor de "entrada" igual ao resto
        console.log(`${numNotas} nota(s) de R$ ${nota[i]},00`);
    }
}