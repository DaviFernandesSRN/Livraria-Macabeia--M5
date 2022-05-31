import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Nome": {type: String, required: true},
            "Login":{type: String, required: true},
            "Cliente_ID": {type: Number},
            "CPF":{type: Number},
            "RG": {type: Number},
            "Endereço": {type: String, erequired: true},
            "Plano": {type: String, required: true},
            "Imagem": {type: String, required: true}
        
    
         
}
);

const cliente= mongoose.model('cliente', clienteSchema);

export default cliente;