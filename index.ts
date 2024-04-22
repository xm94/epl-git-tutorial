import { Developer } from "./dev";
import { character } from "./hana";

console.log("Hello world!");

let xavier = new Developer("Xavier", ["Typescript", "Java", "Dart"], "Backend");

console.log(xavier);
console.log(character);

import { player } from "./dev";

let wizard1 = new player("wizard", "fireball", 64);

console.log(wizard1);