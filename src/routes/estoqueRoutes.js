import express from "express"
import EstoqueController from "../Controllers/estoqueController.js";

const router = express.Router();

router
    .get("/estoque", EstoqueController.listarEstoque)
    .get("/estoque/:id", EstoqueController.listarEstoqueId)
    .post("/estoque", EstoqueController.cadastrarEstoque)
    .put("/estoque/:id", EstoqueController.atualizarEstoque)
    .delete("/estoque/:id", EstoqueController.excluirEstoque)



export default router;
