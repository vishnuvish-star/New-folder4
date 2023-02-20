//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//and height in meter)

//marks
// let marksweight = 78;
// let marksheight = 1.69;

// let marksBMI = "Marksbmi:" + marksweight / (marksheight * marksheight);
// console.log(marksBMI);

// //jhon
// let jhonweight = 92;
// let jhonheight = 1.75;

// let jhonBMI = "Jhonsbmi:" + jhonweight / (jhonheight * jhonheight);
// console.log(jhonBMI);

// //result
// let result = marksBMI < jhonBMI;
// console.log(result);

// //testcase2
// //marks
// let MARKSWEIGHT = 95;
// let MARKSHEIGHT = 1.88;
// let MARKSBMI = "Marksbmi:" + MARKSWEIGHT / (MARKSHEIGHT * MARKSHEIGHT);
// console.log("testcase 2:");
// console.log(MARKSBMI);
// //jhon
// let JHONWEIGHT = 85;
// let JHONHEIGHT = 1.76;

// let JHONBMI = "Jhonsbmi:" + JHONWEIGHT / (JHONHEIGHT * JHONHEIGHT);
// console.log(JHONBMI);

// //RESULT
// let testcaseTWO = MARKSBMI > JHONBMI;
// console.log(testcaseTWO);

// if (marksBMI > jhonBMI) {
//   console.log("Marks bmi is less than jhon bmi");
// } else {
//   console.log("No! its wrong");
// }
// if (MARKSBMI > JHONBMI) {
//   console.log("jhon bmi is greater than marks");
// } else {
//   console.log("it's true");
// }
// coding challenge #3
// const dolphinsTeamAverage = (96 + 108 + 89) / 3;
// const kolasTeamAverage = (88 + 91 + 110) / 3;

// if (dolphinsTeamAverage > kolasTeamAverage) {
//   console.log(
//     `DolphinsTeamAverage ${dolphinsTeamAverage} so,this team are winner`
//   );
// } else if (dolphinsTeamAverage < kolasTeamAverage) {
//   console.log(`KolasTeamAverage ${kolasTeamAverage} so,this team are winner`);
// } else if (dolphinsTeamAverage === kolasTeamAverage) {
//   console.log(
//     `dolphins${dolphinsTeamAverage} kolas${kolasTeamAverage} Draw the game`
//   );
// } else {
//   console.log(`game result not found`);
// }
// data 2
// const dolphinsScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 10) / 3;

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log(`${dolphinsScore} dolphins team are winner`);
// } else if (dolphinsScore === koalasScore) {
//   console.log(`same score`);
// } else if (dolphinsScore < koalasScore && koalasScore >= 100) {
//   console.log(`${koalasScore} koalas team are winner`);
// } else {
//   console.log(`not found`);
// }
//  switch cases
// const peoplesLanguages=prompt("enter your language");
// switch (peoplesLanguages) {
//   case "Chinese":
//     console.log(`${peoplesLanguages}MOST number of native speakers!`);
//     break;
//   case "Spanish":
//     console.log(
//       `${peoplesLanguages}2nd place in the number of native speakers`
//     );
//     break;
//   case "English":
//     console.log(`${peoplesLanguages}3rd place`);
//     break;
//   case "Hindi":
//     console.log(`${peoplesLanguages}Number 4`);
//     break;
//   case "Arabic":
//     console.log(`${peoplesLanguages}5th most spoken language`);
//     break;
//   default:
//     console.log(`Not in a language this list`);
//     break;
// }
// The Conditional (Ternary) Operator

// const billPayment = 350;
// const tip =
//   billPayment >= 50 && billPayment <= 300
//     ? billPayment * 0.15
//     : billPayment * 0.2;
// console.log(
//   `The Bill is ${billPayment} , ${tip} is tips you  gave .so,total is payment ${
//     billPayment + tip
//   }`
// );
