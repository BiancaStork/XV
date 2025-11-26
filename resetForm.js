function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("asiste").checked = true;
    document.getElementById("noAsiste").checked = false;
    document.getElementById("campoacompanantes").style.display = "block";
}

function mostrarMensajeConfirmacion() {
    const mensaje = document.getElementById("mensaje-confirmacion");
    mensaje.style.display = "block";

    // Ocultar automáticamente después de 3 segundos
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 3000);
}
