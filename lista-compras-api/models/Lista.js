class Lista {

    constructor(nome) {
        this.id = `${new Date().getMilliseconds()}`; //Convertendo milisegundos para String    
        this.nome=nome;
        this.itens= [];
    }
}

module.exports = Lista;