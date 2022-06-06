function publicar() {
    var comentarioVar = textarea_comentario.value;
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    var idLivroVar = sessionStorage.ID_LIVRO;

    if (comentarioVar == "") {
        alert("Insira um comentário antes de enviar");

        return false;
    } else if ( comentarioVar.length > 250 ) {
        alert("Comentário muito grande.");

        return false;
    }
    
    fetch("/mensagem/publicar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            comentarioServer: comentarioVar,
            idUsuarioServer: idUsuarioVar,
            idLivroServer: idLivroVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Mensagem enviada com sucesso!");
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function obterDadosComentario(idLivro) {
    fetch(`/mensagem/listar/${idLivro}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                resposta.reverse();
                plotarComentarios(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados: ${error.message}`);
    });
}

function plotarComentarios(resposta) {
    console.log('iniciando plotagem dos comentários...');

    var dadosComentario = {
        nomeUsuario: [],
        comentarioUsuario: []
    };

    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dadosComentario.nomeUsuario.push(registro.nomeUsuario);
        dadosComentario.comentarioUsuario.push(registro.comentarioUsuario);
    }

    for (var i = 0; i < dadosComentario.nomeUsuario.length; i++) {
        comentarios.innerHTML += `
            <div id="feed_container" class="feed-container">
                <h3 id="nomeUsuario">
                    ${dadosComentario.nomeUsuario[i]}
                </h3>
                <div class="comentarioUsuario">
                    ${dadosComentario.comentarioUsuario[i]}
                </div>
            </div>
        `;
    }
}