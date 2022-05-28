var express = require("express");
var router = express.Router();

var livrosController = require("../controllers/livrosController");

router.get("/", function (req, res) {
    livrosController.testar(req, res);
});

router.get("/listar", function (req, res) {
    livrosController.listar(req, res);
});

router.get("/mostrarLivros", function (req, res) {
    livrosController.buscarLivros(req, res);
});

router.get("/mostrarLivrosEspecifico/:idLivro", function (req, res) {
    livrosController.buscarLivrosEspecifico(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de livrosController.js
router.post("/cadastrar", function (req, res) {
    livrosController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     livrosController.entrar(req, res);
// });

module.exports = router;