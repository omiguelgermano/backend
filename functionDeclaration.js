// Anatomia da Função

// Function Declaration

function sayHello() {
    console.log('Hello! - Teste')
}

sayHello()


        // Function Undefined

function sayHelloTo(name) {
    //console.log('Hello! ' + name)
    console.log(`Hello! ${name}`) // Tamplate String -> Para usar o Tamplaye String é preciso usar a string dentro de CRASE ``
}

sayHelloTo()
sayHelloTo('Miguel')


        // Funções que retornam valor

function returnHi() {
    return 'Hi!' // Retornando uma String Literal
}

returnHi() /* Invocando a função, porém essa função não imprime nada na Tela,
pq o corpo da função é sim return e nao um console.log que é uma forma de imprimir na Tela */

let greeting = returnHi()
console.log(greeting)

const greeting1 = returnHi()
console.log(greeting1)

console.log(returnHi())

// Função com retorno de valor e Argumento

function returnHiTo(name) {
    return `Hi ${name}!`
}

let x = returnHiTo('Josh')
console.log(x)
console.log(returnHiTo('Miguel'))
