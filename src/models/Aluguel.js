import mongoose from "mongoose";

const aluguelSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Livro": {type: String, required: true},
            "Vendedor": {type: String, required: true},
            "Cliente_Nome": {type: String, required: true},
            "Cliente_ID": {type: Number},
            "Data_Saida":{type: Number},
            "Data_Entrada": {type: Number},
            "Preco": {type: Number},
            "Autor": {type: String, required: true},
            "Editora":{type: String, required: true},
            "Categoria": {type: String, required: true},
            "Idioma": {type: String, required: true},
            "numeroPaginas": {type: Number},
            "Ano": {type: Number},
            "ISBN": {type: Number},
            "Fornecedor": {type: String, required: true},
            "id_Fornecedores": {type: String, required: true},
             "Avaliação": {type: Number}
             
         
}
);

const aluguel= mongoose.model('aluguel', aluguelSchema);

export default aluguel;