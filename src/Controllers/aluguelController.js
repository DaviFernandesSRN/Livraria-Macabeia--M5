import aluguel from "../models/Aluguel.js"

class AluguelController {
        //listar Aluguel appget
    static listarAluguel = (req, res) => {
        aluguel.find((err, aluguel) => {
            res.status(200).json(aluguel)
    })}
        //listar Aluguel por id 
        static listarAluguelId = (req, res) => {
            const id = req.params.id;
        
            aluguel.findById(id, (err, aluguel) => {
              if(err) {
                res.status(400).send({message: `${err.message} - Id do Aluguel não localizado.`})
              } else {
                res.status(200).send(aluguel);}
            })
        }
            //cadastrar Aluguel 
    static cadastrarAluguel = (req, res) => {
    let Novoaluguel = new aluguel(req.body);

    Novoaluguel.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar Aluguel.`})
        } else {
            res.status(200).send({message: "Aluguel cadastrado com sucesso",
                                 "Aluguel": Novoaluguel})
        }
})
}
        //atualizar Aluguel
static atualizarAluguel = (req, res) => {
    const id = req.params.id;

    aluguel.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Aluguel atualizado com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirAluguel = (req, res) =>{
    const id = req.params.id;

    aluguel.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: 'Aluguel removida com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}
}

export default AluguelController;