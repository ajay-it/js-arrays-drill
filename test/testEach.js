// Test code for each.js

const { elements } = require("../data");
const each = require("../each");

// Log elements using callback
function logElement(element, index) {
  console.log(`Index: ${index}, Element ${element}`);
}

// Invoke each function
each(elements, logElement);
