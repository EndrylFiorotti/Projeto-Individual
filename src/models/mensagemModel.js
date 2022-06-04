var database = require("../database/config")

function listar(idLivro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT nomeUsuario, comentarioUsuario FROM Comentario
	        INNER JOIN Usuario ON Usuario.idUsuario = Comentario.fkUsuario
		        INNER JOIN Livro ON Livro.idLivro = Comentario.fkLivro
			        WHERE idLivro = ${idLivro};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function publicar(mensagem, idUsuario, idLivro) {
    console.log("ACESSEI O MENSAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", mensagem, idUsuario, idLivro);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Comentario (comentarioUsuario, fkUsuario, fkLivro) VALUES ('${mensagem}', '${idUsuario}', '${idLivro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar,
    listar
};