const input = document.getElementById('input')
const resultado = document.getElementById('resultado')

console.log(input.value)

let texto = 'numero es: '

function eval(valor){
    if (valor >= 0) {
        resultado.textContent = texto + 'positivo'
    } else {
        resultado.textContent = texto + 'negativo'
    }
}
