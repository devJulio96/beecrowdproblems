export function problem(lines){
    let salarioAtual = Number(lines[0]);

    const tabelaSalario = [
        {limite: 400, porcentagem: 0.15},
        {limite: 800, porcentagem: 0.12},
        {limite: 1200, porcentagem: 0.10},
        {limite: 2000, porcentagem: 0.07},
        {limite: Infinity, porcentagem: 0.04}
    ]

    let baseSalarial = tabelaSalario.find(salario => salarioAtual <= salario.limite);
    let reajustePercentual = (baseSalarial.porcentagem*100).toFixed(0);
    let valorReajuste = (baseSalarial.porcentagem)*salarioAtual;
    let novoSalario = salarioAtual + valorReajuste; 

    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`);
    console.log(`Em percentual: ${(reajustePercentual)} %`);
}