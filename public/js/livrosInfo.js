//  // Livro especifico
//  var dadosLivro = {
//   idLivro: [],
//   nomeLivro: [],
//   sinopseLivro: [],
//   imgLivro: []
// };

//  function obterDadosLivroEspecifico(idLivro) {
//   window.location = "../livroPagina.html"
//   fetch(`/livros/mostrarLivrosEspecifico/${idLivro}`, { cache: 'no-store' }).then(function (response) {
//       if (response.ok) {
//           response.json().then(function (resposta) {
//               console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
//               resposta.reverse();

//               plotarGraficoLivrosEspecificos(resposta, idLivro);
//           });
//       } else {
//           console.error('Nenhum dado encontrado ou erro na API');
//       }
//   }).catch(function (error) {
//       console.error(`Erro na obtenção dos dados: ${error.message}`);
//   });
// }

// function plotarGraficoLivrosEspecificos(resposta, idLivro) {
// console.log('iniciando plotagem do gráfico...');

// for (var i = 0; i < resposta.length; i++) {
//     var registro = resposta[i];
//     dadosLivro.idLivro.push(registro.idLivro);
//     dadosLivro.nomeLivro.push(registro.nomeLivro);
//     dadosLivro.sinopseLivro.push(registro.sinopseLivro);
//     dadosLivro.imgLivro.push(registro.imgLivro);
// }

// for (var i = 0; i < dadosLivro.idLivro.length; i++) {
//   informacoes_livro.innerHTML = `
//      ${dadosLivro.idLivro}
//      ${dadosLivro.nomeLivro}
//      ${dadosLivro.sinopseLivro}
//   `
// }
  
// console.log(JSON.stringify(dadosLivro));
// }