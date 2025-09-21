// PSEUDOCODIGO
Algoritmo HermanoMayor_Condicional
    // Entrada
    Leer edad1
    Leer edad2
    Leer edad3

    // Proceso
    mayor ← edad1
    Si edad2 > mayor Entonces
        mayor ← edad2
    FinSi
    Si edad3 > mayor Entonces
        mayor ← edad3
    FinSi

    // Salida
    Escribir "El hermano mayor tiene ", mayor, " años."
FinAlgoritmo


//JAVASCRIPT
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
condicional()


// PSEUDOCODIGO EN VERSION REPETITIVA
Algoritmo HermanoMayor_Repetitiva
    // Entrada
    Leer N  // Cantidad de grupos de hermanos

    Para i ← 1 Hasta N Hacer
        Leer edad1
        Leer edad2
        Leer edad3

        // Proceso
        mayor ← edad1
        Si edad2 > mayor Entonces
            mayor ← edad2
        FinSi
        Si edad3 > mayor Entonces
            mayor ← edad3
        FinSi

        // Salida
        Escribir "El hermano mayor del grupo ", i, " tiene ", mayor, " años."
    FinPara
FinAlgoritmo


// JAVASCRIPT
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


 // PSEUDOCODIGO EN VERSION DE ARREGLOS
 Algoritmo HermanoMayor_Arreglos
    // Entrada: Definir arreglo de grupos de edades
    Definir edades[3][3] // 3 grupos de 3 hermanos
    edades[0] ← [30, 20, 10]
    edades[1] ← [20, 25, 10]
    edades[2] ← [1, 2, 3]

    // Proceso: recorrer cada grupo
    Para c ← 0 Hasta 2 Hacer
        edad1 ← edades[c][0]
        edad2 ← edades[c][1]
        edad3 ← edades[c][2]

        // Comparar las edades dentro del grupo
        Si edad1 > edad2 Y edad1 > edad3 Entonces
            mayor ← edad1
        Sino Si edad2 > edad1 Y edad2 > edad3 Entonces
            mayor ← edad2
        Sino
            mayor ← edad3
        FinSi

        // Salida: mostrar resultado por grupo
        Escribir "La mayor edad del grupo ", c+1, " es: ", mayor
    FinPara
FinAlgoritmo


// JAVASCRIPT
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



