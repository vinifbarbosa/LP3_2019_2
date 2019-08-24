    class Item {
constructor() {
    this.id = `${new Date().getMilliseconds()}`; //Convertendo milisegundos para String    
        this.decricao="";
        this.unidade="";
        this.quantidade = 0;
}
    }


    module.exports= Item;