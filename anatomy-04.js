// Anonymous Function

// IIFE - Immediately Invoked Function Expression - Função imediatamente invocada
// ocorre em função anonima e queremos na sequencia imediata mostrar o resultado
// Essa função é usada quando precisamos garantir que determinados valores vão estar dentro de um escopo mais restrito. Tipo uma variavel local
(function (a, b, c) {
    console.log(`Result: ${a + b + c}`) // ${ argumento } -> chamados de interpolar
})(1, 2, 3);// Para invocar a função, basta colocar os argumentos, visto que ela não tem nome.

// Funções imediatamente invocadas são usadas para escopo de função local, não sendo utilizado seu valor fora do escopo

(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);// Quando tiver mais de uma Anonymous function, deve-se atentar de finalizar após a invocação com ' ; '(ponto e vírgula), se não, da erro 

(function (a, b, c) {
    let x = 30
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

// É comum não ter parametros em uma função imediatamente invocada, ficando mais ou menos no formato abaixo
(function () { // sem parametros no escopo da function e sem parametros na invocação da function
    let x = 303
    console.log(x)
})(); // sem parametros no escopo da function e sem parametros na invocação da function


// Arrow Function em Função imediatamente invocada.
(() => {
    console.log('Arrow #01')
})();

// Arrow Function em Função imediatamente invocada em apenas uma linha.
(() => console.log('Arrow #02'))();