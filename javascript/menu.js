document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const enlaces = document.querySelector('.enlaces');

  toggle.addEventListener('click', () => {
    enlaces.classList.toggle('activo');
  });

  // Cerrar menú al hacer clic en un enlace
  enlaces.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      enlaces.classList.remove('activo');
    });
  });

  document.addEventListener('click', (e) => {
    if (!enlaces.contains(e.target) && !menuToggle.contains(e.target)) {
      enlaces.classList.remove('activo');
    }
  });
});
