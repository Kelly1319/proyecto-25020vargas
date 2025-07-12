document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const enlaces = document.querySelector(".enlaces");

  toggleBtn.addEventListener("click", () => {
    enlaces.classList.toggle("activo");
  });
});

  document.querySelectorAll('#enlaces a').forEach(link => {
    link.addEventListener('click', () => {
      enlaces.classList.remove('activo');
    });
  });
