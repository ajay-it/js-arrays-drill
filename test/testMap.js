// Test code for map.js

const { elements } = require("../data");
const map = require("../map");

// Double the element
function doubleElement(element) {
  return element ? 2 * element : undefined;
}

// Invoke map function
const newElements = map(elements, doubleElement);
console.log("🚀 ~ map:", newElements);
