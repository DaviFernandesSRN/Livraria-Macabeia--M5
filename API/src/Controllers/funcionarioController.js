import funcionarios from "../models/Funcionarios.js"
import funcionario from "../models/Funcionarios.js"


class FuncionarioController {
        //listar funcionario appget
    static listarFuncionario = (req, res) => {
        funcionarios.find((err, funcionarios) => {
            res.status(200).json(funcionarios)
    })}
        //listar funcionario por id 
        static listarFuncionarioId = (req, res) => {
                const id = req.params.id;
                funcionarios.findById(id, (err, funcionarios) => {
                if(err) {
                res.status(400).send({message: `${err.message} - funcionario não localizada.`})
                } else {
                res.status(200).send(funcionarios);
            }
        })
      }
            //cadastrar funcionario 
    static cadastrarFuncionario = (req, res) => {
    let funcionario = new funcionarios(req.body);

    funcionario.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha a ocadastrar funcionario.`})
        } else {
            res.status(201).send({message: "funcionario cadastrada com sucesso",
            
                                  "funcionario": funcionario                                })
        }
})
}
        //atualizar funcionario
static atualizarFuncionario = (req, res) => {
    const id = req.params.id;

    funcionarios.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'funcionario atualizada com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirFuncionario = (req, res) =>{
    const id = req.params.id;

    funcionarios.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: `funcionario com ID ${id} removida com sucesso` })
        } else {
            res.status(500).send({message: "ID não localizado"})
        }
    })
}
}

export default FuncionarioController;