function Usuario(){
    window.location = `#bg`;
    titulo.innerHTML = `Olá ${sessionStorage.NOME_USUARIO}!`;
    texto.innerHTML = `Seu email: ${sessionStorage.EMAIL_USUARIO}`;
}

function segundoValor(){
    window.location = `index.html#bg`;
    titulo.innerHTML = `2 Titulo<br>`;
    texto.innerHTML = `2 Texto`;
}