CREATE DATABASE dbBooKing;
USE dbBooKing;

CREATE TABLE Usuario(
		idUsuario INT PRIMARY KEY AUTO_INCREMENT,
        nomeUsuario VARCHAR(45),
        emailUsuario VARCHAR(45),
        senhaUsuario VARCHAR(45),
        adminUsuario CHAR(3), CHECK (adminUsuario = "Sim" or adminUsuario = "Não")
);

CREATE TABLE Livro(
	idLivro INT PRIMARY KEY AUTO_INCREMENT,
    nomeLivro VARCHAR(100),
    sinopseLivro VARCHAR(1000),
    imgLivro VARCHAR(5000),
    autorLivro VARCHAR(45),
    destaqueLivro INT, CHECK( destaqueLivro = 0 or destaqueLivro = 1 )
);

CREATE TABLE Comentario(
	idComentario INT PRIMARY KEY AUTO_INCREMENT,
    comentarioUsuario VARCHAR(250),
    fkLivro INT,
    FOREIGN KEY (fkLivro) REFERENCES Livro(idLivro),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

SELECT * FROM Usuario;
SELECT * FROM Livro;
SELECT * FROM Comentario;

-- INSERTS
INSERT INTO Usuario VALUES 
( null, 'Endryl Fiorotti', 'endryl@gmail.com', '102030', 'Sim' ),
( null, 'Fernanda Caramico', 'fernanda@gmail.com', '302010', 'Não' );

INSERT INTO Livro VALUES
( null, 'Solo Leveling', 'Dez anos atrás, depois do "Portal" que conecta o mundo real com um mundo de montros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores. Porém, nem todos os caçadores são fortes. Meu nome é Sung Jin-Woo, um caçador de rank E. Eu sou alguém que tem que arriscar a própria vida nas dungeons mais fracas, "O mais fraco do mundo". Sem ter nenhuma habilidade à disposição, eu mal consigo dinheiro nas dungeons de baixo nível... Ao menos até eu encontrar uma dungeon escondida com a maior dificuldade dentro do Rank D! No fim, enquanto aceitava minha morte, eu ganhei um novo poder!', 'https://static3.mangalivre.net/capas/IUQzYHNu_qeq5mosQv6wLw/7702/602ef3532b765external_cover.jpg', 'Jang Sung-Lak', 1),
( null, 'The Beginning After The End', 'Rei Grey conquistou força, riquezas e prestígio sem iguais em um mundo governado pela habilidade marcial. Entretanto, a solidão acompanha de perto aqueles de grande poder. Por detrás da máscara de um glorioso e poderoso rei, reside a casca vazia de um homem destituído de propósito e vontade. Renascido em um novo mundo repleto de magia e monstros, o Rei Grey terá a chance de refazer sua vida. Corrigir os erros do passado não será seu único desafio, pois um perigo oculto cresce a cada instante, ameaçando destruir tudo que ele trabalhou para criar, o fazendo questionar a verdadeira razão de ter recebido uma nova vida...', 'https://static3.mangalivre.net/capas/UfImono9zPu7PTk5SrpSdw/7403/625b30e19b8b3_external_cover.jpg', 'TurtleMe', 0 ),
( null, 'Omniscient Readers Viewpoint', '“Esse é um desenrolar que eu já conheço”. No momento em que pensei isso, o mundo foi destruído e um novo universo surgiu. A nova vida de um leitor comum começa no mundo de uma novel, a novel que só ele terminou.', 'https://static3.mangalivre.net/capas/7bG4X8BR6G-A3RKOKv5qLA/9948/6021a19615b9bexternal_cover.jpg', 'Sing-Shong & Sleepy-C (Arte)', 0 ),
( null, 'Harry Potter e o cálice de fogo', 'Acontecimentos inesperados – como, por exemplo, a presença de um novo professor de Defesa contra as Artes das Trevas e um evento extraordinário promovido na escola – alvoroçam os ânimos dos estudantes. Para surpresa de todos não haverá a tradicional Copa Anual de Quadribol entre Casas. Será substituída pelo Torneio Tribuxo, uma competição amistosa entre as três maiores escolas européias de bruxaria — Hogwarts, Beauxbatons e Durmstrang — que não se realizava havia um século. A competição é dividida em tarefas, cuja finalidade é testar a coragem, o poder de dedução, a perícia em magia e a capacidade de enfrentar o perigo dos campeões. Liderados pelo professor Dumbledore, os alunos de Hogwarts terão de demonstrar todas as habilidade mágicas e não-mágicas que vêm adquirindo ao longo de suas vidas.', 'https://img.wook.pt/images/harry-potter-e-o-calice-de-fogo-j-k-rowling/MXw0Njg2NXw3NjkzMnwxNDIwODIzMDUxMDAw/500x', 'J. K. Rowling', 0 ),
( null, 'Percy Jackson e o ladrão de raios', 'Os deuses do Olimpo continuam vivos, ainda se apaixonam por mortais e geram filhos metade deuses, metade humanos, como os heróis da Grécia antiga. Marcados pelo destino, eles dificilmente passam da adolescência. Poucos conseguem descobrir sua identidade. O garoto-problema Percy Jackson é um deles. Tem experiências estranhas em que deuses e monstros mitológicos parecem saltar das páginas dos livros direto para a sua vida. Pior que isso: algumas dessas criaturas estão bastante irritadas. Um artefato precioso foi roubado do Monte Olimpo e Percy é o principal suspeito. Para restaurar a paz, ele e seus amigos – jovens heróis modernos – terão de fazer mais do que capturar o verdadeiro ladrão: precisam elucidar uma traição mais ameaçadora que fúria dos deuses.', 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12104831/1006786396.jpg?v=637142231647830000', 'Rick Riordan', 0 ),
( null, 'The Witcher O último desejo', 'Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e de sangue-frio treinado, desde a infância, para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mundo. Um mundo fantástico criado por Sapkowski com claras influências da mitologia eslava. Um mundo em que nem todos os que parecem monstros são maus nem todos os que parecem anjos são bons…', 'https://images-na.ssl-images-amazon.com/images/I/61N2ZCfEB4L.jpg', 'Andrzej Sapkowski', 0 ),
( null, 'Mago Livro Um: APRENDIZ', 'Na fronteira do Reino das Ilhas existe uma vila tranquila chamada Crydee. É lá que vive Pug, um órfão franzino que sonha ser um guerreiro Destemido a serviço do rei. Mas a vida dá voltas e Pug acaba se tornando aprendiz do misterioso mago Kulgan. Nesse dia, o destino de dois mundos se altera para sempre. Com sua coragem, Pug conquista um lugar na corte e no coração de uma princesa, mas subitamente a paz do reino é desfeita por misteriosos inimigos que devastam cidade após cidade. Ele, então, é arrastado para o conflito e, sem saber, inicia uma odisseia pelo desconhecido: terá de dominar os poderes inimagináveis de uma nova e estranha forma de magia… ou morrer. Dividida em quatro livros, A Saga do Mago é uma aventura sem igual, uma viagem por reinos distantes e ilhas misteriosas, onde conhecemos culturas exóticas, aprendemos a amar e descobrimos o verdadeiro valor da amizade. E, no fim, tudo será decidido na derradeira batalha entre as forças da Ordem e do Caos.', 'https://2.bp.blogspot.com/-BzCHmHKtykw/UshabFXyV8I/AAAAAAAAdEs/rEVfKZWj9V4/s1600/Mago_Aprendiz_capa.jpg', 'Raymond E. Feist', 1 ),
( null, 'Percy Jackson: O Último Olimpiano', 'Enquanto os Olimpianos se ocupam de conter a fúria do monstro Tifão, Cronos avança em direção à cidade de Nova York, onde o Monte Olimpo está precariamente vigiado. Agora, apenas Percy Jackson e seu exército de heróis podem deter o Senhor do Tempo.Nesse quinto e último livro da série, o combate se acirra e o mundo que conhecemos está prestes a ser destruído.', 'https://m.media-amazon.com/images/I/511Bgr959LL.jpg', 'Rick Riordan', 1 ),
( null, 'Conjurador: O aprendiz (Vol. 1)', 'Fletcher é um órfão de 15 anos e, para sua surpresa, conseguiu invocar um demônio do quinto nível. O problema é que apenas os nobres deveriam ser capazes de conjurar criaturas e usá-las na guerra contra os orcs. Mas plebeus como Fletcher também podem ser conjuradores, e o garoto consegue uma vaga na Academia Vocans, uma escola de magos que prepara seus alunos para os campos de batalha. Lá, ele irá enfrentar o bullying dos nobres, mas também aprenderá feitiços e fará amigos incomuns, como anões e elfos. Além de se provar digno de uma boa patente na guerra, Fletcher e seu grupo de segregados precisam se unir e vencer o preconceito que sofrem na desigual sociedade de Hominum.', 'https://images-na.ssl-images-amazon.com/images/I/51ZZ0dte-rL._SX335_BO1,204,203,200_.jpg', 'Taran Matharu', 1 );

INSERT INTO Comentario VALUES 
( null, 'Livro muito bom, recomendo para todos os leitores que gostam de um prota bem forte', 1, 1 ),
( null, 'Um dos melhores, senão o melhor, webtoon que já escreveram', 1, 2 ),
( null, 'O webtoon é incrivel, o traço vem melhorando a cada cap novo lançado, estão de parabéns', 2, 1 ),
( null, 'Não curti muito ler pela webtoon, só acompanho pela light novel e é incrivel!!!', 2, 2 ),
( null, 'Coisa de louco esse webtoon, muito bom e o traço é lindo d++++', 3, 1 ),
( null, 'Livro muito bom, recomendo para todos os leitores que gostam de um prota bem forte', 7, 1 ),
( null, 'Fechou a série de livros com chave de ouro, meio decepcionada pelo prota não ter aceitado se tornar um deus. :(', 8, 2 ),
( null, 'Comecei a acompanhar o livro por conta do filme que eu gostei de mais, e o livro entrega uma história ainda melhor que a do filme', 8, 1 ),
( null, 'Livro muito bem estruturado, com uma história envolvente e enredo surpreendedor!!!', 9, 2 ),
( null, 'Muito bom o livro, ainda mais pelo autor do livro ser filho de brasileiro!', 9, 1 );