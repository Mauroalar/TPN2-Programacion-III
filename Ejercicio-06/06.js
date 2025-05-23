// Función auxiliar para seleccionar elementos por ID
function $(id) {
  return document.getElementById(id);
}

function validarForm() {
    let nombre = $("nombre").value.trim();
    let apellido = $("apellido").value.trim();
    let edad = Number($("edad").value.trim());
    let altura = Number($("altura").value.trim());
    let email = $("email").value.trim();

    let mensaje = $("mensaje");

    let errores = [];

    if (nombre === "") {
        errores.push("El nombre no puede estar vacío");
    } else if (nombre.length > 50) {
        errores.push("el nombre no debe superar los 50 caracteres")
    }
    if (apellido === "") {
        errores.push("El apellido no puede estar vacío");
    }
    if (isNaN(edad) || edad < 0) {
        errores.push("La edad no puede ser negativa y debe ser un número");
    } else if (edad < 18) {
        errores.push("La edad debe ser mayor o igual a 18");
    }
    if (isNaN(altura) || altura < 0) {
        errores.push("La altura no puede ser menor a 0");
    } else if (altura > 230) {
        errores.push("La estatura no puede superar los 230 cm");
    }
    if (email === "") {
        errores.push("El correo electrónico no puede estar vacío");
    }

    if (errores.length > 0) {
        mensaje.innerHTML = errores.join("<br>");
        mensaje.className = "invalid";
    } else {
        mensaje.innerHTML = "Todas las validaciones son correctas";
        mensaje.className = "Valid";
    }
}

// Asocia el evento submit para llamar a validarForm() y prevenir la recarga
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // evitar el envío por defecto
    validarForm(); // llamar a tu función de validación
});