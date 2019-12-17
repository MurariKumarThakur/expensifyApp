console.log("+++++++++++++++ ES6 Arrow Function part 3 +++++++++++++++++++");

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log("sum is ", add(50, 50));

const user = {
  name: "Murari Kumar Thakur",
  cities: ["Madhubani", "Patna", "Dharbhanga"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  number: [10, 20, 30, 40, 50],
  multiplyBy: 2,
  multiply() {
    return this.number.map(mul => mul * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
