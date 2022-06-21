//Check if the number(n) is a perfect square!
var isSquare = function(n){
    //Take the floor()ed square root of the number.
      return Math.floor(n**.5) ** 2 === n 
    //Multiply the square root twice.
    //Use boolean equal operator to verify if the product of square root is equal to the number given.
    }
// ALSO Number.isInteger() method returns boolean if number is a whole integer
const isSquare = n => Number.isInteger(Math.sqrt(n));

//Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
  let newStr = ''
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i =0; i<str.length; i++){
    if (vowels.includes(str[i]) === false) {
      newStr += str[i]
      console.log(newStr)
    }
  }
  return newStr
}
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
function descendingOrder(n){
  let newArr = String(n).split('').sort((a,b) => b-a).join('')
  return +newArr
}
//Return an array of only integers when given a list of positive integers and string.
function filter_list(l) {
  return l.filter(number => Number.isInteger(number))
}
function filter_list(l) {
  return l.filter(Number.isInteger);
}//also passing a method reference with no ()invocation is the same

//Return a string sentence where the beginning letter of every word is uppercase. Ex Hello World
String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
};
//Count the x's and o'x in the string to return true or false if amount is equal
function XO(str) {
  str = str.toLowerCase()
  let x = 0
  let o = 0
  for (let i=0; i<= str.length; i++) {
    if (str[i] === 'x') {
      x++    
    }
    if (str[i] === 'o') {
      o++
    }
  }
 return x === o
}//Simple, readable solution from codewars below 
function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
} 
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
// Write a function that will produce this example: accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function accum(s) {
  return s.split('').map((element, index) => element.toUpperCase() + element.toLowerCase().repeat(index)).join('-')
}
//Given a string of words, return the length of the shortest word.
function findShort(s){
  let arrOfStr = s.split(' ').map(word => word.length)
  return Math.min(...arrOfStr)
  }
//Sum of the two lowest integers in an array
function sumTwoSmallestNumbers(numbers) {  
  const sorted = numbers.sort((a,b) => a-b)
  return sorted[0] + sorted[1]
}
//Return the middle char of the string. Even s.length should include 2 chars, odd include 1 char.
function getMiddle(s){
  if (s.length % 2 === 0) {
    return s.slice(s.length/2 -1, s.length/2 +1)
  } else {
    return s.slice(s.length/2, s.length/2 +1 )
  }  
}
//Return true/false whether str is isogram(no repeating letters), case sensitive
function isIsogram(str){
  let letters = str.toLowerCase().split('')
  let newSet = [...new Set(letters)]
    return letters.length === newSet.length
}
//same as
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
//Find the sum of all int, positive and negative
function getSum(...values)//turned params (a,b) into (...values) to include use Math.min/max in for loop
{
  let array = []
  for (let i=Math.min(...values); i<=Math.max(...values); i++){
    array.push(i)
  }
    return array.reduce((total, value) => total + value, 0)
}
//Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index.
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))
//also like this solution
function leastLarger(a, i) {
  const targetVal = a[i]
  const largerVals = a.filter(num => num > targetVal)
  const leastLargeVal = Math.min(...largerVals)
  
  return a.findIndex(num => num === leastLargeVal)
} //findIndex returns -1 if not found

//Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  if (cc.length <= 4) 
    return cc

  let masked = cc.split('').slice(0,-4).map(num => '#').join('')
    return masked + cc.slice(-4)                              
}
//ALSO done with a for loop
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}
cc = cc.join("");
return cc
}
//.padStart exists for this scenario
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}