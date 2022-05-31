import mongoose from "mongoose";

const funcionarioSchema = new mongoose.Schema(
    {
            id: {type: String},
            "nome": {type: String, required: true},
            "login": {type: String, required: true},
            "cpf": {type: Number},
            "matricula": {type: String, required: true},
            "foto": {type: String, required: true}
     
}
);

const funcionarios= mongoose.model('funcionario', funcionarioSchema);

export default funcionarios;