
const body = document.querySelector('body');
const input = document.querySelector('#display')
const botones = Array.from(document.querySelectorAll('.btn'));
//Declaración de variables 
//numero va a mantener el numero que tengamos antes de colocar un signo
//op mantendrá la operación completa, ejemplo 25+10-30
let op = ''
let numero = ''
// Nos permite colocar el texto del btn en el value del input
//'Función dentro de una función "closure"'
// Collback, función que pasa dentro de un parámetro dentro de otra función

botones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event)
            calculadora(event.target.innerText)
        
    })
})


body.addEventListener('keydown', (event) => {
    calculadora(event.key)
})

//permite que la función esperada sea el valor que vamos a colocar en el input
const calculadora = (valor) => {
  console.log(valor);
  
    if (!isNaN(valor) || valor == '.') {
        input.value += valor
        numero += valor
        nuevoNum += valor
        console.log();
            
      }
      else if(valor == '+' || valor == '-' || valor == '*' || valor == '/' || valor == '(' || valor == ')' ){
        //123481+   
        input.value = input.value + valor
        //     123481+
        op = numero != '' ? op  + parseFloat(numero) + valor : op + valor
        numero = ''
    }
    else if(valor == 'Enter' || valor == '='){       
        let op3;
        for(let i =0; i < op.length; i++)
        {
            if(op[i] == '(' && !isNaN(op[0])){
                if(!"/*+-".includes(op[i-1])){
                    op3 = op.slice(0, i).concat('*')
                    op4 = op.slice(i)
                    op = op3 + op4
                }
            }

        }        
        
        input.value = numero == '' ? eval(op) : eval(op+parseFloat(numero))
        op = ''
        numero = input.value
    }
    else if (valor == 'Escape' || valor == "C") {
        input.value = ''
        op = ''
        numero = ''
    }
  }
//Funcion de alto orden