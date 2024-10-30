export function problem(lines){
    let [X, Y]  = lines[0].split(" ").map(Number);

    if(X > 0 && Y >0) {
        console.log(`Q1`);
    } else if( X < 0 && Y > 0){
        console.log(`Q2`);
    } else if(X < 0 && Y < 0 ) {
        console.log(`Q3`);
    } else if (X > 0 && Y < 0){
        console.log(`Q4`);
    } else if (X == 0 && Y == 0 ) {
        console.log(`Origem`)
    } else if ( Y !=0 ){
        console.log(`Eixo Y`)
    } else {
        console.log(`Eixo X`)
    }
}