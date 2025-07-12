document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const enlaces = document.getElementById('enlaces');

  
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); 
    enlaces.classList.toggle('activo');
  });

  
  document.querySelectorAll('#enlaces a').forEach(link => {
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
