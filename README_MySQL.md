# funcionamento do MySQL
Alt-H1
======
Alt-H2
------
---
### Acessando o MySQL

Para entrar no mysql via terminal usamos o endereço de HOST, o USER e o PASSWORD

>mysql -h localhost -u root -p

mysql> SHOW DATABASES;

---
### Criando um Danco de Dados

mysql> CREATE DATABASE store<nomeDoBancoDeDados>;

mysql> USE <nomeDoBancoDeDados>;

mysql> SHOW TABLES;

---
### Criando a tabela de Dados
Agora em um editor de texto de sua preferencia, vamos criar o script de criação da tabela de dados, em seguida vc pode colar dentro do banco de dados que vc acessou.

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

mysql> SHOW TABLES;

mysql> DESCRIBE usuarios; <nome da tabela que deseja consultar>

==========================================================
### Inserindo dados no Bando de dados

Exemplo de Script

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Miguel",
    "oi@teste.com",
    17
),(
    "Germano",
    "new@teste.com",
    28
),(
    "Felipe",
    "teste@teste.com",
    38
);

mysql> SHOW TABLES;

mysql> SELECT * FROM usuarios;

mysql> SELECT * FROM usuarios WHERE idade = 17;

mysql> SELECT * FROM usuarios WHERE idade <= 17;

mysql> SELECT * FROM usuarios WHERE idade >= 18;

=========================================================
### DELETE

mysql> DELETE FROM usuarios WHERE nome = "Felipe";

=========================================================
### UPDATE

mysql> UPDATE usuarios SET nome = "Novo Nome" WHERE nome = "Miguel";
mysql>
mysql>
