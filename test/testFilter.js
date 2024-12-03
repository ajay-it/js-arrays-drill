// Test code for filter.js

const { elements } = require("../data");
const filter = require("../filter");

// Apply condition to element
function filterElement(element) {
  if (element % 2 == 0) {
    return true;
  }
  return false;
}

// Invoke filter function
const filteredElemets = filter(elements, filterElement);
console.log("🚀 ~ filter:", filteredElemets);
