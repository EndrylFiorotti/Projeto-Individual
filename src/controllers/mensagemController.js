var mensagemModel = require("../models/mensagemModel");

var sessoes = [];

function listar(req, res) {
    var idLivro = req.params.idLivro;

    mensagemModel.listar(idLivro)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo livroPagina.html
    var comentario = req.body.comentarioServer;
    var idUsuario = req.body.idUsuarioServer;
    var idLivro = req.body.idLivroServer;

    // Faça as validações dos valores
 
        
        // Passe os valores como parâmetro e vá para o arquivo mensagemModel.js
        mensagemModel.publicar(comentario, idUsuario, idLivro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    publicar,
    listar
}