//pseudocodigo
Algoritmo PrecioFinalCelular_Condicional
    // Entrada
    Leer marca  // Samsung, Xiaomi
    Leer capacidad  // 64 o 128 GB
    precioInicial ← 300
    precioFinal ← 0

    // Proceso
    Si marca = "Samsung" Y capacidad = 64 Entonces
        precioFinal ← precioInicial + 20
    Sino Si marca = "Samsung" Y capacidad = 128 Entonces
        precioFinal ← precioInicial + 30
    Sino Si marca = "Xiaomi" Y capacidad = 64 Entonces
        precioFinal ← precioInicial  - 30
    Sino Si marca = "Xiaomi" Y capacidad = 128 Entonces
        precioFinal ← precioInicial - 50
    Sino
        Escribir "Datos ingresados incorrectos"
    FinSi
// Salida
    Escribir "El precio final del celular es: $", precioFinal
FinAlgoritmo

//JAVASCRIPT
// version condicional
function condicional() {

    // Precio inicial fijo
let precioInicial = 300;

let marca = prompt("Ingrese la marca del celular (Samsung, Xiaomi):").toLowerCase();
let capacidad = parseInt(prompt("Ingrese la capacidad del celular (64 o 128 GB):"));
let precioFinal = 0;

if (marca === "samsung" && capacidad === 64) {
    precioFinal = precioInicial + 20;
} else if (marca === "samsung" && capacidad === 128) {
    precioFinal = precioInicial + 30;
} else if (marca === "xiaomi" && capacidad === 64) {
    precioFinal = precioInicial - 30;
} else if (marca === "xiaomi" && capacidad === 128) {
    precioFinal = precioInicial - 50;
} else {
    console.log("Datos ingresados incorrectos");
}
console.log( ` El precio final del celular es: $${precioFinal}`);
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
            precioFinal ← precioFinal + 20
        Sino Si marca = "Samsung" Y capacidad = 128 Entonces
            precioFinal ← precioFinal + 30
        Sino Si marca = "Xiaomi" Y capacidad = 64 Entonces
            precioFinal ← precioFinal - 30
        Sino Si marca = "Xiaomi" Y capacidad = 128 Entonces
            precioFinal ← precioFinal - 50
        Sino
            Escribir "Datos incorrectos para el celular ", i
         FinSi

        // Salida
        Escribir "Celular ", i, ": Marca ", marca, ", Capacidad ", capacidad, "GB, Precio final $", precioFinal
    FinPara
FinAlgoritmo

//JAVASCRIPT
//version repetitiva
function repetitiva() {
    // precio fijo
    let precioInicial = 300;

    let N = parseInt(prompt("Ingrese el número de celulares a vender:"));
    let marca = "";
    let capacidad = 0;
    let precioFinal = 0;

    for (let i = 1; i <= N; i++) {
        marca = prompt(` Ingrese la marca del celular ${i} (Samsung, Xiaomi):`).toLowerCase();
        capacidad = parseInt(prompt(` Ingrese la capacidad del celular ${i} (64 o 128 GB):`));

        if (marca === "samsung" && capacidad === 64) {
            precioFinal = precioInicial + 20;
        } else if (marca === "samsung" && capacidad === 128) {
            precioFinal = precioInicial + 30;
        } else if (marca === "xiaomi" && capacidad === 64) {
            precioFinal = precioInicial - 30;
        } else if (marca === "xiaomi" && capacidad === 128) {
            precioFinal = precioInicial - 50;
        } else {
            console.log(` Datos incorrectos para el celular ${i}`);
        }

        console.log(` Celular ${i}: Marca ${marca}, Capacidad ${capacidad}GB, Precio final $${precioFinal} `);
    }
}
repetitiva();


//PSEUDOCODIGO EN ARREGLOS
Algoritmo PrecioFinalCelular_Arreglos
    // Entrada: arreglos de celulares [marca, capacidad]
    Definir celulares[4][2]
    celulares ← [
        ["Samsung", 64],
        ["Samsung", 128],
        ["Xiaomi", 64],
        ["Xiaomi", 128]
    ]
    precioInicial ← 300
    Definir precioFinal, marca, capacidad Como Real o Texto

    // Proceso
    Para c ← 0 Hasta 3 Hacer
        marca ← celulares[c][0]
        capacidad ← celulares[c][1]
        precioFinal ← precioInicial

        Si marca = "Samsung" Y capacidad = 64 Entonces
            precioFinal ← precioFinal + 20
        Sino Si marca = "Samsung" Y capacidad = 128 Entonces
            precioFinal ← precioFinal + 30
        Sino Si marca = "Xiaomi" Y capacidad = 64 Entonces
            precioFinal ← precioFinal - 30
        Sino Si marca = "Xiaomi" Y capacidad = 128 Entonces
            precioFinal ← precioFinal - 50
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
            precioFinal += 20;
        } else if (marca === "samsung" && capacidad === 128) {
            precioFinal += 30;
        } else if (marca === "xiaomi" && capacidad === 64) {
            precioFinal -= 30;
        } else if (marca === "xiaomi" && capacidad === 128) {
            precioFinal -= 50;
        }

        // Salida
        alert(` Celular ${c+1}: Marca ${marca}, Capacidad ${capacidad}GB, Precio final $${precioFinal}`);
    }
}
arreglos()
