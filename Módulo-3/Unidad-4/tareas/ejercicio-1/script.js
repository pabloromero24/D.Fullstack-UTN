const cuadrado1 = document.querySelector('.cuadrado-1');
const cuadrado2 = document.querySelector('.cuadrado-2');
const cuadrado3 = document.querySelector('.cuadrado-3');

cuadrado1.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightseagreen';
});

cuadrado2.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightcoral';
});

cuadrado3.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightgreen';
});
