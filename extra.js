const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [valorPosicion0, , valorPosicion2, , valorPosicion4, ...resto] = numeros;

console.log("Valor en la posición 0:", valorPosicion0);
console.log("Valor en la posición 2:", valorPosicion2);
console.log("Valor en la posición 4:", valorPosicion4);
console.log("Resto de los valores:", resto);

let mascota = {
    nombre: "Homero",
    tipo: "perro",
    color: "negro",
    raza: "Dachshund"
}

const {nombre, tipo, color, raza} = mascota;
console.log(`Hola, les presento a mi mascota. Su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);