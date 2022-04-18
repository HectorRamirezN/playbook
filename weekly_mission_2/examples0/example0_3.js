// Crear objeto que reciba parametros
const myPet = {
  name: "Max",
  sayHelloToMyPet: function (yourPet) {
    console.log(`My pet ${this.name} say's hello to your pet ${yourPet}`);
  },
};
console.log("Ejemplo 5: Objeto con método que recibe parámetros");
myPet.sayHelloToMyPet("Tulio");
