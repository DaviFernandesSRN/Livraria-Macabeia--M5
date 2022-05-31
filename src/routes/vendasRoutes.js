import express from "express"
import VendasController from "../Controllers/vendasController.js";

const router = express.Router();

router
    .get("/vendas", VendasController.listarVendas)
    .get("/vendas/:id", VendasController.listarVendasId)
    .post("/vendas", VendasController.cadastrarVendas)
    .put("/vendas/:id", VendasController.atualizarVendas)
    .delete("/vendas/:id", VendasController.excluirVendas)

export default router;
