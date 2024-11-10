export function problem (lines){
    let [X,Y] = lines.slice(0, 2).map(Number);

    if (X > Y) {
        X = Number(lines[1]);
        Y = Number(lines[0]);
    }

    for(let i = X+1; i<Y; i++){
        if(i % 5 === 2 || i % 5 === 3) {
                console.log(i);
        }
    }
}
