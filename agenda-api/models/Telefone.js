class Item {
    constructor() {
        this.id = `${new Date().getMilliseconds()}`; //Convertendo milisegundos para String    
            this.nome="";
            this.telefone="";
            this.email="";
            this.idade= 0 ;
            
    }
        }
    
    
        module.exports= Item;