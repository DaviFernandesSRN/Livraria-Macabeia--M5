import express from "express"
import FornecedorController from "../Controllers/fornecedorController.js";

const router = express.Router();

router
    .get("/fornecedores", FornecedorController.listarFornecedor)
    .get("/fornecedores/:id", FornecedorController.listarFornecedorId)
    .post("/fornecedores", FornecedorController.cadastrarFornecedor)
    .put("/fornecedores/:id", FornecedorController.atualizarFornecedor)
    .delete("/fornecedores/:id", FornecedorController.excluirFornecedor)



export default router;