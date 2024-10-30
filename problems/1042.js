export function problem(lines) {
    let valores = lines[0].split(" ").map(Number);
    let [A, B, C] = valores;
    let valorOrd = [0,0,0];
    //toda este codigo teria sido evitada com um sort :)
    if (A - B > 0){
        if(A - C > 0){
            valorOrd[2] = A;
            if (B - C> 0){
                valorOrd[1] = B;
                valorOrd[0] = C;
               } else { 
                valorOrd[1] = C;
                valorOrd[0] = B;
               }
        } else {
            valorOrd[2] = C;
            valorOrd[1] = A;
            valorOrd[0] = B;
        }
    } else {
        if(B - C > 0){
            valorOrd[2] = B;
            if (C - A> 0){
                valorOrd[1] = C;
                valorOrd[0] = A;
               } else { 
                valorOrd[1] = A;
                valorOrd[0] = C;
               }
        } else {
            valorOrd[2] = C;
            valorOrd[1] = B;
            valorOrd[0] = A;
        }
    }

    valorOrd.forEach(element => console.log(element))
    console.log("");
    valores.forEach(element => {console.log(element)});
}