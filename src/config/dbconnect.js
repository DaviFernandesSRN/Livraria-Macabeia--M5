//importando o mongoose para uso do mongo DB
import mongoose from "mongoose"
//Chamando o meu banco de dados no mongo DB
mongoose.connect("mongodb+srv://davifernandes:teodoro@cluster0.tdcdm.mongodb.net/FluxoDeCaixas");
//Criando uma váriavel da conexão
let db = mongoose.connection;
//exportanto a variavel criada da conexão
export default db;


//---------------------------------------
//vendas