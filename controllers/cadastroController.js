const cadastroController = {
    view: (req, res) =>{
        return res.render('../views/formCadastro')
    },
    salvarCadastro: (req,res) => {
        console.log(req.body)
    }
}

module.exports = cadastroController;