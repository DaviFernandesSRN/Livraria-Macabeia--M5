import livros from "../models/Livros.js"

class LivroController {
        //listar vendas appget
    static listarLivros = (req, res) => {   
        livros.find((err, livros) => {
            res.status(200).json(livros)
    })}
        //listar vendas por id 
        static listarLivrosId = (req, res) => {
                const id = req.params.id;
                livros.findById(id, (err, livros) => {
                if(err) {
                res.status(400).send({message: `${err.message} - livro não localizado.`})
                } else {
                res.status(200).send(livros);
            }
        })
      }

      static listarLivrosName = (req, res) => {
        const title = req.params.titulo;
        livros.find({titulo:title}, (err, livros) => {
        if(err) {
        res.status(400).send({message: `${err.message} - livro não localizado.`})
        } else {
        res.status(200).send(livros);
    }
})
}
            //cadastrar vendas 
    static cadastrarLivros = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro .`})
        } else {
            res.status(201).send({message: "livro cadastrado com sucesso",
            
                                  "livro": livro                                })
        }
})
}
        //atualizar vendas
static atualizarLivros = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Livro atualizada com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirLivros = (req, res) =>{
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: `Livro com ID ${id} removida com sucesso` })
        } else {
            res.status(500).send({message: "ID não localizado"})
        }
    })
}
}

export default LivroController;