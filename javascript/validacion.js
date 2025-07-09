const mostrarError = (input, mensaje) => {
    const divPadre = input.parentNode;
    const errorText = divPadre.querySelector('.error-text');
  divPadre.classList.add('error');
  errorText.innerText = mensaje;
}

const input = document.querySelector('#password');
const mensaje = 'campo obligatorio';
