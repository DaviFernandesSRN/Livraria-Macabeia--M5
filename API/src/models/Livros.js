import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
         id: {type: String},
        "titulo": {type: String, required: true},
        "autor": {type: String, required: true},
        "sinopse": {type: String, required: true},
        "categoria": {type: String, required: true},
        "edicao":{type: String, required: true},
        "qtdPaginas":  {type: Number},
        "id_FK_Fornecedores":  {type: Number},
        "nome_FK_Fornecedores":{type: String, required: true},
        "preco": {type: Number},
        "ISBN": {type: String, required: true},
        "avaliacao": {type: Number}
}
);

const livros= mongoose.model('livro', livroSchema);

export default livros;