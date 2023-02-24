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
// functions
// const nation = "india";
// const peoples = "110";
// const cityOfNation = "delhi";
// const nationOfUk = "England";
// const peoplesOfUk = "56";
// const cityOfNationOfUk = "London";
// function describeCountry(country, population, capitalCity) {
//   return console.log(
//     `${country} has ${population} million people and its capital city is ${capitalCity}`
//   );
// }
// describeCountry(nation, peoples, cityOfNation);
// describeCountry(nationOfUk, peoplesOfUk, cityOfNationOfUk);

// function total(numOne, numTwo) {
//   return console.log(numOne + numTwo);
// }
// total(2, 5);

// function percentageOfWorld1(population) {
//   const percentage = (population / 7900) * 100;
//   return console.log(` China has ${population} million people, so it's about ${percentage} of
// the world population`);
// }
// percentageOfWorld1(1101);
// const percentageOfWorld3 = (population) => {
//   const percentage = (population / 7900) * 100;
//   return console.log(` India has ${population} million people, so it's about ${percentage} of
// the world population`);
// };
// percentageOfWorld3(2113);

// const dolphinsScore = (44 + 23 + 71) / 3;
// const koalasScore = (65 + 54 + 49) / 3;
// const calcAverage = () => {
//   if (dolphinsScore >= 2 * koalasScore) {
//     console.log("The winner is dolphins");
//   } else {
//     console.log("The winner is dolphins");
//   }
// };
// FUNCTION CALLING
// calcAverage();
//TEST DATA #2

// const dolphinsScoreTwo = (85 + 54 + 41) / 3;
// const koalasScoreTwo = (23 + 34 + 27) / 3;
// const averageOfSecondGame = () => {
//   if (dolphinsScoreTwo >= 2 * koalasScoreTwo) {
//     console.log("Dolphins are winner of this game");
//   } else {
//     console.log("Kolas are winner of this game");
//   }
// };
// // CALL THE FUNCTION
// averageOfSecondGame();

// ARRAY
// const populations = [110, 228, 48, 49, 67, 354];
// console.log(populations.length);
// // const calculateLength = populations.length - 1;
// // console.log(calculateLength);
// if (populations.length === 6) {
//   console.log("Populations array length is equal 6");
// } else {
//   console.log("Populations array length lesser than  6");
// }

// ARRAY METHODS

// const neighbours = ["SRI LANKA", "BANGALADESH", "PAKISTAN", "WEST INDIES"];
// console.log(neighbours); //original array

// const neighboursAdd = neighbours.push("Utopia", "africa"); //push method add data end of an arry
// console.log(neighboursAdd);

// const neighboursAddStart = neighbours.unshift("india", "nepal"); //Add the data from starting position
// console.log(neighboursAddStart);

// const neighboursRemove = neighbours.pop(); //pop method remove a data ,end of the array and its kept only remove a particular data
// console.log(neighboursRemove);
// const neighboursRemoveStart = neighbours.shift(); //remove the data from starting
// console.log(neighboursRemoveStart);
// const myCountry = {
//   country: "india",
//   capital: "delhi",
//   language: "tamil",
//   populations: 110,
//   neighbours: ["west indies", "pakistan", "sri lanka"],
// };
// console.table(myCountry);
// console.log(`${myCountry.country} has ${myCountry.populations} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries
// and a capital called ${myCountry.capital}`);
// console.log((myCountry.populations += 2));

// you used braket notations --- Inside the brackets, write the property name as a string.
// console.log((myCountry["populations"] -= 3));
// console.log(myCountry["capital"]);
// myCountry.states = 28;
// console.log(myCountry["states"]);
//  code challaeng #7

// OBJECT CREATIONS

// const markMiller = {
//   firstName: "mark",
//   lastName: "miller",
//   marksMass: 78,
//   marksHeight: 1.69,
//   fullName: function () {
//     return `${this.firstName}` + `${this.lastName}`;
//   },
//   //   BMI CALCULATIONS
//   calcMarksBmi: function () {
//     return (
//       `${this.marksMass}` / (`${this.marksHeight}` * `${this.marksHeight}`)
//     );
//   },
// };
// // console.log(markMiller.fullName());
// console.log(markMiller.calcMarksBmi());
// let marksMillerBmi = markMiller.calcMarksBmi().toFixed(1);

// JOHN DETAILS

// const johnSmith = {
//   firstName: "john",
//   lastName: "smith",
//   johnMass: 92,
//   johnHeight: 1.95,
//   fullName: function () {
//     return `${this.firstName}` + `${this.lastName}`;
//   },
//   //   BMI CALCULATIONS
//   calcJohnBmi: function () {
//     return `${this.johnMass}` / (`${this.johnHeight}` * `${this.johnHeight}`);
//   },
// };
// console.log(johnSmith.fullName());
// console.log(johnSmith.calcJohnBmi());
// let johnSmithBmi = johnSmith.calcJohnBmi().toFixed(1);

// bmi compare
// console.log(markMiller.calcMarksBmi() > johnSmith.calcJohnBmi());

// BMI CONDITION Compare

// if (marksMillerBmi > johnSmithBmi) {
//   console.log(
//     `BMI (${marksMillerBmi}) is higher than John's (${johnSmithBmi})!`
//   );
// } else {
//   console.log(
//     ` BMI (${johnSmithBmi}) is higher than ${markMiller.fullName} (${markMillerBmi})!`
//   );
// }
// let calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const billValues = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// // create empty array
// const tips = [];
// const totals = [];

// for (let i = 0; i < billValues.length; i++) {

// variable creation for calcTip function and pass the parameter of billValue

//   const tip = calcTip(billValues[i]);

//push the TIP variables into tips[] array

//   tips.push(tip);
//   totals.push(tip + billValues[i]);
// }
// console.log(billValues, tips, totals);
// calcTip(100);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
