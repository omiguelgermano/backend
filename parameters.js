// JS é uma linguagem de tipagem dinamica, o que significa dizer que é uma linguem altamente flexivel.
// Vamos entender melhor por meio dos parametros

function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2) // o JS de 'c' não foi definido, contudo, o JS não classifica como erro, classifica com valor indefinido
logParams(1)
logParams()

// Definindo um valor padrão para o parametro. Isso serve para momentos em que não são inserido todos os valores do parametro na invocação da function
function defaultParams(a = 0, b = 0, c = 0) {
    console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams()

// Passando um número indefinido de paramentros
// será usando Array(list)
function logNums(nums) {
    for(let n of nums) {
        console.log(n)
    }
}

logNums([1, 2, 3, 4, 5, 6])// Passando os parametros, ou simplismente, valores da lista

// Se livrando dos colchetes, para isso iremos usar o operador 'spread/rest', 
// usando como base a função acima. 
// Podemos dizer que: isso é uma fatoração.


function logNums1(...nums) { // os ' ... 'significar dizer que esta função irá receber uma quantidade indefinida de parametros, e todos os pararetros são armazenados dentro de uma função
    console.log(Array.isArray(nums))
    for(let n of nums) {
        console.log(n)
    }
}

logNums1(1, 2, 3, 4, 5, 6, 7)

// simplificando a função anterior
function logNums2(...nums) {
    console.log(nums)
}

logNums2(1, 2, 3, 4, 5, 6, 7)

// Prática
function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3))