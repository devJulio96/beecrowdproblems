export function problem(lines){
    let valores = lines[0].split(" ").map(Number);
    let maior;
    let menor; 

    if(valores[0]> valores[1]){
        maior = valores[0];
        menor = valores[1];
    } else {
        menor = valores[0];
        maior = valores[1];
    }
   
    function verificaMult (a,b) {
        if (a%b !== 0) {
            console.log(`Nao sao Multiplos`);
        } else {
            console.log(`Sao Multiplos`);
        }
    } 
    
    verificaMult(maior, menor);
}