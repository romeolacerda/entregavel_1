///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let Calculadora = function(num1, num2, operador){
  let resultado
  number1 = Number(num1)
  number2 = Number(num2)

  if(operador = "+") resultado = number1 + number2
  else if(operador = "-") resultado = number1 - number2
  else if(operador = "*") resultado = number1 * number2
  else if(operador = "/") resultado = number1 / number2
  else if(operador = "e"){ resultado = Math.pow(num1, num2)
    // let contador = 1
    // resultado = num1 * num1
    // while(contador < num2 - 1 ){
    //   resultado = resultado * num1
    //   contador ++ 
    // }
  }

  if (resultado == undefined || resultado > 1000000) return("ERRO")

  
  return resultado
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}