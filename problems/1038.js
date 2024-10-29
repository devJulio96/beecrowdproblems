export function problem (lines) {
let pedido = lines[0].split(" ").map(Number);

const produtos = [
    {
        codigoProd: 1,
        precoProd: 4.00,
    },
    {
        codigoProd: 2,
        precoProd: 4.50,
    },
    {
        codigoProd: 3,
        precoProd: 5.00,
    },
    {
        codigoProd: 4,
        precoProd: 2.00,
    },
    {
        codigoProd: 5,
        precoProd: 1.50,
    }
]

const calcularPreco = (pedido) => {
    let codigo = pedido[0];
    let quantidade = pedido[1];
    let prodEscolhido = produtos.filter(produto => produto.codigoProd === codigo);
    console.log(prodEscolhido);
    return prodEscolhido[0].precoProd*quantidade;
}

console.log(`Total: R$ ${calcularPreco(pedido).toFixed(2)}`);
}