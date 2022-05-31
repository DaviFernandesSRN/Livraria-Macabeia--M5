import mongoose from "mongoose";

const FornecedorSchema = new mongoose.Schema(
 {  
     id: {type: String},
    "categoria": {type: String, required: true},
    "razaoSocial":{type: String, required: true},
    "nomeFantasia":{type: String, required: true},
    "cnpj": {type: String, required: true},
    "endereco": {type: String, required: true},
    "cep": {type: String, required: true},
    "cidade": {type: String, required: true},
    "estado":{type: String, required: true},
    "email": {type: String, required: true},
    "telefone":{type: String, required: true},
    "status": {type: String, required: true}

    
})

const fornecedores = mongoose.model('fornecedores', FornecedorSchema);

export default fornecedores;