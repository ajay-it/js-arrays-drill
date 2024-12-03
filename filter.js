// filter() function: Return an array of all elements that passed the truth test
//                    Return an empty array if no elements pass the truth test

function filter(elements, cb) {
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

  const filteredElemets = [];

  // Iterate over each element of array elements and call cb function
  for (let index = 0; index < elements.length; index++) {
    // Push in new array if element satisfy condition
    if (cb(elements[index])) {
      filteredElemets.push(elements[index]);
    }
  }

  return filteredElemets;
}

module.exports = filter;
