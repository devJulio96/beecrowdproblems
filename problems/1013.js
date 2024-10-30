export function problem(lines){
//.map(Number) mapeia os valores A, B e C da string no array lines para o tipo especificado
    let [A, B, C] = lines[0].split(" ").map(Number);

    const maiorAB = (a,b) => {
        return (a + b + Math.abs(a-b))/2
    } 

    let resposta;
    if (maiorAB(A,B) == B){
        resposta = maiorAB(B,C);
    } else {
        resposta = maiorAB(A,C);
    }

    console.log(`${resposta} eh o maior`);
}