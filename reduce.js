// reduce() function: A reduce function combines all elements into a single value going from left to right.

function reduce(elements, cb, startingValue) {
  // Check if first argument is an array
  if (!Array.isArray(elements)) {
    return "First argument must be an array!";
  }

  // Check if array is empty
  if (elements.length === 0) {
    return "Provided array is empty!";
  }

  // Check if second argument is a function
  if (typeof cb !== "function") {
    return "Second argument must be a function!";
  }

  // Check type for starting value
  if (startingValue && typeof startingValue !== "number") {
    return "Third argument i.e., starting value must be a number";
  }

  // If nothing provided assign first element of given array
  if (!startingValue && startingValue !== 0) {
    startingValue = elements[0];
  }

  let combinedResult = 0;

  // Iterate over each element of array elements and call cb function
  for (let index = 0; index < elements.length; index++) {
    combinedResult += cb(startingValue, elements[index]);
  }
  return combinedResult;
}

module.exports = reduce;
