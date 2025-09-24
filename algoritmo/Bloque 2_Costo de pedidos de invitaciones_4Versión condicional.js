// pseudocodigo
Algoritmo CostoPedido_Condicional
    // Entrada
 definir cantidad, costototal, costounitario como real
  escribir"ingrese la cantidad de tarjetas"
Leer cantidad

    // Proceso
    Si cantidad <= 200 Entonces
        costoUnitario ← 2.00
    Sino Si cantidad >= 201 Y cantidad <= 300 Entonces
        costoUnitario ← 1.80
    Sino
        costoUnitario ← 1.50
    FinSi

    costoTotal ← cantidad * costoUnitario

    // Salida
    Escribir "El costo total del pedido es: $", costoTotal
FinAlgoritmo

//JAVASCRIPT
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

// PSEUDOODIGO EN VERSION REPPETITIVA
Algoritmo CostoPedido_Repetitiva
    // Entrada
     definir cantidad, costototal, costounitario, N como real
escribir"ingrese la cantidad de pedidos"
Leer N  // Cantidad de pedidos

Para i ← 1 Hasta N Hacer
escribir "ingrese la cantidad de tarjetas"
 Leer cantidad

        // Proceso
        Si cantidad <= 200 Entonces
            costoUnitario ← 2.00
        Sino Si cantidad >= 201 Y cantidad <= 300 Entonces
            costoUnitario ← 1.80
        Sino
            costoUnitario ← 1.50
        FinSi

        costoTotal ← cantidad * costoUnitario

        // Salida
        Escribir "El costo total del pedido ", i, " es: $", costoTotal
    FinPara
FinAlgoritmo

//JAVASCRIPT
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

// PSEUDOCODIGO EN ARREGLOS
Algoritmo CostoPedido_Arreglos
    // Entrada: definir arreglo de pedidos
    Definir pedidos[3]
    pedidos ← [150, 250, 400]
    Definir cantidad, costoUnitario, costoTotal Como Real

    // Proceso: recorrer cada pedido
    Para c ← 0 Hasta 2 Hacer
        cantidad ← pedidos[c]

        // Aplicar reglas de precio
        Si cantidad <= 200 Entonces
            costoUnitario ← 2.00
        Sino Si cantidad >= 201 Y cantidad <= 300 Entonces
            costoUnitario ← 1.80
        Sino
            costoUnitario ← 1.50
        FinSi

        costoTotal ← cantidad * costoUnitario

        // Salida
        Escribir "Pedido ", c+1, ": Cantidad ", cantidad, ", Costo total $", costoTotal
    FinPara
FinAlgoritmo

//JAVASCRIPT
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
    } else if (cantidad >= 201 && cantidad <= 300) {
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






