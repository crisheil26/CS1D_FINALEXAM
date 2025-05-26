// Prompt user to enter names separated by commas
let nameInput = prompt("Enter names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise):");
console.log("User entered names:", nameInput);

// Convert name input into an array
let subArray1 = nameInput.split(",");
console.log("Names Array (subArray1):", subArray1);

// Prompt user to enter ages separated by commas
let ageInput = prompt("Enter ages separated by commas (e.g., 24,65,21,5,9):");
console.log("User entered ages:", ageInput);

// Convert age input into an array of numbers
let subArray2 = ageInput.split(",").map(Number);
console.log("Ages Array (subArray2):", subArray2);

// Combine names and ages into [name, age] pairs
let restructuredArray = [];
console.log("Initializing restructured array...");

for (let i = 0; i < subArray1.length; i++) {
    let pair = [subArray1[i], subArray2[i]];
    console.log("Pair created:", pair);
    restructuredArray.push(pair);
    console.log("Restructured array after adding pair:", restructuredArray);
}

// Final output - log each [name, age] pair per line
console.log("Final Restructured Multi-Dimensional Array:");
for (let i = 0; i < restructuredArray.length; i++) {
    console.log(restructuredArray[i]);
}
