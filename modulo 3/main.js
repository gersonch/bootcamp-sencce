let input = document.getElementById('input')
input.textContent = 0

let decimalAdded = false
let currentValue = '0'
let previousValue = null
let operator = null


function agregarNumero(x){
    
    if(input.textContent === '0' && input.textContent !== '.'){
        input.textContent = x
    } else {
        input.textContent += x;
    }

    currentValue = input.textContent

    if (x === '.'){
        decimalAdded = true
    }
}


function agregarPunto(){
    if (!decimalAdded) {
        input.textContent += '.'
        decimalAdded = true
    }
}

function almacenar(){
    if(previousValue == null){
        previousValue = currentValue
    }
}

function borrar(){
    document.getElementById("input").textContent = 0;
    decimalAdded = false
}