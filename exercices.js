//exos Spread Operator

function exo1() {
console.log("=== Exercice 1 - Copier un tableau ===");

const fruits = ["pomme", "banane","orange"];
const fruitsCopy = [...fruits];

console.log("Original:", fruits);
console.log("Copie:", fruitsCopy);

// Ajouter Kiwi
fruitsCopy.push("kiwi");
console.log("Après push 'kiwi' dans copie");
console.log("-Original:", fruits);
console.log("-Copie:", fruitsCopy);
}

function exo2() {
console.log("=== Exercices 2 - Ajouter des éléments ===");

const fruits = ["pomme", "banane", "orange"];
const moreFruits = [...fruits, "kiwi", "mangue"];

console.log("Original:", fruits);
console.log("Add:", moreFruits);
}

function exo3() {
console.log("=== Exercices 3 - Fusionner deux tableaux");

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];

console.log("Array1:", numbers1);
console.log("Array2:", numbers2);
console.log("AllArrays", allNumbers);
}

function exo4() {
console.log("=== Exescices 4 - Spread dans fonction");

function multiply (a, b, c) {
    return a * b * c;
}
const values = [2, 3, 4];
//apple d'une fonction 
const result = multiply(...values);

console.log("Values:", values);
console.log("Résultat:", result);
}


function exo5() {
console.log("=== Exercices 5 - Spread avec Math.max ===");

const scores = [15, 89, 23, 67, 12, 95];

console.log("Scores:", scores);
console.log("Meilleurs score", Math.max(...scores));


}

function exo6() {
console.log("=== Exercices 6 - Spread sur les objets");

const baseUser = {name:"Alice", age: 25};
const userWithCity = {...baseUser, city: "Paris"}
const olderUser = {...baseUser, age: 30};

console.log("Utilisateur de base:", baseUser);
console.log("Utilisateur avec cette ville:", userWithCity);
console.log("Utilisateur le plus ancient:", olderUser);


}

// Destructuring d'objets

function exo7() {
console.log("=== Exercices 7 - Destructuring objets===");

const user = {
    name: "Alice",
    age: 25,
    city: "Paris",
    country: "France"
};

const {name, age, city} = user;

console.log("Nom:",name);
console.log("Age",age);
console.log("Ville", city);

}


// exo1();
//exo2();
//exo3();
//exo4();
//exo5();
//exo6();
//exo7();



