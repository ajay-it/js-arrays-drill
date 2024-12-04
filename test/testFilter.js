// Test code for filter.js

const { elements } = require("../data");
const filter = require("../filter");

// Apply condition to element
function filterElement(element) {
  return element % 2 === 0;
}

// Invoke filter function
const filteredElemets = filter(elements, filterElement);
console.log("🚀 ~ filter:", filteredElemets);
