// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idSessao = sessionStorage.ID_SESSAO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_id_sessao.innerHTML = idSessao;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

// function validarLivros() {
//     // aguardar();

//     fetch("/livros/listar", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             // crie um atributo que recebe o valor recuperado aqui
//             // Agora vá para o arquivo routes/usuario.js
//             nomeServer: nomeVar
//         })
//     }).then(function (resposta) {

//         console.log("resposta: ", resposta);

//         if (resposta.ok) {
            
//         } else {
//             throw ("Houve um erro ao tentar realizar a busca!");
//         }
//     }).catch(function (resposta) {
//         console.log(`#ERRO: ${resposta}`);
//         // finalizarAguardar();
//     });

//     var nomeLivroV = NOME_USUARIO;
//     // var idSessao = sessionStorage.ID_SESSAO;

//         caixa_livros.innerHTML += nomeLivroV;
//         caixa_livros.innerHTML += sinopseV;
//         caixa_livros.innerHTML += imgV;
// }

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

