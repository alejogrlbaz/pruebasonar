// Definir un array de números
const numeros = [2, 5, 8, 11, 4, 7];

// Función para calcular la suma de los números en un array
function calcularSuma(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

// Calcular la suma de los números en el array
const sumaTotal = calcularSuma(numeros);
console.log("La suma total es: " + sumaTotal);
