const HashMap = require('./HashMaps');

// creates a hash map
function main() {
	const lotr = new HashMap(); // whomever came up with this exercise is clearly a LOTR fan. :)
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
  // Thinkful shows items as {"Hobbit": "Bilbo"}
	lotr.set('Hobbit', 'Bilbo');
	lotr.set('Hobbit', 'Frodo');
	lotr.set('Wizard', 'Gandalf');
	lotr.set('Human', 'Aragorn');
	lotr.set('Elf', 'Legolas');
	lotr.set('Maiar', 'The Necromancer');
	lotr.set('Maiar', 'Sauron');
	lotr.set('RingBearer', 'Gollum');
	lotr.set('LadyOfLight', 'Galadriel');
	lotr.set('HalfElven', 'Arwen');
	lotr.set('Ent', 'Treebeard');
	console.log(lotr);

	console.log(lotr.get('Maiar'));
	console.log(lotr.get('Hobbit'));
}
main();

// DO NOT run the following code before solving the problem.
/*const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10); // -> key: 'Hello World.', value: 10
  map1.set(str2,20); / -> (key is the same) value: 20
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}*/
// What is the output of the following code? explain your answer: takes two strings, sets them into a hash map with with key and value. Repeates this process for two more strings containt the same info as the first two strings, but assigns opposite values. Should print out 10 then 20...I think

/* Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.
*/

// 10%11 = 10
// 22%11 = 0
// 31%11 = 9
// 4%11 = 4
// 15%11 = 4
// 28%11 = 6
// 17%11 = 6
// 88%11 = 8
// 59%11 = 4

// [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]
// 22   59          4   15  28  17  88  31  10
// console.table([[22],[59],[],[],[4],[15],[28],[17],[88],[31],[10]])

/* Show your hash map after the insertion of the keys
5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with
collisions resolved by separate chaining. Let the hash table
have a length m = 9, and let the hash function be k mod m.

5%9 = 5
28%9 = 1
19%9 = 1
15%9 = 6
20%9 = 2
33%9 = 6
12%9 = 3
17%9 = 8
10%9 = 1

[0] [1] [2] [3] [4] [5] [6] [7] [8]
     28  20  12      5   15      17
     19                  33
     10

console.table( [[], [28, 19, 10], [20], [12], [] , [5], [15, 33], [] , [17]])*/

// Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character.
function rmvDuplicates(string) {
	let result = '';
	const hMap = new HashMap();
	for (let i = 0; i < string.length; i++) {
		hMap.set(string[i], string[i]);
    if (!result.includes(hMap.get(string[i]))) {
      result += hMap.get(string[i])
    }
	}
	return result;
}


// Write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no anagram for "north" that would be a palindrome.

// palindrome: a word, phrase, verse, or sentence that reads the same backward or forward.
// anagram: a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

//create hashmap for each permutation for string.
//check if any in hashmap are palindromes.
const string = 'acecarr';
function permutationPalindrome(string) {
  const hMap = new Map();
  for (let i=0; i<string.length; i++) {
    if (hMap.has(string[i])) { // has() method returns a boolean indicating whether an element with the specified key exists or not
      let currentVal = hMap.get(string[i]);
      hMap.set(string[i], currentVal+1); // add key to map and add 1 to the key's given value.
    } else {
      hMap.set(string[i], 1); //otherwise add key to map and give value of 1
    }
  }
  if (string.length % 2 === 0) {
    return hMap.size === string.length/2;
  } else {
    return hMap.size === Math.ceil(str.length/2);
    // Math.ceil() function returns the smallest integer greater than or equal to a given number.
  }
}
console.log(permutationPalindrome('acecarr'))

// Create new hash map, but use separate chaining as the collision resolution mechanism
class Node {
  constructor( data ) {
    this.data = data
    this.next = null
  }
}
