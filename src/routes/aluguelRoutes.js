import express from "express"
import AluguelController from "../Controllers/aluguelController.js";

const router = express.Router();

router
    .get("/aluguel", AluguelController.listarAluguel)
    .get("/aluguel/:id", AluguelController.listarAluguelId)
    .post("/aluguel", AluguelController.cadastrarAluguel)
    .put("/aluguel/:id", AluguelController.atualizarAluguel)
    .delete("/aluguel/:id", AluguelController.excluirAluguel)



export default router;

