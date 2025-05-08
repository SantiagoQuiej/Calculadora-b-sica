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
    }
    else if (valor == '+' || valor == '-' || valor == '*' || valor == '/' || valor == '(' || valor == ')') {
        //123481+   
        input.value = input.value + valor
        //     123481+
        op = numero != '' ? op + parseFloat(numero) + valor : op + valor
        numero = ''
    }
    else if (valor == 'Enter' || valor == '=') {
        let op3;
        for (let i = 0; i < op.length; i++) {
            if (op[i] == '(' && !isNaN(op[0])) {
                if (!"/*+-".includes(op[i - 1])) {
                    op3 = op.slice(0, i).concat('*')
                    op4 = op.slice(i)
                    op = op3 + op4
                }
            }
        }

        input.value = numero == '' ? eval(op) : eval(op + parseFloat(numero))
        op = ''
        numero = input.value
    }
    else if (valor == 'Backspace') {
        input.value = input.value.slice(0, input.value.length - 1)
        op = op.slice(0, op.length - 1)
        numero = numero.slice(0, numero.length - 1)
    }
}