export function problem(lines) {
    let divisor = Number(lines[0]);

    for(let i = 1; i <= 10000; i++){
        if(i%divisor === 2) {
            console.log(i);
        }
    }
}