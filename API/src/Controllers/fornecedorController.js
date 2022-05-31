import fornecedores from "../models/Fornecedores.js"

class FornecedorController {
        //listar Aluguel appget
    static listarFornecedor = (req, res) => {
        fornecedores.find((err, fornecedores) => {
            res.status(200).json(fornecedores)
    })}
        //listar Aluguel por id 
        static listarFornecedorId = (req, res) => {
            const id = req.params.id;
        
            fornecedores.findById(id, (err, fornecedores) => {
              if(err) {
                res.status(400).send({message: `${err.message} - Id do fornecedor não localizado.`})
              } else {
                res.status(200).send(fornecedores);}
            })
        }
            //cadastrar Aluguel 
    static cadastrarFornecedor = (req, res) => {
    let Novoforne = new fornecedores(req.body);

    Novoforne.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar fornecedor.`})
        } else {
            res.status(200).send({message: "Fornecedor cadastrado com sucesso",
                                 "Fornecedor": Novoforne})
        }
})
}
        //atualizar Aluguel
static atualizarFornecedor = (req, res) => {
    const id = req.params.id;

    fornecedores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'fornecedor atualizado com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirFornecedor = (req, res) =>{
    const id = req.params.id;

    fornecedores.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: 'fornecedor removido com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}
}

export default FornecedorController;