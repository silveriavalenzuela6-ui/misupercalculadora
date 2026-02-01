let pantalla = document.getElementById("pantalla");

function agregar(valor) {
    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = "";
}

function calcular() {
    try {
        let resultado = eval(pantalla.value);
        // HISTORIAL: Guardamos la operación en la consola (puedes verla con F12)
        console.log(`${pantalla.value} = ${resultado}`);
        pantalla.value = resultado;
    } catch (e) {
        pantalla.value = "Error";
        setTimeout(limpiar, 1000);
    }
}

// NUEVO: Juego de adivinar
function juegoAdivinar() {
    let secreto = Math.floor(Math.random() * 10) + 1;
    let intento = prompt("Adivina el número del 1 al 10:");
    if(parseInt(intento) === secreto) {
        alert("¡GANASTE! 🎉");
    } else {
        alert("Perdiste, era el " + secreto);
    }
}

button:active {
    transform: scale(0.9); /* Se hace chiquito al pulsar */
    background-color: #ffffff;
    color: #000;
}

/* Color aleatorio para el fondo si quieres */
.bg-gradient {
    background: linear-gradient(45deg, #1e3c72, #2a5298);
}