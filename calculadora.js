// Seleccionamos body un input y todo los botones
const body = document.querySelector('body');
const input = document.querySelector('#display')
const botones = Array.from(document.querySelectorAll('.btn'));
// Declaracion de variables
// Numero va a manatener el numero que ingresemos antes de un operador
// Y la variable op mantendra la operacion completa ejemplo (25+30)
let op = ''
let numero = ''

// Nos permite colocar el texto del btn en el value del input
// Closure: es una funcion dentro de otra funcion
// Callback es una funcion que pasa como argumento dentro de otra funcion.
botones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        calculadora(event.target.innerText)

    })
})
// Es todo el cuerpo de la pagina de html
body.addEventListener('keydown', (event) => {
    calculadora(event.key)
})
// El argumento que la funcin espera es el valor que vamos a colocar en el input
const calculadora = (valor) => {
    //Callback la funcion que se pasa
    // Funcion de alto orden una funcion que recibe una funcion o devuelve una funcion
    if (!isNaN(valor) || valor == '.') {
        // nos permite concatenar los numero para que se creen los valores.
        input.value += valor
        numero += valor
        // cuando el valor sea uno de los signos de las ecuaciones matematicas entrara en el else if.
    } else if (valor == '(' || valor==')') {
        input.value += valor
    
    } else if (valor == '/' || valor == '+' || valor == '-' || valor == '*') {

        input.value += valor
        op += parseInt(numero) + valor
        numero = ''
        // cuando sea un enter entrara en el else if y nos realizara la ecuacion para que nos de el valor.
    } else if (valor == 'Enter' || valor == '=') {
        input.value = eval(op + parseInt(numero))
        op = ''
        numero = input.value
    }
    else if (valor == 'Escape' || valor == 'C') {
        input.value = ''
        op = ''
        numero = ''
    }
    else if (valor == 'Backspace') {
        input.value = input.value.slice(0, input.value.length - 1)
        op=op.slice(0,op.length-1)
        numero = numero.slice(0,numero.length-1)
    }
}