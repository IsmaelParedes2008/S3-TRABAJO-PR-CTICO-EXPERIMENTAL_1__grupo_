// PSEUDOCODIGO
Algoritmo PrecioFinalCelular_Condicional
    // Entrada
    Leer marca  // Samsung, Apple, Xiaomi
    Leer capacidad  // 64 o 128 GB
    precioInicial ← 300
    precioFinal ← 0

    // Proceso
    Si marca = "Samsung" Y capacidad = 64 Entonces
        precioFinal ← precioInicial + 50
    Sino Si marca = "Samsung" Y capacidad = 128 Entonces
        precioFinal ← precioInicial + 80
    Sino Si marca = "Apple" Y capacidad = 64 Entonces
        precioFinal ← precioInicial + 100
    Sino Si marca = "Apple" Y capacidad = 128 Entonces
        precioFinal ← precioInicial + 150
    Sino Si marca = "Xiaomi" Y capacidad = 64 Entonces
        precioFinal ← precioInicial - 20
    Sino Si marca = "Xiaomi" Y capacidad = 128 Entonces
        precioFinal ← precioInicial - 10
    Sino
        Escribir "Datos ingresados incorrectos"
    FinSi

//JAVASCRIPT
// version condicional
function condicional() {

    // Precio inicial fijo
let precioInicial = 300;

let marca = prompt("Ingrese la marca del celular (Samsung, Apple, Xiaomi):").toLowerCase();
let capacidad = parseInt(prompt("Ingrese la capacidad del celular (64 o 128 GB):"));
let precioFinal = 0;

if (marca === "samsung" && capacidad === 64) {
    precioFinal = precioInicial + 50;
} else if (marca === "samsung" && capacidad === 128) {
    precioFinal = precioInicial + 80;
} else if (marca === "apple" && capacidad === 64) {
    precioFinal = precioInicial + 100;
} else if (marca === "apple" && capacidad === 128) {
    precioFinal = precioInicial + 150;
} else if (marca === "xiaomi" && capacidad === 64) {
    precioFinal = precioInicial - 20;
} else if (marca === "xiaomi" && capacidad === 128) {
    precioFinal = precioInicial - 10;
} else {
    console.log("Datos ingresados incorrectos");
}

console.log(`El precio final del celular es: $${precioFinal}`);
}
condicional()


//PSEUDOCODIGO EN VERSION REPETITIVA
Algoritmo PrecioFinalCelular_Repetitiva
    // Entrada
    Leer N  // Número de celulares a vender
    precioInicial ← 300

    Para i ← 1 Hasta N Hacer
        Leer marca
        Leer capacidad
        precioFinal ← precioInicial

        // Proceso
        Si marca = "Samsung" Y capacidad = 64 Entonces
            precioFinal ← precioFinal + 50
        Sino Si marca = "Samsung" Y capacidad = 128 Entonces
            precioFinal ← precioFinal + 80
        Sino Si marca = "Apple" Y capacidad = 64 Entonces
            precioFinal ← precioFinal + 100
        Sino Si marca = "Apple" Y capacidad = 128 Entonces
            precioFinal ← precioFinal + 150
        Sino Si marca = "Xiaomi" Y capacidad = 64 Entonces
            precioFinal ← precioFinal - 20
        Sino Si marca = "Xiaomi" Y capacidad = 128 Entonces
            precioFinal ← precioFinal - 10
        Sino
            Escribir "Datos incorrectos para el celular ", i
            Continuar // Saltar al siguiente ciclo
        FinSi

        // Salida
        Escribir "Celular ", i, ": Marca ", marca, ", Capacidad ", capacidad, "GB, Precio final $", precioFinal
    FinPara
FinAlgoritmo

//JAVASCRIPT
// version repetitiva
function repetitiva(){

    // precio fijo
let precioInicial = 300;

let N = parseInt(prompt("Ingrese el número de celulares a vender:"));
let marca = "";
let capacidad = 0;
let precioFinal = 0;

for (let i = 1; i <= N; i++) {
    marca = prompt(`Ingrese la marca del celular ${i} (Samsung, Apple, Xiaomi):`).toLowerCase();
    capacidad = parseInt(prompt(`Ingrese la capacidad del celular ${i} (64 o 128 GB):`));

    if (marca === "samsung" && capacidad === 64) {
        precioFinal = precioInicial + 50;
    } else if (marca === "samsung" && capacidad === 128) {
        precioFinal = precioInicial + 80;
    } else if (marca === "apple" && capacidad === 64) {
        precioFinal = precioInicial + 100;
    } else if (marca === "apple" && capacidad === 128) {
        precioFinal = precioInicial + 150;
    } else if (marca === "xiaomi" && capacidad === 64) {
        precioFinal = precioInicial - 20;
    } else if (marca === "xiaomi" && capacidad === 128) {
        precioFinal = precioInicial - 10;
    } else {
        console.log(`Datos incorrectos para el celular ${i}`);
        continue;
    }

    console.log(`Celular ${i}: Marca ${marca}, Capacidad ${capacidad}GB, Precio final $${precioFinal}`);
}
}
repetitiva()


//PSEUDOCODIGO EN ARREGLOS
Algoritmo PrecioFinalCelular_Arreglos
    // Entrada: arreglos de celulares [marca, capacidad]
    Definir celulares[6][2]
    celulares ← [
        ["Samsung", 64],
        ["Samsung", 128],
        ["Apple", 64],
        ["Apple", 128],
        ["Xiaomi", 64],
        ["Xiaomi", 128]
    ]
    precioInicial ← 300
    Definir precioFinal, marca, capacidad Como Real o Texto

    // Proceso
    Para c ← 0 Hasta 5 Hacer
        marca ← celulares[c][0]
        capacidad ← celulares[c][1]
        precioFinal ← precioInicial

        Si marca = "Samsung" Y capacidad = 64 Entonces
            precioFinal ← precioFinal + 50
        Sino Si marca = "Samsung" Y capacidad = 128 Entonces
            precioFinal ← precioFinal + 80
        Sino Si marca = "Apple" Y capacidad = 64 Entonces
            precioFinal ← precioFinal + 100
        Sino Si marca = "Apple" Y capacidad = 128 Entonces
            precioFinal ← precioFinal + 150
        Sino Si marca = "Xiaomi" Y capacidad = 64 Entonces
            precioFinal ← precioFinal - 20
        Sino Si marca = "Xiaomi" Y capacidad = 128 Entonces
            precioFinal ← precioFinal - 10
        FinSi

        // Salida
        Escribir "Celular ", c+1, ": Marca ", marca, ", Capacidad ", capacidad, "GB, Precio final $", precioFinal
    FinPara
FinAlgoritmo

//JAVASCRIPT
// version con arreglos
function arreglos(){

   // Entrada: declarar variables
    let marca = "", capacidad = 0, precioInicial = 300, precioFinal = 0, celular = [], c;
    let celulares = [
        ["samsung", 64],
        ["samsung", 128],
        ["apple", 64],
        ["apple", 128],
        ["xiaomi", 64],
        ["xiaomi", 128]
    ];

    for (c = 0; c < celulares.length; c++) {
        celular = celulares[c];
        marca = celular[0];
        capacidad = celular[1];
        precioFinal = precioInicial;

        // Proceso: aplicar reglas según marca y capacidad
        if (marca === "samsung" && capacidad === 64) {
            precioFinal += 50;
        } else if (marca === "samsung" && capacidad === 128) {
            precioFinal += 80;
        } else if (marca === "apple" && capacidad === 64) {
            precioFinal += 100;
        } else if (marca === "apple" && capacidad === 128) {
            precioFinal += 150;
        } else if (marca === "xiaomi" && capacidad === 64) {
            precioFinal -= 20;
        } else if (marca === "xiaomi" && capacidad === 128) {
            precioFinal -= 10;
        }

        // Salida
        alert(`Celular ${c+1}: Marca ${marca}, Capacidad ${capacidad}GB, Precio final $${precioFinal}`);
    }
}

