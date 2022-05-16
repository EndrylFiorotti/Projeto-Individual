var livrosModel = require("../models/livrosModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA livrosController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    livrosModel.listar()
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

// function mostrarLivros(req, res) {
//     var nomeLivro = req.body.nomeServer;
//     var sinopseLivro = req.body.sinopseServer;
//     var imgLivro = req.body.imgServer;

//     livrosModel.mostrarLivros(nomeLivro, sinopseLivro, imgLivro)
//         .then(
//             function (resultado) {
//                 console.log(`\nResultados encontrados: ${resultado.length}`);
//                 console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

//                 if (resultado.length == 1) {
//                     console.log(resultado);
//                     res.json(resultado);
//                 } else if (resultado.length == 0) {
//                     res.status(403).send("Nenhum livro");
//                 }
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("\nHouve um erro ao exibir imagens! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

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
    // mostrarLivros,
    cadastrar,
    listar,
    testar
}