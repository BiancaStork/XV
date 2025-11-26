// Función para mostrar el loader
function mostrarLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'flex';
    loader.style.opacity = '1';
  }
}

// Función para ocultar el loader con transición
function ocultarLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // Duración de la transición
  }
}

// Ocultar loader cuando todos los recursos hayan cargado al entrar
window.addEventListener('load', function () {
  ocultarLoader();
});

// Mostrar loader brevemente al hacer clic en "Ingresar"
document.getElementById('btnIngresar').addEventListener('click', function () {
  mostrarLoader();

  // Podés ajustar el tiempo visible según tu diseño (ej: 1.5 segundos)
  setTimeout(() => {
    ocultarLoader();
  }, 1500);
});

