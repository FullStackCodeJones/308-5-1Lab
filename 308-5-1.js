//1. Sum of Array of Numbers=========================

function sumArray(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
const array = [1, 2, 3, 4, 5];
const total = sumArray(array);
//console.log(total);

//2. Number and Return to Average==========================

function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(getAverage(array));

//3. Longest Strings and Return The Longest Array==============

function findLongestString(arr) {
    if (arr.length === 0) return null;
  
    let longest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    
    return longest;
  }
  console.log(findLongestString(["cat", "tiger", "elephant"]));
