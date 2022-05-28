var livrosModel = require("../models/livrosModel");

var sessoes = [];

// function testar(req, res) {
//     console.log("ENTRAMOS NA livrosController");
//     res.json("ESTAMOS FUNCIONANDO!");
// }

function buscarLivros(req, res) {

    livrosModel.buscarLivros().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarLivrosEspecifico(req, res) {

    var idLivro = req.params.idLivro;

    livrosModel.buscarLivrosEspecifico(idLivro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sinopse = req.body.sinopseServer;
    var img = req.body.imgServer;

    // Faça as validações dos valores


    // Passe os valores como parâmetro e vá para o arquivo livrosModel.js
    livrosModel.cadastrar(nome, sinopse, img)
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
    cadastrar,
    buscarLivros,
    buscarLivrosEspecifico,
}