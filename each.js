// each() function: Iterates over a list of elements, yielding each in turn to the `cb` function.

function each(elements, cb) {
  // Check if first argument is an array
  if (!Array.isArray(elements)) {
    console.log("First argument must be an array!");
    return;
  }

  // Check if array is empty
  if (elements.length === 0) {
    console.log("Provided array is empty!");
    return;
  }

  // Check if second argument is a function
  if (typeof cb !== "function") {
    console.log("Second argument must be a function!");
    return;
  }

  // Iterate over each element of array elements and call cb function
  for (let index = 0; index < elements.length; index++) {
    cb(elements[index], index);
  }
}

module.exports = each;
