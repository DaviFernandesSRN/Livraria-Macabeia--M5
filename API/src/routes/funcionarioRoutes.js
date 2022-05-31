import express from "express"
import FuncionarioController from "../Controllers/funcionarioController.js";

const router = express.Router();

router
    .get("/funcionarios", FuncionarioController.listarFuncionario)
    .get("/funcionarios/:id", FuncionarioController.listarFuncionarioId)
    .post("/funcionarios", FuncionarioController.cadastrarFuncionario)
    .put("/funcionarios/:id", FuncionarioController.atualizarFuncionario)
    .delete("/funcionarios/:id", FuncionarioController.excluirFuncionario)



export default router;