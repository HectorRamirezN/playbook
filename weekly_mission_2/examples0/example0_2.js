//Creacion de objeto con propiedades
console.log("2) Creacion de un objeto con propiedades");

const explorer = {
  name: "Hector",
  age: 32,
  mission: "Node JS",
  stack: ["js", "node", "vue,", "css", "html"],
  blog: {
    url: "https://hectorramirezn.github.io/my_launchx_blog/",
    post: 2,
  },
};
console.log(explorer);
console.log("Accediendo a las propiedades del objeto");
console.log(explorer.name);
console.log(explorer["name"]);

console.log("3) Creacion de un objeto con métodos!");
const ajolonauta = {
  name: "Woopa",
  mission: "Node JS",
  sayHelloToExplorers: function () {
    console.log("Soy el ajolonauta, qué onda!");
  },
  tellMeMore: function () {
    return `Ajolonauta: ${this.name}`;
  },
};
console.log("Ajolonauta:");
console.log(ajolonauta);
ajolonauta.sayHelloToExplorers();
console.log(ajolonauta.tellMeMore());
