export function problem(lines){
    let [tipo1, tipo2, tipo3] = lines;

    const tabela = {
        vertebrado:{
            ave:{
                carnivoro: "aguia",
                onivoro: "pomba",
            },
            mamifero:{
                onivoro: "homem",
                herbivoro: "vaca",
            },
        },
        invertebrado:{
            inseto:{
                hematofago: "pulga",
                herbivoro: "lagarta",
            },
            anelideo:{
                hematofago: "sanguessuga",
                onivoro: "minhoca",
            },
        },
    }

    let animal = tabela[tipo1][tipo2][tipo3];

    console.log(animal);
}