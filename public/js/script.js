var j = 0;
var i = 1;
var k = 0;
var l = 1;

function criarDestaqueNovo(){
    k++;
    livroDestaque();
}

function criarLivroNovo(){
    j++;
    livro();
}

function livroDestaque(){
    while (l <= k) {
        DestaqueNovo.innerHTML += `
            <div class="livro">
                <img src="https://lojasaraiva.vteximg.com.br/arquivos/ids/12104831/1006786396.jpg?v=637142231647830000"
                    alt="">
                <h3>
                    Percy Jackson e o ladrão de raios
                </h3>
                <div class="botoes">
                    <a href="" class="Botao">
                        Ver mais
                    </a>
                    <a href="" class="Botao">
                        Sinopse
                    </a>
                </div>
            </div>
        `
        l++;
    };
}

function livro() {
    while (i <= j) {
        livroNovo.innerHTML += `
            <div class="livro">
                <img src="https://lojasaraiva.vteximg.com.br/arquivos/ids/12104831/1006786396.jpg?v=637142231647830000"
                    alt="">
                <h3>
                    Percy Jackson e o ladrão de raios
                </h3>
                <div class="botoes">
                    <a href="" class="Botao">
                        Ver mais
                    </a>
                    <a href="" class="Botao">
                        Sinopse
                    </a>
                </div>
            </div>
        `
        i++;
    };
}