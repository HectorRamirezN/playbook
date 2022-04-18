// Ejemplo 6: Uso de map para mostrar solo las 3 primeras letras y convertirlas en mayusculas en una lista
const countries6 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const countriesFirstThreeLetters = countries6.map(
  (country) => country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
);
console.log(
  "Ejemplo 6: Uso de map para mostrar las 3 primeras letras de cada elemento en la lista"
);
console.log(countriesFirstThreeLetters);
