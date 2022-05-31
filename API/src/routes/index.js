import express from "express";
import vendas from "../routes/vendasRoutes.js";
import aluguel from "../routes/aluguelRoutes.js";
import estoque from "../routes/estoqueRoutes.js";
import fornecedor from "../routes/fornecedorRoutes.js";
import cliente from "../routes/clienteRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Mensagem: " Bem vindos ao Fluxo de Caixas Da Livraria Macabéa 📚" })
 });

app.use(
    express.json(),
    vendas,
    aluguel,
    estoque,
    fornecedor,
    cliente
)
}


export default routes;

