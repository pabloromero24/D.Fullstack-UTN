

const container = document.querySelector('.container textarea');
const contador = document.querySelector('.contador');

container.addEventListener('input', contarCaracteres);

function contarCaracteres() {
  const caracteresEscritos = container.value.length;
  contador.textContent = caracteresEscritos;
}

actualizarContador();



