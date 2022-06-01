function Usuario(){
    window.location = `#bg`;
    titulo.innerHTML = `Olá ${sessionStorage.NOME_USUARIO}!`;
    texto.innerHTML = `Seu email: ${sessionStorage.EMAIL_USUARIO}`;
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}