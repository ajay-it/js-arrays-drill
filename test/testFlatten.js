// Test code for flatten.js

const { nestedArray } = require("../data");
const flatten = require("../flatten");

// Invoke flatten function
const flattenedArray = flatten(nestedArray);
console.log("🚀 ~ flatten:", flattenedArray);
