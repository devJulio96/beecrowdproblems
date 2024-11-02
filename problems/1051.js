export function problem(lines) {
    let salario = Number(lines[0]);

    const tabela = [
        {rendaMin: 0, rendaMax: 2000, imposto: 0},
        {rendaMin: 2000, rendaMax: 3000, imposto: 0.08},
        {rendaMin: 3000, rendaMax: 4500, imposto: 0.18},
        {rendaMin: 4500, rendaMax: Infinity, imposto: 0.28},
    ]

    if ( salario < tabela[0].rendaMax){
        console.log(`Isento`);
    } else {

        const descobrirAliquotas = (declarado) => {
            return tabela.filter(valor => valor.rendaMin < declarado);
        }

        let aliquotas = descobrirAliquotas(salario);
        let impostos = [];
        let tributo = 0;

        for (let i = 1; i <aliquotas.length ; i++) {
            if(salario > aliquotas[i].rendaMax){
                tributo = aliquotas[i].rendaMax;
            } else {
                tributo = salario;
            }
            impostos.push((tributo - aliquotas[i].rendaMin)*aliquotas[i].imposto);
        }

        let divida = impostos.reduce((valor, total) => total += valor);
        console.log(`R$ ${divida.toFixed(2)}`);
    }
}