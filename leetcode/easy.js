// Create a function that returns an array with the running sum of each value in the array

var runningSum = function (nums) {
  let resultArr = [];
  let accum = 0;
  for (let i = 0; i < nums.length; i++) {
    resultArr.push(accum + nums[i]);
    accum += nums[i];
  }
  return resultArr;
};

// Find the pivotIndex in an array
var pivotIndex = function (nums) {
  if (nums.length === 0) return -1;
  if (nums.legnth === 1) return 0;

  let totalSum = nums.reduce((total, value) => total + value, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

// Are the strings isomorphic?
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (t[s.indexOf(s[i])] !== t[i] || s[t.indexOf(t[i])] != s[i]) return false;
  }
  return true;
};
// quadratic solution using hashmap to map letters together
function isomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var map = {};
  for (var i = 0; i < str1.length; i++) {
    var a = str1[i];
    var b = str2[i];
    if (typeof map[a] === "undefined") {
      map[a] = b;

      // check for error in first tuple ("ABB", "XYZ")
    } else if (map[a] !== b) {
      return false;
    }

    // check for error in second tuple ("ABC", "XYY")
    for (let key in map) {
      if (key !== a && b === map[key]) {
        return false;
      }
    }
  }
  return true;
}

// Create a function that returns true/false if s is subsequence(new str formed from original s without some chars in t while maintaining order of s)
const isSubsequence = (s, t) => {
  if (s.length === 0) return true;

  let sPointer = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[sPointer] === t[i]) sPointer++;
  }
  return sPointer === s.length;
};

// Create a function that returns the amount of jewels present in the collection of stones. Case sensitive
var numJewelsInStones = function (jewels, stones) {
  let totalJewels = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      totalJewels++;
    }
  }
  return totalJewels;
};

/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! */
function maxCharacter(string) {
  const charMap = (string) => {
    let obj = {};

    for (const letter of string) {
      obj[letter] ? obj[letter]++ : (obj[letter] = 1);
    }
    return obj;
  };

  if (string.length === 0) {
    return "";
  } else {
    string = string.toLowerCase().split(" ").join("");
    const hashmap = charMap(string);

    let maxValue = 0;
    let maxChar;

    for (let [key, value] of Object.entries(hashmap)) {
      if (value > maxValue) {
        maxValue = value;
        maxChar = key;
      }
    }
    return maxChar;
  }
}

console.log(maxCharacter("Happy Birthday to Maria ! "));

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/*Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const areThereDuplicates = (arr) => {
  let valueObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (valueObj.hasOwnProperty(arr[i])) {
      return true;
    } else {
      valueObj[arr[i]] = 1;
    }
  }

  return false;
};

console.log(areThereDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(areThereDuplicates([1, 2, 3, 4]));

//Given an array nums of size n, return the majority element.

/*The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

const majorityElement = function (nums) {
  // declare empty obj
  let hashmap = {};
  // iterate through the array
  for (const num of nums) {
    if (num in hashmap) {
      hashmap[num]++;
    } else {
      hashmap[num] = 1;
    }
  }
  // store the values in obj as property and ++ the value as iterate through
  // iterate through hashmap
  let maxVal = 0;
  let majority = 0;
  for (const [key, value] of Object.entries(hashmap)) {
    if (value > maxVal) {
      maxVal = value;
      majority = +key;
    }
  }
  // keep track of value size and property
  return majority;
};

/*Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.*/

//split magazine string into an array
// declare empty obj
// iterate and create a hashmap with values representing the # of occurrances for each word
// grab input and split into array
// loop through array and check if value exists in hashmap, -- value in hashmap
// else return false

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const ransomNote = function (string, magazine) {
  const magazineArr = magazine
      .replaceAll(".", "")
      .replaceAll(",", "")
      .toLowerCase()
      .split(" "),
    stringArr = string.split(" ");

  let hashmap = {};

  for (const word of magazineArr) {
    hashmap[word] ? hashmap[word]++ : (hashmap[word] = 1);
  }

  for (const word of stringArr) {
    if (hashmap.hasOwnProperty(word) && hashmap[word] > 0) {
      hashmap[word]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

/*Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once. */

const twoSum = (arr, sum) => {
  const arrHash = {};
  let pairs = [];

  for (const num of arr) {
    if (sum - num in arrHash) {
      pairs.push([sum - num, num]);
    } else {
      arrHash[num] = 1;
    }
  }
  return pairs;
};

console.log(twoSum([1, 2, 2, 3, 4], 4), [
  [2, 2],
  [3, 1],
]);

//Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

//For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].*/

const productOfEach = (array) => {
  let productArr = [];

  for (let i = 0; i < array.length; i++) {
    let productVal = array
      .filter((value) => value != array[i])
      .reduce((total, value) => total * value, 1);
    productArr.push(productVal);
  }

  return productArr;
};

// Product of nums with constraints defined by leetcode. Must be O(n) and not use division
function productOfEach(nums) {
  let product = [];
  let leftSide = 1;
  let rightSide = 1;

  for (let i = 0; i < nums.length; i++) {
    product[i] = leftSide;
    leftSide = leftSide * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    product[i] = rightSide * product[i];
    rightSide = rightSide * nums[i];
  }
  return product;
}

console.log(productOfEach([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);

console.log(productOfEach([3, 2, 1]), [2, 3, 6]);

// Allow one function call: Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let called = false;
  return function (...args) {
    if (called) {
      return;
    } else {
      called = true;
      return fn(...args);
    }
  };
};
