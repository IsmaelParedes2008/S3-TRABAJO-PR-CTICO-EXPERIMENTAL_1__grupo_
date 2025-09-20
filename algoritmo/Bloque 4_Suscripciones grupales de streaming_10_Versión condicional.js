//   usuarios=120 → costoTotal=120*5=600, costoPorUsuario=5
//   usuarios=80 → costoTotal=80*6=480, costoPorUsuario=6
//   usuarios=40 → costoTotal=40*8=320, costoPorUsuario=8
//   usuarios=20 → costoTotal=300, costoPorUsuario=300
//Entrada: leer(usuarios).
//Proceso: si usuarios >= 100 entonces costoTotal=usuarios*5
//   sino si usuarios >= 50 entonces costoTotal=usuarios*6
//   sino si usuarios >= 30 entonces costoTotal=usuarios*8
//   sino costoTotal=300
//   si usuarios >= 30 entonces costoPorUsuario=costoTotal/usuarios
//   sino costoPorUsuario=costoTotal
//Salida: "escribir costoTotal y costoPorUsuario"


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
