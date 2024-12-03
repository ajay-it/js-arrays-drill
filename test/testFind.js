// Test code for find.js

const { elements } = require("../data");
const find = require("../find");

// Apply condition to element
function findElement(element) {
  if (element % 2 == 0) {
    return true;
  }
  return false;
}

// Invoke find function
const element = find(elements, findElement);
console.log("🚀 ~ find:", element);
