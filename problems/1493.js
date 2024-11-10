export function problem(lines){
    let idx = 0;

    while(idx < lines.length){
        let numCasos = Number(lines[idx]);
        let inicioExpr = idx + 1;
        let inicioEsc = inicioExpr + numCasos;

        let exprs = lines.slice(inicioExpr, inicioEsc);
        let escolhas = lines.slice(inicioEsc, inicioEsc + numCasos);

        let nomeErraram = [];
        for(let i = 0; i<escolhas.length; i++){
            let partInfo = escolhas[i].split(" ");

            let eprxIdx = partInfo[1];
            let partExpr = exprs[eprxIdx-1];

            let oprPart = partInfo[2];

            let expTrat = partExpr.split("=");
            let [num1, num2] = expTrat[0].split(" ").map(Number);
            let restExp = Number(expTrat[1]);

            if(oprPart == '+' && num1 + num2 != restExp){
                nomeErraram.push(partInfo[0]);
            }  else if (oprPart == '-' && num1 - num2 != restExp){
                nomeErraram.push(partInfo[0]);
            } else if (oprPart == '*' && num1 * num2 != restExp){
                nomeErraram.push(partInfo[0]);
            } else if (oprPart == "I"){
                if((num1 + num2 == restExp) || (num1 - num2 == restExp) || (num1 * num2 == restExp)){
                    nomeErraram.push(partInfo[0]);
                }
            }
        }
        if(nomeErraram.length === escolhas.length){
            console.log(`None Shall Pass!`);
        } else if(nomeErraram.length === 0) {
            console.log(`You Shall All Pass!`);        
        } else {
            console.log(nomeErraram.sort().join(" "));
        }
        idx += numCasos*2 + 1;
    }
}

/*

4
8 4=5
2 5=5
1 3=4
2 8=10
Samuel 2 +
Abner 3 +
Aline 1 *
Caio 4 +
2
1 2=-1
0 7=7
Luiz 2 -
Absolut 1 +

*/