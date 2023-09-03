
const distancia = parseInt(prompt('Ingrese la distancia que debe recorrer:', ''));

if (distancia <= 1000) {
    alert(`Te aconsejo recorrer tu distancia a pie`);
} else if (distancia <= 10000) {
    alert(`Te aconsejo recorrer tu distancia en bicicleta`);
} else if (distancia <= 30000) {
    alert(`Te aconsejo recorrer tu distancia en colectivo`);
} else if (distancia <= 100000) {
    alert(`Te aconsejo recorrer tu distancia en auto`);
} else {
    alert(`Te aconsejo recorrer tu distancia en avión`);
}
window.location.reload();
