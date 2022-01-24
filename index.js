function reverse(word) {

  return word.split('').reverse().join('');

}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)

  return word === reversedWord
}
/* 
  Add your pseudocode here
  reverse takes in a string. the split method is called on the string
  to make the string an array of which the elements are its individual letters.
  the reverse method is then called on the array. the reversed array is then joined
  using the join method. the function returns the reversed word

  a second function takes in a word as an argument. it then calls the reverse function
  and stores its returned word. it then checks if the returned word, which is reversed
  is strictly equal to the original word.
*/

/*
  Add written explanation of your solution here
  the program has two funtions. one function takes in a word and reverses the order of
  letters. the other function tests whether that is strictly equal to the original
  word.
*/

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
