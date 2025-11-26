document.addEventListener("DOMContentLoaded", function() {
  // === MODAL IGLESIA ===
  document.getElementById("openModal").onclick = function () {
    document.getElementById("modalUbicacion").style.display = "block";
  };
  document.getElementById("closeModal").onclick = function () {
    document.getElementById("modalUbicacion").style.display = "none";
  };
  document.getElementById("closeModalFooter").onclick = function () {
    document.getElementById("modalUbicacion").style.display = "none";
  };
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("modalUbicacion")) {
      document.getElementById("modalUbicacion").style.display = "none";
    }
  });

  // === MODAL FIESTA ===
  document.getElementById("openModalFiesta").onclick = function () {
    document.getElementById("modalUbicacionFiesta").style.display = "block";
  };
  document.getElementById("closeModalFiesta").onclick = function () {
    document.getElementById("modalUbicacionFiesta").style.display = "none";
  };
  document.getElementById("closeModalFooterFiesta").onclick = function () {
    document.getElementById("modalUbicacionFiesta").style.display = "none";
  };
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("modalUbicacionFiesta")) {
      document.getElementById("modalUbicacionFiesta").style.display = "none";
    }
  });

  // === MODAL GOOGLE CALENDAR ===
  const linkIglesia = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ceremonia+Reigisa+Boda+Maria+y+Pedro&dates=20250927T200000/20250928T060000&details=Iglesia+Boda+Maria+y+Pedro";
  const linkFiesta = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Fiesta+Egresados+Los+Lapachos&dates=20241221T210000/20241221T230000&details=Fiesta+Egresados+Los+Lapachos";

  document.getElementById("openModalGoogleCalendarIglesia").onclick = function () {
    document.getElementById("modalTitle").innerHTML = "Ceremonia Religiosa ";
    document.getElementById("modalDescription").innerHTML= "Dia: 27 Septiembre <br>Hora: 20:00 hs <br>Lugar: Parroquia Ntra Sra de Carmen ";
    document.getElementById("googleCalendarLink").href = linkIglesia;
    document.getElementById("modalGoogleCalendar").style.display = "block"; // o el método que uses para mostrar el modal
};

document.getElementById("openModalGoogleCalendarFiesta").onclick = function () {
    document.getElementById("modalTitle").innerHTML = "Fiesta Boda <br> Maria&Pedro";
    document.getElementById("modalDescription").innerHTML = "Dia: 27 de Septiembre <br>Hora: 22:00 hs <br>Lugar: ELITE Salon de Eventos";
    document.getElementById("googleCalendarLink").href = linkFiesta;
    document.getElementById("modalGoogleCalendar").style.display = "block";
};

  document.getElementById("closeModalGoogleCalendar").onclick = function () {
    document.getElementById("modalGoogleCalendar").style.display = "none";
  };
  document.getElementById("closeModalFooterGoogleCalendar").onclick = function () {
    document.getElementById("modalGoogleCalendar").style.display = "none";
  };
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("modalGoogleCalendar")) {
      document.getElementById("modalGoogleCalendar").style.display = "none";
    }
  });
});
