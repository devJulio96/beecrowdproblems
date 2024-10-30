export function problem (lines) {
    let notas = lines[0].split(" ").map(Number);
    let notaExame = Number(lines[1]);
    let pesos = [2, 3, 4, 1];

    for (let i = 0; i < notas.length; i++){
        notas[i] = notas[i]*pesos[i];
    } 
    const somarValores = (total, valor) => {
        return total + valor;
    }
    let somaNotas = notas.reduce(somarValores);
    let somaPesos = pesos.reduce(somarValores);

    let mediaAnual = Number((somaNotas/somaPesos));
    let media = mediaAnual.toFixed(1);

    let mediaFinal = ((mediaAnual + notaExame)/2).toFixed(1);

    if( mediaAnual < 5.0){
        console.log(`Media: ${media}\nAluno reprovado.`);
    } else if (mediaAnual < 7.0 ){
        console.log(`Media: ${media}\nAluno em exame.`);
        console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
        if(mediaFinal < 5.0){
            console.log(`Aluno reprovado.`)
            console.log(`Media final: ${mediaFinal}`);
        } else {
            console.log(`Aluno aprovado.`)
            console.log(`Media final: ${mediaFinal}`);
        }
    } else {
        console.log(`Media: ${media}\nAluno aprovado.`);
    }
}

