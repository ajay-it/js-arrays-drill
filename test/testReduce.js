// Test code for reduce.js

const { elements } = require("../data");
const reduce = require("../reduce");

// Add the element
function addElement(startingValue, element) {
  return startingValue + element;
}

// Invoke reduce function
const totalSum = reduce(elements, addElement, 0);
console.log("🚀 ~ reduce:", totalSum);
