import vendas from "../models/Venda.js"

class VendaController {
        //listar vendas appget
    static listarVendas = (req, res) => {
        vendas.find((err, vendas) => {
            res.status(200).json(vendas)
    })}
        //listar vendas por id 
        static listarVendasId = (req, res) => {
                const id = req.params.id;
                vendas.findById(id, (err, vendas) => {
                if(err) {
                res.status(400).send({message: `${err.message} - Vendas não localizada.`})
                } else {
                res.status(200).send(vendas);
            }
        })
      }
            //cadastrar vendas 
    static cadastrarVendas = (req, res) => {
    let venda = new vendas(req.body);

    venda.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha a ocadastrar venda.`})
        } else {
            res.status(201).send({message: "venda cadastrada com sucesso",
            
                                  "Venda": venda                                })
        }
})
}
        //atualizar vendas
static atualizarVendas = (req, res) => {
    const id = req.params.id;

    vendas.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Venda atualizada com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirVendas = (req, res) =>{
    const id = req.params.id;

    vendas.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: `Venda com ID ${id} removida com sucesso` })
        } else {
            res.status(500).send({message: "ID não localizado"})
        }
    })
}
}

export default VendaController;