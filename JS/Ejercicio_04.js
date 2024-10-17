//Repaso de Arreglos


//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,191,26,1) 33%, rgba(255,129,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`


//Personalizacion de salida de consola
console.warn("Practica 06: Repaso de Arreglos en Java Script");

//DECLARACIÓN DE UN ARREGLO
//Para declarar un arreglo (Array) de datos en JavaScript basta con agregar [], y dentro los datos que contendra el arreglo.

const mesesAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Noviembre","Diciembre"]

console.log("%c1.- Declaración de un Areglo (Array)",  style_console);

console.log(mesesAnio);
console.table(mesesAnio);

//Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites establecidos. Siendo el limite inferiror 0 y el superior tamaño -1.

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es ${mesesAnio[0]}`);
console.log(`El último mes del año es ${mesesAnio[mesesAnio.length-1]}`);
//No se puede acceder a elementos con posiciones negativas o posiciones superiores al tamaño definido

console.log(`El primer mes del año de la posición -1 es: ${mesesAnio[-1]}`)

console.log(`El treceavo mes del año de la posición  es: ${mesesAnio[12]}`)

console.log(`¿Qué tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)

//Al ser JavaScript un lenguaje débilmente tipados podremos crear arreglos mixtos de tipos de Datos
console.log("declarando un Arreglo Mixto")
const saludar = function(nombre){return `Hola. ${nombre}!`}

let arregloMixto = ["String",5,45.26,-200,-.16854, Symbol ("MARH"), 'z', false, BigInt(1111222233334444555566667777), true, {latitud: "20° 18' 0\" N",longitud: "97° 58' 00\" W", altitud: 796}, saludar, null]

//Mostramos el contenido del objeto
console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")

console.log(`El dato en la posición[0] = ${arregloMixto[0]} y es del tipo: ${typeof(arregloMixto[0])}`);
console.log(`El dato en la posición[1] = ${arregloMixto[1]} y es del tipo: ${typeof(arregloMixto[1])}`);
console.log(`El dato en la posición[2] = ${arregloMixto[2]} y es del tipo: ${typeof(arregloMixto[2])}`);
console.log(`El dato en la posición[3] = ${arregloMixto[0]} y es del tipo: ${typeof(arregloMixto[3])}`),
console.log(`El dato en la posición[4] = ${arregloMixto[4]} y es del tipo: ${typeof(arregloMixto[4])}`);
console.log(`El dato en la posición[5] = ${arregloMixto[5].toString} y es del tipo: ${typeof(arregloMixto[5])}`);
console.log(`El dato en la posición[6] = ${arregloMixto[6]} y es del tipo: ${typeof(arregloMixto[6])}`);
console.log(`El dato en la posición[7] = ${arregloMixto[7]} y es del tipo: ${typeof(arregloMixto[7])}`);
console.log(`El dato en la posición[8] = ${arregloMixto[8]} y es del tipo: ${typeof(arregloMixto[8])}`);
console.log(`El dato en la posición[9] = ${arregloMixto[9]} y es del tipo: ${typeof(arregloMixto[9])}`);
console.log(`El dato en la posición[10] = ${arregloMixto[10]} y es del tipo: ${typeof(arregloMixto[10])}`);
console.log(`El dato en la posición[11] = ${arregloMixto[11]} y es del tipo: ${typeof(arregloMixto[11])}`);
console.log(`El dato en la posición[12] = ${arregloMixto[12]} y es del tipo: ${typeof(arregloMixto[12])}`);

console.log("%c3.- Arreglos Multidimencionales (Matrices)", style_console);

//Una matriz es una estructura de datos multidimensional (Tabla) de n columnas o m filas

let matriz = [[1,2,3,4],['a','b','c','d']]
//Esta es una matríz regular de 4x4

console.log(matriz)
console.table(matriz)

console.log("Declaramos una matríz irregular.")

const matrizIrregualar = [["Ángel","Adrián","Karen", "Abril"], [true,false,null],[9.2]]

console.log(matrizIrregualar)
console.table(matrizIrregualar)

//Accediendo a los valores de una matríz

console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elementos en la posición [0][0]: ${matriz[0][0]}`)
console.log(`Elementos en la posición [1][2]: ${matriz[1][2]}`)

//Accediendo a los valores de una matríz Irregular
console.log("Leyendo las Propiedades de una Matriz Irregular")
console.log(`Elementos en la posición [0][0]: ${matrizIrregualar[0][0]}`)
console.log(`Elementos en la posición [2][0] (Promedio de Ángel): ${matrizIrregualar[2][0]}`)
console.log(`Elementos en la posición [1][2] (¿Es Karen mayor de edad?): ${matrizIrregualar[1][2]}`)

//Funciones y Métodos de Arreglos
//Los métodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un método sino una propiedad.

console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methos or Array Functions", style_console);
console.log("¿Como saber cual es el tamaño de un arreglo?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`¿Que pasa con los multidimencionales?`)
console.log(`matriz de un arreglo de tamaño: ${matriz.length}`) //La cuenta de arriba a abajo dando el numero de filas
console.log(`matriz de un arreglo de tamaño: ${matriz[0].length}`)
console.log("Y para las irregulares?")
//Para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
let nuemeroFilas = matrizIrregualar.length
for(let i =0; i<nuemeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es = ${matrizIrregualar[i].length}`)
