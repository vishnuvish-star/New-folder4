//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//and height in meter)

//marks
let marksweight = 78;
let marksheight = 1.69;

let marksBMI = "Marksbmi:" + marksweight / (marksheight * marksheight);
console.log(marksBMI);

//jhon
let jhonweight = 92;
let jhonheight = 1.75;

let jhonBMI = "Jhonsbmi:" + jhonweight / (jhonheight * jhonheight);
console.log(jhonBMI);

//result
let result = marksBMI < jhonBMI;
console.log(result);

//testcase2
//marks
let MARKSWEIGHT = 95;
let MARKSHEIGHT = 1.88;
let MARKSBMI = "Marksbmi:" + MARKSWEIGHT / (MARKSHEIGHT * MARKSHEIGHT);
console.log("testcase 2:");
console.log(MARKSBMI);
//jhon
let JHONWEIGHT = 85;
let JHONHEIGHT = 1.76;

let JHONBMI = "Jhonsbmi:" + JHONWEIGHT / (JHONHEIGHT * JHONHEIGHT);
console.log(JHONBMI);

//RESULT
let testcaseTWO = MARKSBMI > JHONBMI;
console.log(testcaseTWO);

if (marksBMI > jhonBMI) {
  console.log("Marks bmi is less than jhon bmi");
} else {
  console.log("No! its wrong");
}
if (MARKSBMI > JHONBMI) {
  console.log("jhon bmi is greater than marks");
} else {
  console.log("it's true");
}
