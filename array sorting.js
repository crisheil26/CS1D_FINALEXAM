// Prompt user to enter numbers
let numberInput = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):");
console.log("User entered numbers string:", numberInput);

// Convert number string to array of numbers
let numbers = numberInput.split(",").map(Number);
console.log("Converted to numbers array:", numbers);

// Prompt user to enter names
let nameInput = prompt("Enter names separated by commas (e.g., Zenvo,Erica,Jordie,Alicia,Redon):");
console.log("User entered names string:", nameInput);

// Convert name string to array of strings
let names = nameInput.split(",");
console.log("Converted to names array:", names);

// Merge both arrays
let mergedArray = numbers.concat(names);
console.log("Merged Array (Numbers + Names):", mergedArray);

// Sort numbers in descending order
let sortedNumbersDesc = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted in descending order:", sortedNumbersDesc);

// Sort names alphabetically
let sortedNamesAsc = [...names].sort();
console.log("Names sorted alphabetically:", sortedNamesAsc);
