// 1. Al cargar la app, mostramos lo que ya esté guardado
document.addEventListener('DOMContentLoaded', mostrarTareas);

function agregar() {
    let input = document.getElementById("tarea");
    let nuevaTarea = input.value;
    
    if (nuevaTarea !== "") {
        // Guardar en la "memoria" del navegador
        guardarTareaLocal(nuevaTarea);
        
        // Crear el elemento visualmente
        crearElementoLista(nuevaTarea);
        
        input.value = ""; 
    }
}

function crearElementoLista(texto) {
    let li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("lista").appendChild(li);
}

// 2. Esta función guarda la tarea en una lista de texto
function guardarTareaLocal(tarea) {
    let tareas;
    if (localStorage.getItem("tareas") === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem("tareas"));
    }
    
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

// 3. Esta función lee la memoria y la dibuja en pantalla
function mostrarTareas() {
    let tareas;
    if (localStorage.getItem("tareas") === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem("tareas"));
    }
    
    tareas.forEach(function(tarea) {
        crearElementoLista(tarea);
    });
}