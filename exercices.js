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

// conditions

function exo8() {
console.log("=== Exercice 8 - Saison ===");

const mois = 12;

if (mois >= 3 && mois <= 5) {
    console.log("printemps");
    }
else if (mois >= 6 && mois <= 8) {
    console.log("été");
    }
else if (mois >= 9 && mois <= 11) {
    console.log("automne");
    }
else  {
    console.log("hiver");
    }
}

function exo9() {
console.log("=== Exercices 9 - Prix TTC ===");

const prixHT = 7;
const tva = 10;

const prixTTC = prixHT * (1 +tva/100)

console.log("Prix TTC:", prixTTC);

}

function exo10() {
console.log("=== Exercices 10 - Jour ouvrable ===");

const jour = 3;
const jours = ["", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

/* if (jour >= 1 && jour <= 5) {
    console.log("ouvrable");
    }
else  {
    console.log("Week-end");
    } */

console.log("C'est", jours[jour], "-", jour <= 5 ? "ouvrable" : "week-end");

}

function exo11() {
console.log("=== Exercices 11 - Note finale ===");

const moyenne = 15/20 * 20;

if (moyenne > 16) {
    console.log("Excellent");
    }
else if (moyenne > 14) {
    console.log("Très bien");
    }
else if (moyenne > 12) {
    console.log("Bien");
    }
else if (moyenne > 10) {
    console.log("Passable");
    }
else {
    console.log("Recalé"); 
    }
}

function exo12() {
console.log("=== Exercices 12 - Mot de passe ===");

const mdp = "MonPass";

const assezLong = mdp.length >= 8;
const unChiffre = mdp.match(/\d/);
const uneMajuscule = mdp.match(/[A-Z]/);

if (assezLong && unChiffre && uneMajuscule) {
    console.log("Mot de passe valide");
    }
else {
    console.log("Mot de passe invalide");
    }
}

//concaténation

function exo13() {
console.log("=== Exercices 13 - Bonjour");

/* function Bonjour(prenom, age) {
console.log("Bonjour " + prenom + ", tu as " + age + "ans." );

} */

function Bonjour(prenom, age) {
    console.log(`Bonjour ${prenom}, tu as ${age} ans.`);
}

Bonjour("Marie", 25);
}


function exo14() {
console.log("=== Exercices 14 - Nom Complet");

const produit = "pomme";
const prix = 2.5;

console.log(`Les ${produit} coûtent ${prix}€ au kilo`);

}

// map

function exo15() {
console.log("=== Exercices 15 - Doubler les nombres ===");

const nums = [1, 2, 3, 4];

const result = nums.map(n => n * 2);

console.log(result);

}

function exo16() {
console.log( "=== Exercices 16 - Mettre en majuscules ===");

const  prenoms = ["ali", "maria", "paul"];

const majuscules = prenoms.map (p => p.toUpperCase())

console.log(majuscules);

}

function exo17() {
console.log("=== Exercices 17 - Ajouter un préfixe");

const fruits = ["pomme", "banane", "kiwi"];

const prefixed = fruits.map (f => "Fruit:" + f);

console.log(prefixed);

} 

function exo18() {
console.log("=== Exercices 18 - Longeurs des mots ===");

const mots = ["chats", "javascript", "map"];
const longeurs = mots.map (mot => mot.length);

console.log(longeurs);

}

// exo1();
//exo2();
//exo3();
//exo4();
//exo5();
//exo6();
//exo7();
//sexo8();
//exo9();
//exo10();
//exo11();
//exo12();
//exo13();
//exo14();
//exo15();
//exo16();
//exo17();
exo18();