//PSEUDOCODIGO
Algoritmo CostoGrupo_Condicional
    // Entrada
    Leer usuarios
    costoTotal ← 0
    costoPorUsuario ← 0

    // Proceso
    Si usuarios >= 100 Entonces
        costoTotal ← usuarios * 5
    Sino Si usuarios >= 50 Y usuarios <= 99 Entonces
        costoTotal ← usuarios * 6
    Sino Si usuarios >= 30 Y usuarios <= 49 Entonces
        costoTotal ← usuarios * 8
    Sino
        costoTotal ← 300
    FinSi

    Si usuarios >= 30 Entonces
        costoPorUsuario ← costoTotal / usuarios
    Sino
        costoPorUsuario ← costoTotal
    FinSi

    // Salida
    Escribir "Costo total del grupo: $", costoTotal
    Escribir "Costo por usuario: $", costoPorUsuario
FinAlgoritmo

//JAVASCRIPT
// version condicional
function condicional(){

// declararcion de variables
let usuarios = parseInt(prompt("Ingrese el número de usuarios del grupo:"));
let costoTotal = 0;
let costoPorUsuario = 0;

if (usuarios >= 100) {
    costoTotal = usuarios * 5;
} else if (usuarios >= 50 && usuarios <= 99) {
    costoTotal = usuarios * 6;
} else if (usuarios >= 30 && usuarios <= 49) {
    costoTotal = usuarios * 8;
} else {
    costoTotal = 300; // costo fijo para menos de 30 usuarios
}

costoPorUsuario = usuarios >= 30 ? costoTotal / usuarios : costoTotal;

console.log(`Costo total del grupo: $${costoTotal.toFixed(2)}`);
console.log(`Costo por usuario: $${costoPorUsuario.toFixed(2)}`);
}
condicional()


//PSEUDOCODIGO EN VERSION REPETITIVA
Algoritmo CostoGrupo_Repetitiva
    // Entrada
    Leer N  // Cantidad de grupos
    Definir usuarios, costoTotal, costoPorUsuario Como Real

    Para i ← 1 Hasta N Hacer
        Leer usuarios

        // Proceso
        Si usuarios >= 100 Entonces
            costoTotal ← usuarios * 5
        Sino Si usuarios >= 50 Y usuarios <= 99 Entonces
            costoTotal ← usuarios * 6
        Sino Si usuarios >= 30 Y usuarios <= 49 Entonces
            costoTotal ← usuarios * 8
        Sino
            costoTotal ← 300
        FinSi

        Si usuarios >= 30 Entonces
            costoPorUsuario ← costoTotal / usuarios
        Sino
            costoPorUsuario ← costoTotal
        FinSi

        // Salida
        Escribir "Grupo ", i, ": Costo total $", costoTotal, ", Costo por usuario $", costoPorUsuario
    FinPara
FinAlgoritmo

//JAVASCRIPT
// version repetitiva
function repetitiva(){

let N = parseInt(prompt("Ingrese la cantidad de grupos:"));
let usuarios, costoTotal, costoPorUsuario;

for (let i = 1; i <= N; i++) {
    usuarios = parseInt(prompt(`Ingrese el número de usuarios del grupo ${i}:`));

    if (usuarios >= 100) {
        costoTotal = usuarios * 5;
    } else if (usuarios >= 50 && usuarios <= 99) {
        costoTotal = usuarios * 6;
    } else if (usuarios >= 30 && usuarios <= 49) {
        costoTotal = usuarios * 8;
    } else {
        costoTotal = 300; 
    }

    costoPorUsuario = usuarios >= 30 ? costoTotal / usuarios : costoTotal;

    console.log(`Grupo ${i}: Costo total $${costoTotal.toFixed(2)}, Costo por usuario $${costoPorUsuario.toFixed(2)}`);
}
}
repetitiva()


//PSEUDOCODIGO EN ARREGLOS
Algoritmo CostoGrupo_Arreglos
    // Entrada: arreglo de grupos
    Definir grupos[4]  // Cantidad de usuarios en cada grupo
    grupos ← [120, 80, 40, 20]
    Definir usuarios, costoTotal, costoPorUsuario Como Real

    // Proceso: recorrer cada grupo
    Para c ← 0 Hasta 3 Hacer
        usuarios ← grupos[c]

        // Aplicar reglas
        Si usuarios >= 100 Entonces
            costoTotal ← usuarios * 5
        Sino Si usuarios >= 50 Entonces
            costoTotal ← usuarios * 6
        Sino Si usuarios >= 30 Entonces
            costoTotal ← usuarios * 8
        Sino
            costoTotal ← 300
        FinSi

        Si usuarios >= 30 Entonces
            costoPorUsuario ← costoTotal / usuarios
        Sino
            costoPorUsuario ← costoTotal
        FinSi

        // Salida
        Escribir "Grupo ", c+1, ": Usuarios ", usuarios, ", Costo total $", costoTotal, ", Costo por usuario $", costoPorUsuario
    FinPara
FinAlgoritmo

//JAVASCRIPT
// version con arreglos
function arreglos(){
    
    // Entrada: declarar variables
    let usuarios = 0, costoTotal = 0, costoPorUsuario = 0, grupo = [], c;
    let grupos = [120, 80, 40, 20]; 
    
    // número de usuarios en varios grupos
    for (c = 0; c < grupos.length; c++) {
        usuarios = grupos[c];

        // Proceso: aplicar reglas
        if (usuarios >= 100) {
            costoTotal = usuarios * 5;
        } else if (usuarios >= 50) {
            costoTotal = usuarios * 6;
        } else if (usuarios >= 30) {
            costoTotal = usuarios * 8;
        } else {
            costoTotal = 300;
        }

        costoPorUsuario = usuarios >= 30 ? costoTotal / usuarios : costoTotal;

        // Salida
        alert(`Grupo ${c+1}: Usuarios ${usuarios}, Costo total $${costoTotal}, Costo por usuario $${costoPorUsuario.toFixed(2)}`);
    }
}
arreglos()

