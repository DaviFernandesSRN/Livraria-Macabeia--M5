import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
            id: {type: String},
            "nome": {type: String, required: true},
            "email":{type: String, required: true},
            "cpf": {type: Number},
            "endereco": {type: String, required: true},
            "historico": {type: String, required: true},
            "data_de_aniversario":{type: Number},
            "faixa": {type: String, required: true},
            "createdAt":  {type: String, required: true},
            "updatedAt": {type: String, required: true}
        
    }
);

const clientes= mongoose.model('cliente', clienteSchema);

export default clientes;