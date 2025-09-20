//   edad1=30, edad2=20, edad3=10
//   edad1=20, edad2=30, edad3=10
//   edad1=10, edad2=20, edad3=30
//Entrada: leer(edad1), leer(edad2), leer(edad3).
//Proceso: si edad1 > edad2 y edad1 > edad3 entonces escribir edad1
//         sino si edad2 > edad1 y edad2 > edad3 entonces escribir edad2
//         sino escribir edad3
//Salida: "escribir la edad mayor"

// VERSION CONDICIONAL
function condicional(){
let edad1 = parseInt(prompt("Ingrese la edad del primer hermano:"));
let edad2 = parseInt(prompt("Ingrese la edad del segundo hermano:"));
let edad3 = parseInt(prompt("Ingrese la edad del tercer hermano:"));

let mayor = 0;

if (edad1 >= edad2 && edad1 >= edad3) {
    mayor = edad1;
} else if (edad2 >= edad1 && edad2 >= edad3) {
    mayor = edad2;
} else {
    mayor = edad3;
}
console.log(`El hermano mayor tiene ${mayor} años.`);
}
CONDICIONAL()

// version repetitiva
function repetitiva(){
let N = parseInt(prompt("Ingrese la cantidad de grupos de hermanos:"));
let edad1, edad2, edad3;
let mayor;

for (let i = 1; i <= N; i++) {
    console.log(`--- Grupo ${i} ---`);
    edad1 = parseInt(prompt("Ingrese la edad del primer hermano:"));
    edad2 = parseInt(prompt("Ingrese la edad del segundo hermano:"));
    edad3 = parseInt(prompt("Ingrese la edad del tercer hermano:"));

    // Determinar el mayor
    if (edad1 >= edad2 && edad1 >= edad3) {
        mayor = edad1;
    } else if (edad2 >= edad1 && edad2 >= edad3) {
        mayor = edad2;
    } else {
        mayor = edad3;
    }

    console.log(`El hermano mayor del grupo ${i} tiene ${mayor} años.`);
}
 }
 repetitiva()

// version con arreglos
function arreglos(){
    // Entrada: declarar variables
    let eda1 = 0, eda2 = 0, eda3 = 0, edad = [], c;
    let edades = [[30, 20, 10], [20, 25, 10], [1, 2, 3]];
    //              0              1             2

    for (c = 0; c < edades.length; c++) {
        edad = edades[c];
        eda1 = edad[0];
        eda2 = edad[1];
        eda3 = edad[2];

        // Proceso: comparar las edades
        if (eda1 > eda2 && eda1 > eda3) {
            alert("La mayor edad es: " + eda1);
        } else if (eda2 > eda1 && eda2 > eda3) {
            alert("La mayor edad es: " + eda2);
        } else {
            alert(`La mayor edad es: ${eda3}`);
        }
    }
}
arreglos()
