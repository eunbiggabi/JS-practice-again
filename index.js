// const randomNum1to100 = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum1to100);

// function bmiCalculator(weight, height) {
//   let interpretation = weight / (height * height);
//   if (interpretation < 18.5) {
//     return `Your BMI is ${interpretation}, so you are underweight.`;
//   } else if (interpretation >= 18.5 && interpretation <= 24.9) {
//     return `Your BMI is ${interpretation}, so you have a normal weight`;
//   } else {
//     return `Your BMI is ${interpretation}, so you are overweight`;
//   }
// }

// console.log(bmiCalculator(55, 1.75));

// function isLeap(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return 'Leap year';
//       } else {
//         return 'Not leap year';
//       }
//     } else {
//       return 'Leap year';
//     }
//   } else {
//     return 'Not leap year,';
//   }
// }

// console.log(isLeap(2400));

// function whosPaying(names) {
//   for (let i = 0; i < names.length; i++) {
//     let payingPerson = Math.floor(Math.random() * 5);
//     return `${names[payingPerson]} is going to buy lunch today!`;
//   }
// }

// console.log(whosPaying(['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe']));

// const title = document.querySelector('.title');
// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');
// const meta = document.getElementsByTagName('li')[2];

// // title.addEventListener('click', );

// title.style.color = 'purple';
// meta.style.color = 'red';
// meta.innerHTML = 'facebook';

// grandparent.addEventListener('click', () => {
//   console.log('hello World');
// });

// Closure

// // Step.1
// function makeAdder1(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// // Step.2
// const makeAdder2 = (x) => {
//   return function(y) {
//     return x + y;
//   }
// }

// // Step.3
// const makeAdder3 = (x) => {
//   return (y) => {
//     return x + y;
//   }
// }

// // Step.4
// const makeAdder4 = (x) => (y) => x + y;

// // const makeAdder = () => () => {}

// const add3 = makeAdder4(3);
// const hoho = makeAdder4(10)
// console.log(add3(5));
// console.log(hoho(5))

// const updateAgency = (key) => ({ target: {value}}) => setState((current) => ({...current, [key]: value}))

// const updateAgency = (key) => {
//   function handleMembershipChange({target: {value}}) {
//     setState((current) => ({...current, [key]: value}));
//   }
// }

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   }
// }

// const add3 = makeAdder(3)
// console.log(add3(2));

// const add10 = makeAdder(10)
// console.log(add10(5));
// console.log(add3(1));

// function makeCounter() {
//   let num = 0;

//   return function() {
//     return num++;
//   };
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());

// function testClouser(x) {
//   return function (y) {
//     return y;
//   };
// }

// const test = testClouser(3);
// console.log(test(2));

// let one;
// one = 1;

// let addOne = (num) => console.log(one + num);

// addOne(5);

// function add(x) {
//   return x;
// }

// console.log(add);

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// program to find the factorial of a number

// function factorial(x) {
//   // if number is 0
//   if (x === 0) {
//     return 1;
//   }

//   // if number is positive
//   else {
//     return x * factorial(x - 1);
//   }
// }

// console.log(factorial(4));

// const num = 4;

// if (num > 0) {
//   let result = factorial(num);
//   console.log(`The factorial of ${num} is ${result}`);
// }

// function showName(name) {
//   console.log(name);
// }
// const tId = setTimeout(showName, 2000, 'Mike');

// clearTimeout(tId);

// let num = 0;

// function showTime() {
//   console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
//   if (num >= 5) {
//     clearInterval(tId);
//   }
// }

// const tId = setInterval(showTime, 1000);

// const add2 = (...param1) => {
//   let total = 0;
//   param1.forEach((num) => (total += num));
//   return total;
// };

// console.log(add2(1, 2, 3, 4, 5));
// console.log(add2(2, 3));

// const add3 = (...param1) => {
//   const result = param1.reduce((prev, cur) => {
//     return prev + cur;
//   }, 0);
//   return result;
// };

// console.log(add3(1, 2, 3, 4, 5));
// console.log(add3(2, 3));

// const addTwoDigits = (n) => {
//   let arr = n.toString().split('');
//   let num1 = parseInt(arr.slice(0, 1));
//   let num2 = parseInt(arr.slice(1));

//   return num1 + num2;
// };

// console.log(addTwoDigits(29));

// function adjacentElementsProduct(inputArray) {
//   let largestProduct = inputArray[0] * inputArray[1];

//   for (let i = 1; i < inputArray.length - 1; i++) {
//     let product = inputArray[i] * inputArray[i + 1];
//     largestProduct = largestProduct < product ? product : largestProduct;
//   }

//   return largestProduct;
// }

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

// let getSecondLargestNumber = (arr) => {
//   let largestNumber = arr[0];
//   let secondeLargestNumber = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       secondeLargestNumber = largestNumber;
//       largestNumber = arr[i];
//     } else if (arr[i] > secondeLargestNumber) {
//       secondeLargestNumber = arr[i];
//     }
//   }
//   return secondeLargestNumber;
// };

// console.log(getSecondLargestNumber([11, 2, 44, 7, 47]));

// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const calc = (a, b, callback) => callback(a, b);

// console.log(calc(1, 2, add));
// console.log(calc(1, 2, multiply));

// const largestNumber = (arr) => Math.max(...arr);
// const multiply = (a, b) => a * b;
// const calc = (a, b, callback) => callback(a, b);

// console.log(calc([11, 2, 47], add));
// console.log(calc([11, 2, 47], multiply));
// console.log(largestNumber([11, 2, 47]));

// function allLongestStrings(inputArray) {
//   let max = 0;
//   let maxArr = [];
//   const separateArr = inputArray.map((arr) => {
//     return arr.split(',');
//   });

//   const result = separateArr.map((arr) => arr.join());

//   for (let i = 0; i < result.length; i++) {
//     if (result[i].length > max) {
//       max = result[i].length;
//     }
//   }
//   for (let i = 0; i < result.length; i++) {
//     if (result[i].length === max) {
//       maxArr.push(result[i]);
//     }
//   }
//   return maxArr;
// }

// console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));

// console.log(['aba'].join().length);

// function allLongestStrings(inputArray) {
//   let longestLength = 0;
//   const longestWords = [];

//   inputArray.forEach((word) => {
//     longestLength = word.length > longestLength ? word.length : longestLength;
//   });

//   inputArray.forEach((word) => {
//     if (word.length === longestLength) {
//       longestWords.push(word);
//     }
//   });
//   return longestWords;
// }

// console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));

// function alternatingSums(a) {
//   let firstTeam = [];
//   let secondTeam = [];

//   for (let i = 0; i < a.length; i += 2) {
//     firstTeam.push(a[i]);
//   }
//   const firstTeamSum = firstTeam.reduce((prev, cur) => prev + cur);

//   for (let i = 1; i < a.length; i += 2) {
//     secondTeam.push(a[i]);
//   }
//   const secondTeamSum = secondTeam.reduce((prev, cur) => prev + cur);

//   return [firstTeamSum, secondTeamSum];
// }

// console.log(alternatingSums([50, 60, 60, 45, 70]));

// let j = 1;
// console.log((j = j + 1));
// console.log((j += 1));
// console.log(j++);

// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
//   return yourLeft + yourRight === friendsLeft + friendsRight ? true : false;
// }

// console.log(areEquallyStrong(10, 15, 15, 10));
// console.log(areEquallyStrong(15, 10, 15, 10));
// console.log(areEquallyStrong(15, 10, 15, 9));

// function areSimilar(a, b) {
//   let obj1 = {};
//   let obj2 = {};

//   a.forEach((num) => {
//     if (obj1[num]) {
//       return obj1[num]++;
//     } else {
//       return (obj1[num] = 1);
//     }
//   });

//   b.forEach((num) => {
//     if (obj2[num]) {
//       return obj2[num]++;
//     } else {
//       return (obj2[num] = 1);
//     }
//   });

//   return JSON.stringify(obj1) == JSON.stringify(obj2);
// }

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));

// function arrayChange(inputArray) {

//   return inputArray.join('').length
// }

// console.log(arrayChange([1, 1, 1]));

// console.log([3, 4, 5, 6, 7, 8].splice(2, 4));

// //splice
// var array=[1,2,3,4,5];
// console.log(array.splice(2));

// //slice
// var array2=[1,2,3,4,5]
// console.log(array2.slice(2));

// console.log("----after-----");
// console.log(array);
// console.log(array2);

// function arrayConversion(inputArray) {
//   const firstIteration = [];
//   const secondIteration = [];
//   const thirdIteration = [];

//   for (let i = 0; i < inputArray.length; i += 2) {
//     firstIteration.push(inputArray[i] + inputArray[i + 1]);
//   }

//   for (let i = 0; i < firstIteration.length; i += 2) {
//     secondIteration.push(
//       firstIteration.slice(i, i + 2).reduce((a, b) => a * b)
//     );
//   }

//   for (let i = 0; i < secondIteration.length; i += 2) {
//     thirdIteration.push(
//       secondIteration.slice(i, i + 2).reduce((a, b) => a + b)
//     );
//   }
//   return thirdIteration;
// }

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

// function arrayConversion(inputArray) {
//   let isOdd = true;

//   while (inputArray.length !== 1) {
//     inputArray = sumProduct(inputArray, isOdd);
//     isOdd = !isOdd;
//   }

//   return inputArray[0];
// }

// function sumProduct(nums, isOdd) {
//   let sumProducts = [];

//   if (isOdd) {
//     for (i = 0; i < nums.length; i += 2) {
//       sumProducts.push(nums[i] + nums[i + 1]);
//     }
//   } else {
//     for (i = 0; i < nums.length; i += 2) {
//       sumProducts.push(nums[i] * nums[i + 1]);
//     }
//   }
//   return sumProducts;
// }

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

let student = { name: 'kyu', age: 29 };
let { name, age } = student;

let score = [78, 99, 81];
let [kyu, sammi] = score;

console.log(age);
console.log(kyu);
