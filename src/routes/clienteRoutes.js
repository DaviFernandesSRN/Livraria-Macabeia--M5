import express from "express"
import ClienteController from "../Controllers/clienteController.js";

const router = express.Router();

router
    .get("/cliente", ClienteController.listarCliente)
    .get("/cliente/:id", ClienteController.listarClienteId)
    .post("/cliente", ClienteController.cadastrarCliente)
    .put("/cliente/:id", ClienteController.atualizarCliente)
    .delete("/cliente/:id", ClienteController.excluirCliente)



export default router;
