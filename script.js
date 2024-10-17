function secondHighest(arr) {
  // If the array is empty or has fewer than two elements, return -Infinity
  if (arr.length < 2) return -Infinity;

  // Initialize variables to track the highest and second-highest values
  let highest = -Infinity;
  let secondHighest = -Infinity;

  // Iterate through the array
  for (let num of arr) {
    // Update highest and second-highest values
    if (num > highest) {
      secondHighest = highest;
      highest = num;
    } else if (num > secondHighest && num !== highest) {
      secondHighest = num;
    }
  }

  // If secondHighest was never updated, return -Infinity
  return secondHighest === -Infinity ? -Infinity : secondHighest;
}

// Test cases
console.log(secondHighest([5, 1, 2, 3, 4]));   // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // Output: -2
console.log(secondHighest([])); // Output: -Infinity
console.log(secondHighest([1])); // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); // Output: -Infinity
