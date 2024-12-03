// map() function: Produces a new array of values by mapping each value in list through a transformation function (iteratee).

function map(elements, cb) {
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

  const newElements = [];

  // Iterate over each element of array elements and call cb function
  for (let index = 0; index < elements.length; index++) {
    newElements.push(cb(elements[index]));
  }
  return newElements;
}

module.exports = map;
