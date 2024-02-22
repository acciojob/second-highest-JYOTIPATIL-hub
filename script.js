//your JS code here. If required.
// Define a function secondHighest that takes an array as a parameter
function secondHighest(arr) {
  // Declare two variables to store the highest and second-highest elements, initialized to -Infinity
  let highest = -Infinity;
  let secondHighest = -Infinity;

  // Loop through the array
  for (let num of arr) {
    // Check if the current element is greater than the highest element
    if (num > highest) {
      // If so, update the second-highest element to be the previous highest element
      secondHighest = highest;

      // Update the highest element to be the current element
      highest = num;
    }
    // Check if the current element is greater than the second-highest element and not equal to the highest element
    else if (num > secondHighest && num !== highest) {
      // If so, update the second-highest element to be the current element
      secondHighest = num;
    }
  }

  // Return the second-highest element as a number
  return secondHighest;
}

