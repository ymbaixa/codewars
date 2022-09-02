//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str){
    let punctuation = ['!', '.', '?', '"', ',']
    return str.split(' ').map(word => word.slice(1) + word[0] + (punctuation.includes(word) ? '' : 'ay')).join(' ')
  }
  
//Increment the string if it has a number, else add 1
function incrementString (strng) { 
  //Checks if no number or anything in strng it'll add 1
  if(isNaN(strng[strng.length-1])){
    return strng + 1
  }
  // return [0, 0, 0]
  let numArray = strng.split("").filter(e => !isNaN(e))

  // return ['f', 'o', 'o', 'b', 'a', 'r'] 
  let lettersArray= strng.split("").filter(e => isNaN(e))
  
  //return 3
  let numLength = numArray.length

  // return 000 then 0 then 1 then '1'
  let numStr = (Number(numArray.join("")) + 1).toString()
  
  // return 3 - 1 = 2
  let zeroCount = numLength - numStr.length;
  
  //return if true  3 > 0 then "foobar" + 0 repeated x2 + 1 = 'foobar001'
  //return if false 'foobar' + 1 = 'foobar1' 
return zeroCount > 0 ? lettersArray.join("") + "0".repeat(zeroCount) + numStr : 
lettersArray.join("") + numStr;
}