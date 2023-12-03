/* Crear un nuevo archivo (app.js). En este, deberás importar el módulo creado
(collectibles.js). */
let importarFiguras = require('./collectibles');

/* Crear una variable por cada una de las marcas
importar) y pasarle como argumento cada una
coleccionables (hotToys - bandai - starWars). */

const hotToys = importarFiguras("Hot Toys");
const bandai = importarFiguras("Bandai");
const starWars = importarFiguras("Star Wars");

/* console.log(figurasHotToys); */
/* Crear un único array (uniﬁedCollectibles) con todas las listas de las marcas de
las ﬁguras coleccionables. Usa Spread Operator. */
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

/* console.log(unifiedCollectibles) */
/* Crear un objeto literal (collectibles) que tenga como primer atributo (ﬁguras) y
contenga la lista de todas  las ﬁguras  importadas. 
 Dentro del objeto literal, crea las funcionalidades solicitadas por el cliente:

b. Crear una funcionalidad (ﬁguresByBrand) que reciba por parámetro la
marca de la ﬁgura. Tendrá la responsabilidad de retornar todas aquellas
ﬁguras que correspondan a la marca recibida por parámetro. Deberíamos
utilizar el método ﬁlter.
c. Comprobar las funcionalidades usando el console.log() e invocando a cada
una de ellas pasando los referidos parámetros.*/
let collectiblesObj = {
    figuras: unifiedCollectibles,
    /* a. Desarrollar la funcionalidad (listFigures). Tendrá la responsabilidad de mostrar al usuario todos los datos de las diferentes ﬁguras almacenadas. Puedes utilizar los métodos forEach() o for…of(). */
    listFigures: function(){
        for(const figura of this.figuras){
            console.log(`ID: ${figura.id}, Marca: ${figura.marca}, Modelo: ${figura.nombre}, Precio: ${figura.precio}, Stock: ${figura.stock}`);
        }
    },
    figuresByBrand: function(marca){
        return this.figuras.filter((unaFigura) => unaFigura.marca === marca);
    }
};

// Ejecutar las funcionalidades y mostrar resultados
console.log('--- Todas las Figuras ---');
collectiblesObj.listFigures();

console.log('\n--- Figuras de Hot Toys ---');
const hotToysFigures = collectiblesObj.figuresByBrand('Hot Toys');
console.log(hotToysFigures);

console.log('\n--- Figuras de Bandai ---');
const bandaiFigures = collectiblesObj.figuresByBrand('Bandai');
console.log(bandaiFigures);

console.log('\n--- Figuras de Star Wars ---');
const starWarsFigures = collectiblesObj.figuresByBrand('Star Wars');
console.log(starWarsFigures);


// Intentar importar figuras con una marca no válida
const marcaNoValidaFiguras = importarFiguras("MarcaNoValida");

