document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const enlaces = document.getElementById('enlaces');

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita cerrar por clic en el botón
    enlaces.classList.toggle('activo');
  });

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
