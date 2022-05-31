import express from "express"
import FornecedorController from "../Controllers/fornecedorController.js";

const router = express.Router();

router
    .get("/fornecedor", FornecedorController.listarFornecedor)
    .get("/fornecedor/:id", FornecedorController.listarFornecedorId)
    .post("/fornecedor", FornecedorController.cadastrarFornecedor)
    .put("/fornecedor/:id", FornecedorController.atualizarFornecedor)
    .delete("/fornecedor/:id", FornecedorController.excluirFornecedor)



export default router;