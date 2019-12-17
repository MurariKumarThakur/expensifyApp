console.log("++++++++++++++ ES6 Arrow Function +++++++++++++++++++");

const square = function(x) {
  return x * x;
};

const squareArrow = x => x * x;

console.log(squareArrow(9));

const name = "Surjit Kumar Thakur";

const getFirstName = Name => name.split(" ")[0];

console.log(getFirstName(name));
