function startCountdownLocal(eventDateStr, countdownElementId) {
  // Interpretar fecha/hora como hora local del usuario
  const [fecha, hora] = eventDateStr.split('T');
  const [anio, mes, dia] = fecha.split('-').map(Number);
  const [horas, minutos, segundos] = hora.split(':').map(Number);
  const eventDate = new Date(anio, mes - 1, dia, horas, minutos || 0, segundos || 0);

  const countdown = document.getElementById(countdownElementId);

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdown.innerHTML = `<div class="countdown-title">La GRAN Fiesta de LUZ ES HOY!</div>`;
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
      <div class="countdown-title">Cuánto FALTA?</div>
      <div class="countdown-cards-container">
        <div class="countdown-card"><span>${pad(days)}</span><div class="label">Días</div></div>
        <div class="countdown-card"><span>${pad(hours)}</span><div class="label">Hs</div></div>
        <div class="countdown-card"><span>${pad(minutes)}</span><div class="label">Min</div></div>
        <div class="countdown-card"><span>${pad(seconds)}</span><div class="label">Seg</div></div>
      </div>`;
  }

  updateCountdown();
  const intervalId = setInterval(updateCountdown, 1000);
}

// Ejemplo — el usuario ve 20:30 de su hora local
startCountdownLocal('2026-01-16T20:30:00', 'countdown');
