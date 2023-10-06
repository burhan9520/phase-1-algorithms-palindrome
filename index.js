function isPalindrome(word) {
  // Remove any non-letter characters and convert to lowercase
  const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Reverse the cleaned word
  const reversedWord = cleanedWord.split('').reverse().join('');

  // Compare the cleaned word with its reverse
  return cleanedWord === reversedWord;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

