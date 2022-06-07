//importando o mongoose para uso do mongo DB
import mongoose from "mongoose"
//Chamando o meu banco de dados no mongo DB
mongoose.connect("mongodb+srv://admmacabeia:lmacabeia@cluster0.5ay0tuk.mongodb.net/livrariamacabeia");
//Criando uma váriavel da conexão
let db = mongoose.connection;
//exportanto a variavel criada da conexão
export default db;


//---------------------------------------
//vendas