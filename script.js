
const inputPeso = document.getElementById("inpPes")
const inputAltura = document.getElementById("inpAlt")
const btnCalcular = document.getElementById("btnCalc")
const parrafoResultado = document.getElementById("res")
const parrafoDescripcion = document.getElementById("des")
const imagenIMC = document.getElementById("img")


function validar() {
    let peso = inputPeso.value.trim()
    let altura = inputAltura.value.trim()

    let imc = peso / (altura * altura)
    parrafoResultado.innerText = imc.toFixed(2)

    if (peso === "" || altura === "") {
        alert("Por favor, llena todos los campos")
        return
    }
    if (imc < 16) {
        parrafoDescripcion.innerText = ("Desnutricion severa")
        imagenIMC.src = "./imagenes/desnutricion.jpg"
    } else if (imc < 18.4) {
        parrafoDescripcion.innerText = ("Desnutricion moderada")
        imagenIMC.src = "./imagenes/desnutricion moderada.webp"
    } else if (imc < 22) {
        parrafoDescripcion.innerText = ("Bajo peso")
        imagenIMC.src = "./imagenes/bajo peso.jpg"
    } else if (imc < 24.9) {
        parrafoDescripcion.innerText = ("Peso normal")
        imagenIMC.src = "./imagenes/peso normal.webp"
    } else if (imc < 29.9) {
        parrafoDescripcion.innerText = ("Sobrepeso")
        imagenIMC.src = "./imagenes/sobrepeso.jpg"
    } else if (imc < 34.9) {
        parrafoDescripcion.innerText = ("Obesidad tipo I")
        imagenIMC.src = "./imagenes/obesidad tipo I.webp"
    } else if (imc < 39.9) {
        parrafoDescripcion.innerText = ("Obesidad tipo II")
        imagenIMC.src = "./imagenes/obesidad tipo II.png"
    } else if (imc > 40) {
        parrafoDescripcion.innerText = ("Obesidad tipo III")
        imagenIMC.src = "./imagenes/obesidad tipo III.webp"
    }
}

btnCalcular.addEventListener("click", validar)