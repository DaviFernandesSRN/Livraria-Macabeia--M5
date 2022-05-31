import estoque from "../models/Estoque.js"

class EstoqueController {
    //listar estoque appget
static listarEstoque = (req, res) => {
    estoque.find((err, estoque) => {
        res.status(200).json(estoque)
})}
    //listar estoque por id 
    static listarEstoqueId = (req, res) => {
        const id = req.params.id;
    
        estoque.findById(id, (err, estoque) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Produto não localizado.`})
          } else {
            res.status(200).send(estoque);}
        })
    }

           //cadastrar estoque 
           static cadastrarEstoque = (req, res) => {
            let controle = new estoque(req.body);
        
            controle.save((err) => {
            
                if(err) {
                    res.status(500).send({message: `${err.message} - falha ao cadastrar o Produto.`})
                } else {
                    res.status(201).send({message: "Produto cadastrado com sucesso",
            
                                          "Produto": controle                                })
}
        })
        }

        //atualizar Estoque
static atualizarEstoque = (req, res) => {
    const id = req.params.id;

    estoque.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Produto foi atualizado com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirEstoque = (req, res) =>{
    const id = req.params.id;

    estoque.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: 'Produto removido com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}
}

export default EstoqueController;