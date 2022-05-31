import express from "express"
import ClienteController from "../Controllers/clienteController.js";

const router = express.Router();

router
    .get("/clientes", ClienteController.listarCliente)
    .get("/clientes/:id", ClienteController.listarClienteId)
    .post("/clientes", ClienteController.cadastrarCliente)
    .put("/clientes/:id", ClienteController.atualizarCliente)
    .delete("/clientes/:id", ClienteController.excluirCliente)



export default router;
