export function problem(lines){
    let codigoMes = Number(lines[0]);

    const listaMeses = [
        {codigo: 1, mes: "January"},
        {codigo: 2, mes: "February"},
        {codigo: 3, mes: "March"},
        {codigo: 4, mes: "April"},
        {codigo: 5, mes: "May"},
        {codigo: 6, mes: "June"},
        {codigo: 7, mes: "July"},
        {codigo: 8, mes: "August"},
        {codigo: 9, mes: "September"},
        {codigo: 10, mes: "October"},
        {codigo: 11, mes: "November"},
        {codigo: 12, mes: "December"}
    ]
    console.log(listaMeses.filter(valor => valor.codigo === codigoMes)[0].mes)
}