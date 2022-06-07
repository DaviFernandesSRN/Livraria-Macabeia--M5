import express from "express";
import livros from "../routes/livroRoutes.js";
import clientes from "../routes/clienteRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Mensagem: " API 2.0 Livraria Macabéa 📚" })
 });

app.use(
    express.json(),

    livros,
    clientes
    
)
}


export default routes;

