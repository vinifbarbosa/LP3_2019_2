const { Item } = require('./db');

const itens = [
    {
        "area": "CET"
    },
    {
        "area": "CAE"
    },
    {
        "area": "MDIS"
    },
    {
        "area": "CHCSA"
    },
    {
        "area": "CBS"
    },
    {
        "area": "FIC"
    }

];

const salvarItens = async () => {
    await require('./db');
    itens.forEach(async (item) => await Item.create(item));
};


salvarItens();
