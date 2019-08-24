class Lista {

    constructor() {
        this.id = `${new Date().getMilliseconds()}`; //Convertendo milisegundos para String    
        this.nome="";
        this.itens= [];
    }
}

module.exports = Lista;