// Prompt user for the first word
let str1 = prompt("Enter the first word (e.g., RACECAR):");
console.log("User entered String 1:", str1);

// Prompt user for the second word
let str2 = prompt("Enter the second word (e.g., RECORDER):");
console.log("User entered String 2:", str2);

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the first string
let reversedStr1 = reverseString(str1);
console.log("Reversed String 1:", reversedStr1);

// Check if first string is a palindrome
let isPalindrome1 = str1 === reversedStr1;
console.log("Is String 1 a Palindrome?:", isPalindrome1);

// Reverse the second string
let reversedStr2 = reverseString(str2);
console.log("Reversed String 2:", reversedStr2);

// Check if second string is a palindrome
let isPalindrome2 = str2 === reversedStr2;
console.log("Is String 2 a Palindrome?:", isPalindrome2);
