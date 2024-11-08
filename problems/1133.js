export function problem (lines){
    let valores = lines.map(Number);
    let [X, Y] = valores.sort();

    for(let i = X; i<Y; i++){
        if(i%5 === 2 || i%5 === 3) {
            console.log(i);
        }
    }
}
