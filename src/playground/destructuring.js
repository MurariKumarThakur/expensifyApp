import { log } from "util";

// OBJECT DESTRUCTURING
//+++++++++++++++++++++++++++++++++++++=

// console.log("destructuring");

// const person = {
//   name: "Murari",
//   age: 27,
//   location: {
//     city: "Patna",
//     temp: 92
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// // changing temp to temperature;
// const { temp: temperature, city } = person.location;
// // let name = person.name;
// // let age = person.age;

// console.log(`${firstName} is ${age}`);
// if (city && temperature) {
//   console.log(`it's is ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin"
//   }
// };
// const { title, author } = book;
// const { name: published = "self-published" } = book.publisher;
// console.log(`${title} is written by ${author} and Published by ${published}`); // Penguin , self-published;

// aray destructuring

// const address = [
//   "1299 S Juniper street",
//   "Philadelphia",
//   "Pennsylvania",
//   "1947"
// ];
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}`);

const items = ["Coffee(cold)", "$2.00", "$2.50", "$2.75"];
//grab first and third items using array destructuring ;

const [menu, , mediumSize] = items;
console.log(`A Medium ${menu} costs ${mediumSize}`);
