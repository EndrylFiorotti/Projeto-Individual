obterDestaques();
obterDados();

// Destaques

function obterDestaques() {
  fetch(`/livros/mostrarLivrosDestaque`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          resposta.reverse();

          plotarDestaques(resposta);
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

function plotarDestaques(resposta) {
  console.log("iniciando plotagem dos destaques...");
  var dados = {
    idLivro: [],
    nomeLivro: [],
    sinopseLivro: [],
    imgLivro: [],
    autorLivro: [],
    destaqueLivro: []
  };

  for (i = 0; i < resposta.length; i++) {
    var registro = resposta[i];
    dados.idLivro.push(registro.idLivro);
    dados.nomeLivro.push(registro.nomeLivro);
    dados.sinopseLivro.push(registro.sinopseLivro);
    dados.imgLivro.push(registro.imgLivro);
    dados.autorLivro.push(registro.autorLivro);
    dados.destaqueLivro.push(registro.destaqueLivro);
  }

  for (var i = 0; i < dados.idLivro.length; i++) {
    div_destaques.innerHTML += `
    <div class="content">
      <div class="imagem">
        <img class="imagemCard" src="${dados.imgLivro[i]}">
      </div>
      <h2 id="nomeLivro">
        ${dados.nomeLivro[i]}
      </h2>
      <h3 id="autorLivro">
        ${dados.autorLivro[i]}
      </h3>
      <hr>
      <button class="btn-livros" onclick="obterDadosLivroEspecifico(${dados.idLivro[i]})">
        Ver mais
      </button>
    </div>
  `;
  }
}

// Todos os Livros

function obterDados() {
  fetch(`/livros/mostrarLivros`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
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
  console.log("iniciando plotagem dos livros...");
  var dados = {
    idLivro: [],
    nomeLivro: [],
    sinopseLivro: [],
    imgLivro: [],
    autorLivro: [],
    destaqueLivro: []
  };

  for (i = 0; i < resposta.length; i++) {
    var registro = resposta[i];
    dados.idLivro.push(registro.idLivro);
    dados.nomeLivro.push(registro.nomeLivro);
    dados.sinopseLivro.push(registro.sinopseLivro);
    dados.imgLivro.push(registro.imgLivro);
    dados.autorLivro.push(registro.autorLivro);
    dados.destaqueLivro.push(registro.destaqueLivro);
  }

  for (var i = 0; i < dados.idLivro.length; i++) {
    caixa_livros.innerHTML += `
        <div class="content" id="livro">
            <div class="imagem">
                <img class="imagemCard" src="${dados.imgLivro[i]}">
            </div>
            <h2 id="nomeLivro">
              ${dados.nomeLivro[i]}
            </h2>
            <hr>
            <h3 id="autorLivro">
              ${dados.autorLivro[i]}
            </h3>
            <button class="btn-livros" onclick="obterDadosLivroEspecifico(${dados.idLivro[i]})">
              Ver mais
            </button>
        </div>
    `;
  }
}

function AdicionarLivro() {
  window.location = "./cadastrarLivro.html";
}

// Mostra os livros que foram clicados no "sobre mais"
function obterDadosLivroEspecifico(idLivro) {
  fetch(`/livros/mostrarLivrosEspecifico/${idLivro}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        resposta.reverse();
        plotarLivrosEspecificos(resposta, idLivro);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  }).catch(function (error) {
    console.error(`Erro na obtenção dos dados: ${error.message}`);
  });
}

function plotarLivrosEspecificos(resposta) {
  console.log('iniciando plotagem dos livros selecionados...');

  var dadosLivro = {
    idLivro: [],
    nomeLivro: [],
    sinopseLivro: [],
    imgLivro: [],
    autorLivro: [],
    destaqueLivro: []
  };

  for (var i = 0; i < resposta.length; i++) {
    var registro = resposta[i];
    dadosLivro.idLivro.push(registro.idLivro);
    dadosLivro.nomeLivro.push(registro.nomeLivro);
    dadosLivro.sinopseLivro.push(registro.sinopseLivro);
    dadosLivro.imgLivro.push(registro.imgLivro);
    dadosLivro.autorLivro.push(registro.autorLivro);
    dadosLivro.destaqueLivro.push(registro.destaqueLivro);
  }

  sessionStorage.setItem("ID_LIVRO", dadosLivro.idLivro);
  sessionStorage.setItem("NOME_LIVRO", dadosLivro.nomeLivro);
  sessionStorage.setItem("SINOPSE_LIVRO", dadosLivro.sinopseLivro);
  sessionStorage.setItem("IMG_LIVRO", dadosLivro.imgLivro);
  sessionStorage.setItem("AUTOR_LIVRO", dadosLivro.autorLivro);
  sessionStorage.setItem("DESTAQUE_LIVRO", dadosLivro.destaqueLivro);
  
  var url = window.location.href;
  var urlsplit = url.split("/")[3]
  sessionStorage.setItem("url", urlsplit);

  window.location = "../livroPagina.html"
}