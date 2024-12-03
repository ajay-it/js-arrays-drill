// find() function: Look through each value in `elements` and pass each element to `cb`.
//                  If `cb` returns `true` then return that element.
//                  Return `undefined` if no elements pass the truth test.

function find(elements, cb) {
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

  // Iterate over each element of array elements and call cb function
  for (let index = 0; index < elements.length; index++) {
    // Element found return that element
    if (cb(elements[index])) {
      return elements[index];
    }
  }

  // No element found
  return undefined;
}

module.exports = find;
