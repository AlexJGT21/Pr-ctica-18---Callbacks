
//Ejercicio 1: Temporizador con Callback
function Temporizador(saludo, callback) {
    setTimeout(() => {
        console.log(`OPERACIÓN "${saludo}" FINALIZADA.`);
        callback();
    }, 3000);
}

Temporizador("Crear callback temporizado", () =>{
    console.log("Fin");
});

//Ejercicio 2: Operaciones Matemáticas

//Funciones flecha que realizan operaciones, actuan como las funciones callback que se invocan para poder realizar
//las operaciones correspondientes.
const suma = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => b === 0 ? "No se puede dividir entre 0": a/b;

function Operacion(x, y, callback) {
    return callback(x, y);
}

console.log(Operacion(5, 5, suma));

//Ejercicio 3: Preparación de una Receta (Secuencia Asíncrona)
//CALLBACK: que se ejecuta despues de cortarlos
function cortarIngredientes(ingredientes, callback) {
    setTimeout(() => {
        console.log(`Cortando ${ingredientes}`);
        callback();
    }, 2000);
}

function cocinar(accion, callback) {
        setTimeout(() => {
        console.log(`Cocinando ${accion}`);
        callback();
    }, 2500);
}

function servirPlato(plato) {
    console.log("Listo para servir: ", plato);
}

function prepararReceta(plato, callback) {
    console.log("INICIAMOS LA PREPARACIÓN DE LA RECETA: ", plato);

    cortarIngredientes("vegetales", ()=> {
        cocinar("Saltear", () => {
            cortarIngredientes("Pollo", () => {
                cocinar("Freir", () => {
                    cocinar("Mezclar", () => {
                        servirPlato(plato);
                        callback();
                    })
                })
            })
        })
    })
}

prepararReceta("Pollo al wok", () => {
    console.log("Receta completa.")
});
