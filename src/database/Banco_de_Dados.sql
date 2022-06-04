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
    nomeLivro VARCHAR(45),
    sinopseLivro VARCHAR(1000),
    imgLivro VARCHAR(5000),
    autorLivro VARCHAR(45),
    destaqueLivro INT, CHECK( destaqueLivro = 0 or destaqueLivro = 1 )
);

CREATE TABLE Genero(
	idGenero INT PRIMARY KEY AUTO_INCREMENT,
    tipoGenero VARCHAR(45)
);

CREATE TABLE LivroGenero(
	fkLivro INT,
    FOREIGN KEY (fkLivro) REFERENCES Livro(idLivro),
    fkGenero INT,
    FOREIGN KEY (fkGenero) REFERENCES Genero(idGenero)
);

CREATE TABLE Comentario(
	idComentario INT PRIMARY KEY AUTO_INCREMENT,
    comentarioUsuario VARCHAR(250),
    dataHora DATETIME,
    fkLivro INT,
    FOREIGN KEY (fkLivro) REFERENCES Livro(idLivro),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

SELECT * FROM Usuario;
SELECT * FROM Livro;
-- DELETE FROM Livro WHERE idLivro = 10;
SELECT COUNT(idLivro) as qntdLivros, COUNT(idLivro) as qntdLivrosDestaque FROM Livro WHERE destaqueLivro = 1;
INSERT INTO Usuario VALUES ( null, 'Endryl Fiorotti', 'endryl@gmail.com', '102030', 'Sim' );
INSERT INTO Livro VALUES 
( null,  'Solo Leveling', 'Dez anos atrás, depois do "Portal" que conecta o mundo real com um mundo de montros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores. Porém, nem todos os caçadores são fortes. Meu nome é Sung Jin-Woo, um caçador de rank E. Eu sou alguém que tem que arriscar a própria vida nas dungeons mais fracas, "O mais fraco do mundo". Sem ter nenhuma habilidade à disposição, eu mal consigo dinheiro nas dungeons de baixo nível... Ao menos até eu encontrar uma dungeon escondida com a maior dificuldade dentro do Rank D! No fim, enquanto aceitava minha morte, eu ganhei um novo poder!', 'https://static3.mangalivre.net/capas/IUQzYHNu_qeq5mosQv6wLw/7702/602ef3532b765external_cover.jpg', 'Jang Sung-Lak', 1),
( null, 'The Beginning After The End', 'Rei Grey conquistou força, riquezas e prestígio sem iguais em um mundo governado pela habilidade marcial. Entretanto, a solidão acompanha de perto aqueles de grande poder. Por detrás da máscara de um glorioso e poderoso rei, reside a casca vazia de um homem destituído de propósito e vontade. Renascido em um novo mundo repleto de magia e monstros, o Rei Grey terá a chance de refazer sua vida. Corrigir os erros do passado não será seu único desafio, pois um perigo oculto cresce a cada instante, ameaçando destruir tudo que ele trabalhou para criar, o fazendo questionar a verdadeira razão de ter recebido uma nova vida...', 'https://static3.mangalivre.net/capas/UfImono9zPu7PTk5SrpSdw/7403/625b30e19b8b3_external_cover.jpg', 'TurtleMe', 1 ),
( null, 'Omniscient Readers Viewpoint', '“Esse é um desenrolar que eu já conheço”. No momento em que pensei isso, o mundo foi destruído e um novo universo surgiu. A nova vida de um leitor comum começa no mundo de uma novel, a novel que só ele terminou.', 'https://static3.mangalivre.net/capas/7bG4X8BR6G-A3RKOKv5qLA/9948/6021a19615b9bexternal_cover.jpg', 'Sing-Shong & Sleepy-C (Arte)', 1 ),
( null, 'The World After the End', 'Esta é a história de um homem que não voltou quando todos retornaram ao passado. Os humanos foram convocados de repente para se tornarem “Andarilhos” e precisavam limpar a torre para salvar o mundo… 77º Andar: A Pedra do Retorno foi descoberta. Andarilhos podiam agora retornar ao passado. Lentamente, todos foram embora… A última esperança da humanidade, “Carpe Diem”, foi formada com as pessoas que se recusaram a abandonar o mundo… O último Andarilho chegou ao 100º andar. Ele não sabia mais no que crer. Obs.: Essa é a adaptação da novel que existe dentro da novel/manhwa Omniscient Readers Viewpoint e que o protagonista lê em sua juventude.', 'https://static3.mangalivre.net/capas/HJqX7rg_RwDu8nIwg62y4A/14677/62027f799b338_capa.jpg', 'S-Cynan e sing N song & Undead Potato (Arte)', 1 ),
( null, 'Boku no Hero Academia', 'A série conta a história de Midoriya Izuku, um garoto tímido e fraco cujo sonho é ser um herói. O problema é que ele vive num mundo repleto de pessoas com super poderes, mas ele mesmo não tem poder algum. No entanto, ele não desiste de seu grande sonho e fará de todo o possível para ser o maior herói que o mundo já conheceu!', 'https://images-na.ssl-images-amazon.com/images/I/51FAgOL-1bL._SX331_BO1,204,203,200_.jpg', 'Horikoshi, Kouhei', 1 ),
( null, 'One Piece', 'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado, diz que escondeu o seu tesouro em algum lugar da Grand Line, um oceano extremamente perigoso. Desde então muitos piratas se aventuram pela Grand Line para tentar encontrar o tesouro chamado One Piece. Um deles é Monkey D. Luffy, o garoto que, acidentalmente, comeu uma das Akuma No Mi, a Gomu Gomu No Mi (Fruta da Borracha), e agora ele pode esticar seu corpo como se fosse uma borracha. A jornada dele começa atrás de companheiros e um barco, que ele vai conseguindo pouco a pouco, pois tem um objetivo: Ser o Rei Dos Piratas!!', 'https://static3.mangalivre.net/capas/gCELLr4DNpa4XBAy0RjmtA/13/623e0f34a0ce7_external_cover.jpg', 'Eiichiro Oda', 0 ),
( null, 'Happy Sugar Life', 'A estudante Matsuzaka Satou tem uma reputação de ser fácil, mas um dia seu estilo de vida de dormir com um garoto após o outro chega ao fim. Isso acontece quando ela conhece uma criança chamada Shio, para quem ela está convencida de que ela sente o verdadeiro amor pela primeira vez. Satou pode parecer doce e inocente, mas não há nada que ela não faça para proteger sua vida juntas, incluindo cometer assassinato. Mas de onde que ela encontrou essa menina, e quanto tempo pode durar a sua "vida açucarada feliz" juntas por uma última vez?', 'https://static3.mangalivre.net/capas/HMp9BkVDE7ONdOAbPHGvyA/3701/capa.jpg', 'Kagisora, Tomiyaki', 0 );