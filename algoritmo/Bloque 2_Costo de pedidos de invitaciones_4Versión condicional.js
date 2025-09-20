//   cantidad=150 → costo 150*2 = 300
//   cantidad=250 → costo 250*1.80 = 450
//   cantidad=400 → costo 400*1.50 = 600
//Entrada: leer(cantidad).
//Proceso: si cantidad <= 200 entonces costoUnitario=2.00
//         sino si cantidad <= 300 entonces costoUnitario=1.80
//         sino costoUnitario=1.50
//         costoTotal = cantidad * costoUnitario
//Salida: "escribir el costo total"

//version condicional
function condicional() {
let cantidad = parseInt(prompt("Ingrese la cantidad de tarjetas:"));
let costoUnitario = 0;
let costoTotal = 0;

if (cantidad <= 200) {
    costoUnitario = 2.00;
} else if (cantidad >= 201 && cantidad <= 300) {
    costoUnitario = 1.80;
} else {
    costoUnitario = 1.50;
}

costoTotal = cantidad * costoUnitario;

console.log(`El costo total del pedido es $${costoTotal.toFixed(2)}`);
}
condicional()

// version repetitiva
function repetitiva() {
let N = parseInt(prompt("Ingrese la cantidad de pedidos:"));
let cantidad;
let costoUnitario;
let costoTotal;

for (let i = 1; i <= N; i++) {
    cantidad = parseInt(prompt(`Ingrese la cantidad de tarjetas del pedido ${i}:`));

    if (cantidad <= 200) {
        costoUnitario = 2.00;
    } else if (cantidad >= 201 && cantidad <= 300) {
        costoUnitario = 1.80;
    } else {
        costoUnitario = 1.50;
    }

    costoTotal = cantidad * costoUnitario;

    console.log(`El costo total del pedido ${i} es $${costoTotal.toFixed(2)}`);
}
}
repetitiva()

// version con arreglos
function arreglos() {
 // Entrada: declarar variables
 let cantidad = 0, costoUnitario = 0, costoTotal = 0, pedido = [], c;
 let pedidos = [150, 250, 400]; 
 // cantidades de tarjetas de varios pedidos

for (c = 0; c < pedidos.length; c++) {
        cantidad = pedidos[c];

     // Proceso: aplicar reglas de precio
     if (cantidad <= 200) {
            costoUnitario = 2.00;
     } else if (cantidad <= 300) {
            costoUnitario = 1.80;
     } else {
            costoUnitario = 1.50;
     }
  costoTotal = cantidad * costoUnitario;
        // Salida
     alert(`Pedido ${c+1}: Cantidad ${cantidad}, Costo total $${costoTotal.toFixed(2)}`);
    }
}
arreglos()
