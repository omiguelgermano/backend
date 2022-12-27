<!--
-->

### Instalação do Framework Express

no diretorio desejado, use o camando 'npm init' para startar o packge.json

Instalação do Express: no mesmo diretorio digite> npm install express --save

O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor.
Comando p instalar> npm install nodemon -g
Comando p startar o servidor no nodemon> nodemon <nomeDoArquivo>

## Parametros (no browser)
Parametros obrigatório

app.get("/oi/:nome/:idade",function(req,res){
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADO AO USUÁRIO
    var nome = req.params.nome;
    var idade = req.params.idade;
    res.send("<h1>Olá " + nome + ", sua idade é " + idade + ".<br>" + "Seja bem vindo!</h1>");
});


Parametros Opcionais

// Utilizando parametros NÃO OBRIGATORIO ou parametros opcionais, basta passar o parametro com uma interrogação no final '/:nomeDoParametro?'
app.get("/blog/:artigo?",function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("O artigo escolhido foi <b>"+ artigo + "</b><br>Boa leitura!");
    }else{
        res.send("<h1>Bem vindo ao meu blog!</h1>");
    }
});
## Query params
ele não é fixo na rota.
recebe parametros de forma dinamica
