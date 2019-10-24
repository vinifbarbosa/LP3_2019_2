const {Schema,model} = require("mongoose");

const esquema = new Schema({
    descricao: {
        type:String,
        required:true
    },
    unidade: {
        type:String,
        required:true
    }
});

const Item = mododel("Item", esquema);
module.exports=Item;