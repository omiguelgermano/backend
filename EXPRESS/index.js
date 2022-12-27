const express = require("express"); // importando o modulo Express
const app = express();// instanciando o express, e armazenando no 'app'

app.get("/", function(requisicao,resposta){ // Criando a rota pra corrigir o erro - 'Connot GET'
    resposta.send("<h1>Bem vindo ao meu APP!</h1>"); //Resposta enviada(send) para a requisicao do usuário 
});

app.get("/blog",function(req,res){
    res.send("<h1>Bem vindo ao meu blog!</h1>");
});

// Utilizando parametros inseridos no browser, para isso basta usar :nomeDoParametro

app.get("/oi/:nome/:idade",function(req,res){
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADO AO USUÁRIO
    var nome = req.params.nome;
    var idade = req.params.idade;
    res.send("<h1>Olá " + nome + ", sua idade é " + idade + ".<br>" + "Seja bem vindo!</h1>");
});

// Utilizando parametros NÃO OBRIGATORIO ou parametros opcionais, basta passar o parametro com uma interrogação no final '/:nomeDoParametro?'
app.get("/blog/:artigo?",function(req,res){
    
    var artigo = req.params.artigo;
    
    if(artigo){
        res.send("O artigo escolhido foi <b>"+ artigo + "</b><br>Boa leitura!");
    }else{
        res.send("<h1>Bem vindo ao meu blog!</h1>");
    }
});

// QUERY PARAMS
app.get("/canal",function(req,res){
    var canal = req.query["canal"];

    if(canal){
        res.send(canal); // chamando o canal http://localhost:3000/canal?canal=Youtube
    }else{
        res.send("Bem vindo ao meu Canal!<br>Nenhum canal escolhido!");
    }

});


app.listen(3000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})