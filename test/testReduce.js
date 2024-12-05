// Test code for reduce.js

const { elements } = require("../data");
const reduce = require("../reduce");

// Add the element
function addElement(combinedResult, element) {
  return element ? combinedResult + element : combinedResult;
}

// Invoke reduce function
const totalSum = reduce(elements, addElement, 0);
console.log("🚀 ~ reduce:", totalSum);
