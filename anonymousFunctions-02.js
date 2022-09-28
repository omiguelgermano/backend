// Function Anonymous
// Função anonima é uma função sem nome
(   // se a função anonima (ou seja, sem nome) for declarada fora de parenteses é retornado erro de sintaxe. 
    //por isso o uso de parenteses nesse caso.
    function (a, b, c) {  
    return a + b + c
}
)


// Function Expression
/*
    Quando criamos a function expression, geralmente não damos nome para esta função, 
    pois é uma função pontual para uso rápido
*/
/* 
    A forma de declarar uma function expression é usando uma function anonymous e atribuir toda essa function a uma variavel. 
    Exemplo abaixo:
*/
const sum = function (a, b){
    return a + b
}

console.log(sum(5, 8))

const result = sum(10, 3)
console.log(result)

const anotherSum = sum
console.log(anotherSum(7, 6))

/*
    Functions Expression:
    Podemos então concluir que podemos (é possivel) atribuir o valor de uma variavél ou de uma constante uma função.
*/