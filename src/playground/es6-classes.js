// Setup constructor to take name and age (default to 0)
// getDescription - start with name  is 26 year(s) old

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    // return "Hi, I am " + this.name + " !";

    return `Hi i am  ${this.name} ! `;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

/* Traveler --> extends Person
   Add support for homeLocation
   Override getGreeting 
   1.Hi. i am Murari . i'm visiting from Patna 
   2. Hi i am Murari


*/

class Traveler extends Person {
  constructor(name,age, homeLocation) {
    super(name,age);
    this.homeLocation = homeLocation;
  }
 
  getGretting() {
    let greet = super.getGretting();
    if (this.homeLocation) {
      greet += ` i'm visiting from ${this.homeLocation}`;
    }
    return greet;
  }
}

const me = new Traveler("Murari",20, "Patna");
console.log(me);
console.log(me.getGretting());

const other = new Traveler();
console.log(other);
console.log(other.getGretting());
