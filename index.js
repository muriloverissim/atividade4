const button = document.querySelector("button")
const inputCodigo = document.getElementById("codigo")
const inputQuantidade = document.getElementById("quantidade")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularValor)

function calcularValor() {
    const codigo = inputCodigo.valueAsNumber
    const quantidade = inputQuantidade.valueAsNumber

    if (!inputCodigo.value || !inputQuantidade.value) {
        alert("Digite um valor válido.")
        return
    }

    let preco = 0

    if (codigo === 1) {
        preco = 5.00
    } else if (codigo === 2) {
        preco = 3.50
    } else if (codigo === 3) {
        preco = 4.80
    } else if (codigo === 4) {
        preco = 8.90
    } else if (codigo === 5) {
        preco = 7.32
    } else {
        alert("Código inválido! Digite um número de 1 a 5.")
        return
    }

    const valorPago = preco * quantidade

    paragrafoResultado.textContent = `Valor a pagar: R$ ${valorPago.toFixed(2)}`
}