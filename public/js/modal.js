function Usuario(){
    window.location = `#bg`;
    titulo.innerHTML = `Olá ${sessionStorage.NOME_USUARIO}!`;
    texto.innerHTML = `Seu email: ${sessionStorage.EMAIL_USUARIO}`;
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function validarSessao() {
    var h1LoginUsuario = document.getElementById("texto");

    if (sessionStorage.EMAIL_USUARIO != null && sessionStorage.NOME_USUARIO != null) {
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = sessionStorage.NOME_USUARIO;
        }
    } else {
        window.location = "../login.html";
    }
}