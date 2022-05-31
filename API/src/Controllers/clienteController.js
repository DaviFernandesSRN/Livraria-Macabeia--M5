import cliente from "../models/Clientes.js"

class ClienteController {
    //listar estoque appget
static listarCliente = (req, res) => {
    cliente.find((err, cliente) => {
        res.status(200).json(cliente)
})}
    //listar cliente por id 
    static listarClienteId = (req, res) => {
        const id = req.params.id;
    
        cliente.findById(id, (err, cliente) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Produto não localizado.`})
          } else {
            res.status(200).send(cliente);}
        })
    }

           //cadastrar estoque 
           static cadastrarCliente = (req, res) => {
            let clientes = new cliente(req.body);
        
            clientes.save((err) => {
            
                if(err) {
                    res.status(500).send({message: `${err.message} - falha ao cadastrar o cliente.`})
                } else {
                    res.status(201).send({message: "cliente cadastrado com sucesso",
            
                                          "cliente": clientes                                })
}
        })
        }

        //atualizar cliente
static atualizarCliente = (req, res) => {
    const id = req.params.id;

    cliente.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Cliente foi atualizado com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirCliente = (req, res) =>{
    const id = req.params.id;

    cliente.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: 'CLIENTE removido com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}
}

export default ClienteController;