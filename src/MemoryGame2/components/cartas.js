let imagens = [
    'https://i.imgur.com/fbnHQJI.png',
    'https://i.imgur.com/qQj2956.png',
    'https://i.imgur.com/FmebIx9.png',
    'https://i.imgur.com/C2IBfJO.png',
    'https://i.imgur.com/k7Fcn8p.png',
    'https://i.imgur.com/UCpiMC9.png',
    'https://i.imgur.com/SNnb4UA.png',
    'https://i.imgur.com/3OyQkJZ.png',
];

let cartasUnicas = imagens.map((imagem, idDoPar) => ({
    idDoPar: idDoPar,
    imagem: imagem,
}))

export let paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
    (carta, id) => ({
        ...carta,
    id,
    })
);