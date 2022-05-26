obterDados();

  function obterDados() {
    fetch(`/livros/mostrarLivros`, { cache: "no-store" })
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (resposta) {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            resposta.reverse();

            plotarDados(resposta);
          });
        } else {
          console.error("Nenhum dado encontrado ou erro na API");
        }
      })
      .catch(function (error) {
        console.error(
          `Erro na obtenção dos dados p/ gráfico: ${error.message}`
        );
      });
  }

  function plotarDados(resposta) {
    console.log("iniciando plotagem do gráfico...");
    var dados = {
        idLivro: [],
        nomeLivro: [],
        sinopseLivro: [],
        imgLivro: []
    };
    for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];
      dados.idLivro.push(registro.idLivro);
      dados.nomeLivro.push(registro.nomeLivro);
      dados.sinopseLivro.push(registro.sinopseLivro);
      dados.imgLivro.push(registro.imgLivro);
    }

    for (var i = 0; i < dados.idLivro.length; i++) {
      caixa_livros.innerHTML += `
        <div class="content">
            <div class="imagem">
                <img class="imagemCard" src="${dados.imgLivro[i]}">
            </div>
            <h2 id="tituloLivro">
                ${dados.nomeLivro[i]}
            </h2>
            <hr>
            <p>
                <span id="valor">${dados.sinopseLivro[i]}</span>       
            </p>
        </div>
    `;
    }
  }

  function AdicionarLivro() {
    window.location = "./cadastrarLivro.html";
  }