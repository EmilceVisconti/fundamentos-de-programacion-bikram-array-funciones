//Ej1
let arrayVacio = [];
//Ej2
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
//Ej3
let arrayNumerosPares = [0,2,4,6,8];
//Ej4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
//Ej5
function suma  (num1, num2) {
    return num1 + num2
}
//Ej6 Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
function potenciacion (a,b) {
    return Math.pow(a,b);
}
//Ej7 (elque mas entendi)
function separarPalabras (holamundo) {
return holamundo.split (" "); 
}
//Ej8 PREGUNTAR XQ aca va veces en vez de un nro x
function repetirString (hola, veces) {
    return hola.repeat (veces);
}
//Ej9 Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo(numero) {
for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        return false; // No es primo si es divisible por algún número en el rango
      }
    }
    return true; // Si no es divisible por ningún número, es primo
  }

//Ej10 Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
function ordenarArray (numeros) {
  return numeros.sort((a, b) => a - b);
}

 //Ej11 Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
 function obtenerPares(numeros) {
  return numeros.filter(numero => numero % 2 === 0);
}

//Ej12 Crear la función pintarArray que acepte como argumento un array 
// y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
const pintarArray = (arr) => {
let resultado ="[";
for (let i = 0; i < arr.length; i++) {
if ( i< arr.length -1)
    resultado += arr[i] + ", ";
else   
   resultado += arr[i]+ "]";
}
return resultado;
}

//Ej13 crear la función arrayMapi que acepte como argumento un Array y una función 
// y devuelva un array en el que se haya aplicado la función a cada elemento del array
function arrayMapi(arr, callback) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(callback(arr[i], i, arr));
  }
  return resultado;
}
//Ej 14 Crear la función eliminarDuplicados que acepte como argumento un array 
// y devuelva un array en el que se hayan eliminado los duplicados
function eliminarDuplicados (arr) {
    let datos= [];
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
   if  (datos.includes(num) == false){
datos.push(num);
   }
}
return datos;
}

//Ej15 Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [];
for (let i = -0; i < 10; i++) {
  arrayNumerosNeg.push(-i);
}
//Ej16 Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ['Hola', 'Mundo'];


//Ej 17 Crear variable de nombre loGuardoTodo declarada 
// con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

let loGuardoTodo = ['hola', 'que', 23, 42.33 , 'tal'];


//Ej18 Crear variable de nombre arrayDeArrays 
//declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Ej 19 Crea la función multiplicacion que acepte como argumento dos números 
// y devuelva el resultado de su multiplicación
function multiplicacion (num1, num2) {
    return num1 * num2;
}

//Ej 20 Crea la función division que acepte como argumento 
// dos números y devuelva el resultado de su division
function division (num1, num2) {
    return num1 / num2;
}

//Ej 21 Crea la función esPar que acepte como argumento un número 
// y devuelva true si es par y false si es impar
function esPar (num) {
 return num % 2 === 0
}

//Ej 22 
//Crea el array arrayFunciones que tenga como valor las funciones: 
//suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)

  const arrayFunciones = [
  (a, b) => a + b, 
  (a, b) => a - b, 
  (a, b) => a * b 
];

//Ej 23 Crear la función ordenarArray2 
// que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
function ordenarArray2 (numeros) {
  return numeros.sort((a, b) => a - b);
}

//Ej 24 Crear la función obtenerImpares 
//que acepta como argumento un array de números y devuelva un array con los elementos impares
function obtenerImpares(numeros) {
  return numeros.filter(numero => numero % 2 !== 0);
}

//Ej 25 Crear la función sumarArray que acepte como
//argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
function sumarArray(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

//Ej 26 Crear la función multiplicarArray que acepte como argumento un array numérico 
// y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
function multiplicarArray(arr) {
  let producto = 1;
  for (let i = 0; i < arr.length; i++) {
    producto *= arr[i];
  }
  return producto;
}