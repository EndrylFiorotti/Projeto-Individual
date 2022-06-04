// sessão
function validarSessao() {
    // aguardar();
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

