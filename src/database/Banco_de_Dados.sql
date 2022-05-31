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
UPDATE Usuario SET adminUsuario = "Sim" WHERE idUsuario = 01;