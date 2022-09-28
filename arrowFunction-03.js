// Arrow Function

// Função Arrow se da a partir de uma Function Expression

// Function Expression -> 
const increment1 = function(n) {
    return n + 1
}

// transformando uma Function Expression em uma Arrow Function
    // Arrow Function is always anonymous
    // Função Arrow, são funções curtas, no geral em uma linha...
const increment2 = (n) => {
    return n + 1
}

// simplificando a Arrow Function, quando ela tiver apenas 1 parametro.
const increment3 = n => {
    return n + 1
}

// deixando a função Arrow mais curta, em apenas uma linha 
const increment4 = n => n + 1 // a paravra return neste caso esta implicita, pois só tem uma chave(argumento)

// Arrow Function com dois parametros, é obrigatório o usdo dos parenteses nos parametros
const increment5 = (a, b) => a + b + 1

console.log(increment1(1))
console.log(increment2(12))
console.log(increment3(122))
console.log(increment4(149))
console.log(increment5(1, 1))