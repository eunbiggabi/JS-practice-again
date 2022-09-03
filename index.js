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

let num = 0;

function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
  if (num >= 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
