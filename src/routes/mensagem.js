var express = require("express");
var router = express.Router();

var mensagemController = require("../controllers/mensagemController");

router.get("/listar/:idLivro", function (req, res) {
    mensagemController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/publicar", function (req, res) {
    mensagemController.publicar(req, res);
})

module.exports = router;