export function problem(lines) {
let dinRec = Number(lines[0]);
let espDisp = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];
let i;
let numEps;
let troco;

const mult100 = (valor) => {return valor*100};

let dinConv = mult100(dinRec);
let espDispAlt = espDisp.map(mult100);

for( i = 0; i < espDispAlt.length; i++){
    troco = dinConv%espDispAlt[i];
    numEps = (dinConv - troco)/espDispAlt[i];
    dinConv = troco;

    if( i==0 ){ console.log("NOTAS:")}
    if( i==6 ){ console.log("MOEDAS:")}

    if(i < 6 ){
        console.log(`${numEps} nota(s) de R$ ${espDisp[i].toFixed(2)}`);    
    } else {
        console.log(`${numEps} moeda(s) de R$ ${espDisp[i].toFixed(2)}`);
    }
}
}