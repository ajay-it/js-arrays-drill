// flatten() function: Flattens a nested array (the nesting can be to any depth).
//                     Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

function flatten(nestedArray) {
  // Check if first argument is an array
  if (!Array.isArray(nestedArray)) {
    return "First argument must be an array!";
  }

  // Check if array is empty
  if (nestedArray.length === 0) {
    return "Provided array is empty!";
  }

  const flattenedArray = [];

  // Invoke the recursive funtion
  makeFlat(nestedArray, flattenedArray);

  return flattenedArray;
}

// Recursive funtion
function makeFlat(nestedArray, flattenedArray) {
  for (let element of nestedArray) {
    // If current element is array: invoke makeFlat
    if (Array.isArray(element)) {
      makeFlat(element, flattenedArray);
    } else {
      // Push element in flattenedArray
      flattenedArray.push(element);
    }
  }
}

module.exports = flatten;
