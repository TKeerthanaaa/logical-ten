"use strict";

// 1.Write a function that determines whether a given string is a valid JSON or not.
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

console.log(`Answer for 1 Question`);
// Test cases
console.log(isValidJSON('{"name":"John", "age": 30}')); // true
console.log(isValidJSON('{"name":"John", "age": 30,}')); // false (comma at the end)
console.log(isValidJSON('{"name":"John", "age": 30}')); // true
console.log(isValidJSON('{"name":"John", "age": 30, "city":"New York"}')); // true

// 2.Write a function that finds the longest increasing subarray within an array of numbers.
//
function longestIncreasingSubarray(list) {
  let subArr = [],
    max = 1,
    len = 1,
    checkFirstNum = false;
  let arr = [];

  for (let i = 1; i < list.length; i++) {
    if (list[0] < list[i]) {
      checkFirstNum = true;
    }
  }
  if (!checkFirstNum) {
    arr.push(list[0]);
    return arr;
  }

  function updateArr(arr1) {
    arr = arr1;
  }

  function logic() {
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] < list[i + 1]) {
        subArr.push(list[i]);
        len++;
        if (i + 1 == list.length - 1) {
          subArr.push(list[i + 1]);
        }
        if (len > max) {
          max = len;
          updateArr(subArr);
        }
      } else if (list[i] > list[i + 1]) {
        subArr.push(list[i]);
        if (len >= max) {
          max = len;
          updateArr(subArr);
        }
        len = 1;
        subArr = [];
      }
    }
  }
  logic();
  return arr;
}

console.log(`Answer for 2 Question`);
console.log(longestIncreasingSubarray([1, 2, 3, 1, 2, 3, 4, 5]));
console.log(longestIncreasingSubarray([5, 4, 3, 2, 1]));
console.log(longestIncreasingSubarray([1, 2, 3, 4, 3, 2, 1]));

// 4.Implement a function to calculate the factorial of a given non-negative integer using recursion.
function factorial(n) {
  if (n >= 1) {
    return n * factorial(n - 1);
  } else if (n == 0) {
    return 1;
  }
}

console.log(`Answer for 4 Question`);
// Test cases
console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800

// 5.Write a function that finds all pairs of elements in an array that add up to a specific target sum.
function findPairsWithSum(arr, targetSum) {
  let Pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == targetSum) {
        Pair.push(arr[i], arr[j]);
      }
    }
  }
  return Pair;
}

console.log(`Answer for 5 Question`);
// Test cases
console.log(findPairsWithSum([1, 2, 3, 4, 5], 7)); // [[2, 5], [3, 4]]
console.log(findPairsWithSum([1, 2, 3, 4, 5], 10)); // [[5, 5]]
console.log(findPairsWithSum([3, 4, 2, 1, 5], 8)); // [[3, 5], [4, 4], [2, 5], [1, 5]]

// 6.Create a function that finds the largest common prefix among an array of strings.
function longestCommonPrefix(strings) {
  let str = strings[0],
    finalStr = "";
  for (let i = 0; i < str.length; i++) {
    let flag = true;
    for (let j = 1; j < strings.length; j++) {
      if (str[i] !== strings[j][i]) {
        flag = false;
      }
    }
    if (!flag) {
      finalStr += "";
      break;
    } else {
      finalStr += str[i];
    }
  }
  return finalStr;
}

console.log(`Answer for 6 Question`);
// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "car", "race"])); //""
console.log(longestCommonPrefix(["apple", "app", "apricot"])); // "ap"

// 7.Create a function to find the nth prime number.
function nthPrime(n) {
  let num = 2;
  let count = 0;
  let primeNo;
  if (n >= 2) {
    while (n > count) {
      let primeCount = 0;
      for (let i = 1; i <= 10; i++) {
        if (num % i === 0) {
          primeCount++;
        }
        if (primeCount > 2) {
          break;
        }
      }
      if (num <= 10) {
        if (primeCount === 2) {
          count++;
          primeNo = num;
        }
      } else if (num > 10) {
        if (primeCount === 1) {
          count++;
          primeNo = num;
        }
      }
      num++;
    }
  } else if (n == 1) {
    return 2;
  }
  return primeNo;
}

console.log(`Answer for 7 Question`);
// Test cases
console.log(nthPrime(1)); // 2
console.log(nthPrime(5)); // 11
console.log(nthPrime(10)); // 29

// 8.Implement a function that sorts an array of objects by a specific property in ascending order.
function sortByProperty(arr, prop) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1 + 1; j < arr.length; j++) {
      if (arr[i][prop] > arr[j][prop]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Test cases
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

console.log(`Answer for 8 Question`);
console.log(sortByProperty(people, "age"));

// 9. Write a function that performs a deep merge of two objects, combining their properties.
function deepMerge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(`Answer for 9 Question`);
// Test case
const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { b: 4, d: 5 }, e: 6 };
console.log(deepMerge(obj1, obj2));
// Output: { a: { b: 4, d: 5 }, c: 3, e: 6 }

// 10. Create a function that performs a binary search on a sorted array and returns the index of the target element.
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let Search = Math.floor((start + end) / 2);
    if (arr[Search] === target) {
      return Search;
    } else if (target > arr[Search]) {
      start = Search + 1;
    } else if (target <= arr[Search]) {
      end = Search - 1;
    }
  }
  return -1;
}

console.log(`Answer for 10 Question`);
// Test cases
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(sortedArray, 7)); // 3
console.log(binarySearch(sortedArray, 2)); // -1 (not found)
