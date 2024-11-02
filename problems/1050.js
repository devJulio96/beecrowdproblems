export function problem (lines) {
    let DDD = parseInt(lines[0]);

    const tabela = [
        {codigo: 27, cidade: "Vitoria"},  
        {codigo: 71, cidade: "Salvador"},
        {codigo: 61, cidade: "Brasilia"},
        {codigo: 19, cidade: "Campinas"},  
        {codigo: 11, cidade: "Sao Paulo"},
        {codigo: 32, cidade: "Juiz de Fora"},
        {codigo: 21, cidade: "Rio de Janeiro"},
        {codigo: 31, cidade: "Belo Horizonte"} 
    ]

    const localizarCidade = (ddd) => {
        let registro = tabela.filter(localizacao => ddd === localizacao.codigo);
        let dddCadastrado = registro[0];

        if (dddCadastrado === undefined){
            return console.log(`DDD nao cadastrado`);
        } else {
            return console.log(dddCadastrado.cidade);
        }
    }

    localizarCidade(DDD);
}