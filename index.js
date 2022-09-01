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

function whosPaying(names) {
  for (let i = 0; i < names.length; i++) {
    let payingPerson = Math.floor(Math.random() * 5);
    return `${names[payingPerson]} is going to buy lunch today!`;
  }
}

console.log(whosPaying(['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe']));
