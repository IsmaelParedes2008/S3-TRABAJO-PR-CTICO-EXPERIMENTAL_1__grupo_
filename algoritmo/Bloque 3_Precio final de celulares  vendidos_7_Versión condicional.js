//   marca="samsung", capacidad=64 → precioFinal = precioInicial + 50
//   marca="samsung", capacidad=128 → precioFinal = precioInicial + 80
//   marca="apple", capacidad=64 → precioFinal = precioInicial + 100
//   marca="apple", capacidad=128 → precioFinal = precioInicial + 150
//   marca="xiaomi", capacidad=64 → precioFinal = precioInicial - 20
//   marca="xiaomi", capacidad=128 → precioFinal = precioInicial - 10
//Entrada: leer(marca), leer(capacidad), precioInicial fijo=300.
//Proceso: si marca="samsung" y capacidad=64 entonces precioFinal=precioInicial+50
//         sino si marca="samsung" y capacidad=128 entonces precioFinal=precioInicial+80
//         sino si marca="apple" y capacidad=64 entonces precioFinal=precioInicial+100
//         sino si marca="apple" y capacidad=128 entonces precioFinal=precioInicial+150
//         sino si marca="xiaomi" y capacidad=64 entonces precioFinal=precioInicial-20
//         sino si marca="xiaomi" y capacidad=128 entonces precioFinal=precioInicial-10
//Salida: "escribir el precio final"

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
arreglos()
