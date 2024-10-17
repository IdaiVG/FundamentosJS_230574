//TIPOS DE DATOS EN JS
//1. Undefined - (NULL)

console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente="Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cleitne = 19227
console.log(`El Cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//console.log(`El cliente ha realizado ${NumCompras} en este mes.`);
//Undefined es el tipo de dato por defecto se asigna a variables no inicializadas o no declaradas

//2. BOOLEAN - BOLEANOS - TRUE/FALSE  (FALSO/VERADERO)

console.warn("--- Tipo de Dato : BOOLEAN (Bolean - True/False)")
let esPremiun = "No lo se";
console.log(`¿Es el cliente premiun? : ${esPremiun}`)
console.log(`El tipo de dato de la variable esPremiun es: ${typeof(esPremiun)}`);

console.log("Asignando el valor \"true\" a la variable. ")
esPremiun="true"
console.log(`El tipo de dato de la varible esPremiun es: ${typeof(esPremiun)}`);
console.log("Asignando el valor true a la variable.")

esPremiun =true 
console.log(`El tipo de dato de la variable es Premiun es: ${typeof(esPremiun)}`);
console.log(`¿Es el cliente Premiun?: ${typeof(esPremiun)}`);
console.log("Cambiando el valor de esPremiun a false")
esPremiun=0;

if(esPremiun)
    console.log("El cliente pago por usar el servicio.");
else
console.log("El cliente recibe los servicios gratuitos");

//3. NUMBER (Números)

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;
console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//El cliente realiza un abono de 1500

monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha recibido, tu nuevo saldo de: ${(saldo_cuenta+monto_transaccion)}`);
//4. SRING (CADENA DE CARACTÈRES)

const alumno = "Idai Vargas Galindo"
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres)");
console.log(`El nombre del alumno es: ${alumno} que es un tipo de dato ${typeof(alumno)}`);

//INICIALIZAMOS EL VALOR DE LA VARIABLE producto

producto = "MONITOR 20\"FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

//MANIPULANDO LOS STRINGS

console.log(`Más adelante podremos transformar el contenido de los STRING usando los metodos y funciones específicas, cómo convertir su valor a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);

//5. BIGINT (Número de Mayor Amplitud)

console.warn("--- Tipo de Dato - BIGINT (Número Amplio)");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 123456789012345678901234567890
let numeroGrande4 = 1234567890123456789012345678901234567890
console.log(`El primer experimento da un número grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El segundo experimento da un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El tercer experimento da un número grande es: ${numeroGrande3}, que NO es soportado por NUMBER, Perdiendo Presición, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El cuarto experimento da un número grande es: ${numeroGrande4}, que NO es soportado por NUMBER, Perdiendo Presición, y su tipo de dato es: ${typeof(numeroGrande4)}`)

numeroGrande3=BigInt("123456789012345678901234567890");
console.log(`El quinto experimento da un número grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`)
numeroGrande4=BigInt("1234567890123456789012345678901234567890");
console.log(`El sexto experimento da un número grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`)

// ¿Se puede realizar operaciones matemáticas entre un NUMBER y un BIGINT?

const numero=123;
console.log(`Intentando realizar la suma de: numero + numeroGrande, el resultado es: ${BigInt(numero)+ numeroGrande3}`)

//6. SYMBOL (Sìmbol)
console.warn("--- Tipo de Dato SYMBOL (Símbolo o único)")
const numero1 =5;
const numero2=5.0;
const numero3="5";
const numero4="5.0"
const numero5=Symbol(5)
const numero6=Symbol(5)
const numero7=Symbol(5.0)
const numero8=Symbol("5")
const numero9=Symbol("5.0")


//Pruebas comparativas
//1
console.log("¿Es 5 = 5.0?")
if(numero1==numero2)
    console.log("Se comparó número1 con número2, determinando que tiene el mismo valor")
else
console.log("Se comparó número1 con número2, determinando que NO tienen el mismo valor.")

//2
console.log("¿Es 5 = \"5\"?")
if(numero1==numero3)
    console.log("Se comparó número1 con número3, determinando que tiene el mismo valor")
else
console.log("Se comparó número1 con número3, determinando que NO tienen el mismo valor.")

//3
console.log("¿Es 5 === \"5.0\"?")
if(numero1===numero3)//Estrictamente igual (equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó número1 con número3, determinando que tiene el mismo valor")
else
console.log("Se comparó número1 con número3, determinando que tienen el mismo valor, pero No el mismo tipo de DATO.")

//4
console.log("¿Es 5 = \"5.0\"?")
if(numero1==numero4)
    console.log("Se comparó número1 con número4, determinando que tiene el mismo valor")
else
console.log("Se comparó número1 con número4, determinando que NO tienen el mismo valor.")

//5
console.log("¿Es 5 === \"5.0\"?")
if(numero1===numero4)//Estrictamente igual (equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó número1 con número4, determinando que tiene el mismo valor")
else
console.log("Se comparó número1 con número4, determinando que tienen el mismo valor, pero No el mismo tipo de DATO.")

//6
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que el tipo de dato son: siendo número1 del tipo: ${numero1} y número5 del tipo: ${typeof(numero5)} `)
if(numero1==numero5)
    console.log("Se comparó número1 con número5, determinando que tiene el mismo valor")
else
console.log("Se comparó número1 con número5, determinando que NO tienen el mismo valor.")

//7
console.log(`¿Es 5 === Symbol(5.0)?, antes de compararlos analizamos que el tipo de dato son: siendo número1 del tipo: ${numero1} y número7 del tipo: ${typeof(numero7)} `)
if(numero1===numero7)
    console.log("Se comparó número1 con número7, determinando que tiene el mismo valor")
else
console.log("Se comparó número1 con número7, determinando que tienen el mismo valor, pero No el mismo tipo de dato.")

//8
console.log(`¿Es 5 === Symbol("5")?, antes de compararlos analizamos que el tipo de dato son: siendo número1 del tipo: ${numero1} y número8 del tipo: ${typeof(numero8)} `)
if(numero1==numero8)
    console.log("Se comparó número1 con número8, determinando que tiene el mismo valor")
else
console.log("Se comparó número1 con número8, determinando que tienen el mismo valor, pero No el mismo tipo de dato.")
