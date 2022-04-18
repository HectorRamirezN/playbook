// Ejemplo 1: for Each para imprimir elementos de una lista

const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "fiday",
  "saturday",
  "sunday",
];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista");
weekDays.forEach(
  (day) =>
    console.log(day.charAt(0).toUpperCase() + day.substring(1).toLowerCase()) // Combierte en mayuscula la primera letra de cada elemento en la cadeany lo imprime
);
