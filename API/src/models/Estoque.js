import mongoose from "mongoose";

const estoqueSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Livro": {type: String, required: true},
            "Preco": {type: Number},
            "Autor": {type: String, required: true},
            "Editora": {type: String, required: true},
            "Categoria": {type: String, required: true},
            "Idioma": {type: String, required: true},
            "numeroPaginas": {type: Number},
            "Ano": {type: Number},
            "ISBN": {type: Number},
            "Fornecedor": {type: String, required: true},
            "id_Fornecedores": {type: String, required: true},
            "Avaliação": {type: Number},
            "NF": {type: Number},
            "imagem":{type: String, required: true},
            "img": {data: Buffer, bcontentType: String}
        
    }
);

const estoque= mongoose.model('estoque', estoqueSchema);

export default estoque;