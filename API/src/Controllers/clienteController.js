import clientes from "../models/Clientes.js"

class ClienteController {
    //listar estoque appget
static listarCliente = (req, res) => {
    clientes.find((err, clientes) => {
        res.status(200).json(clientes)
})}
    //listar cliente por id 
    static listarClienteId = (req, res) => {
        const id = req.params.id;
    
        clientes.findById(id, (err, clientes) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Produto não localizado.`})
          } else {
            res.status(200).send(clientes)
     } })
    }

           //cadastrar estoque 
           static cadastrarCliente = (req, res) => {
            let client = new clientes(req.body);
        
            client.save((err) => {
            
                if(err) {
                    res.status(500).send({message: `${err.message} - falha ao cadastrar o cliente.`})
                } else {
                    res.status(201).send({message: "cliente cadastrado com sucesso",
            
                                          "cliente": client                                })
}
        })
        }

        //atualizar cliente
static atualizarCliente = (req, res) => {
    const id = req.params.id;

    clientes.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Cliente foi atualizado com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirCliente = (req, res) =>{
    const id = req.params.id;

    clientes.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: 'CLIENTE removido com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}
}

export default ClienteController;