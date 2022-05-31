import mongoose from "mongoose";

const FornecedorSchema = new mongoose.Schema(
 {  
     id: {type: String},
    "categoria": {type: String, required: true},
    "razaoSocial":{type: String, required: true},
    "nomeFantasia":{type: String, required: true},
    "cnpj": {type: String, required: true},
    "endereço": {type: String, required: true},
    "cep": {type: String, required: true},
    "cidade": {type: String, required: true},
    "estado":{type: String, required: true},
    "email": {type: String, required: true},
    "telefone":{type: String, required: true},
    "status": {type: String, required: true},
    
})

const fornecedor = mongoose.model('fornecedor', FornecedorSchema);

export default fornecedor;