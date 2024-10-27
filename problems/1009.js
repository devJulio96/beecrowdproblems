export function problem(lines) {
    const nome = lines[0];
    const fixo = parseFloat(lines[1]);
    const vendas = parseFloat(lines[2]);

    const total = fixo + (0.15*vendas);

    console.log(`TOTAL = R$ ${total.toFixed(2)}`);
}