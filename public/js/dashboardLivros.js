window.onload = obterDados();

function obterDados() {
    fetch(`/dashboard/dashboardDados`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotar(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotar(resposta) {
    console.log('iniciando plotagem do gráfico...');

    var dados = {
        labels: "Quantidade",
        data: []
    };

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.data.push(registro.qntdLivros);
    }

    console.log(JSON.stringify(dados));

    const ctx = document.getElementById('canvas_grafico').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Livros'],
        datasets: [{
            label: 'Quantidade de Livros total',
            data: dados.data[0],
            backgroundColor: [
                'rgba(255, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Quantidade de Livros em destaque',
            data: dados.data[1],
            backgroundColor: [
                'rgba(0, 0, 255, 0.2)'
            ],
            borderColor: [
                'rgba(0, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}