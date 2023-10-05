const Height = Number(prompt("Enter your height in inches."))
const Weight = Number(prompt("Enter weight in pounds."))
const step1 = Height * Height
const step2 = Weight / step1
const BMI = step2 * 703
console.log("Your BMI is:")
console.log(BMI)
if (BMI <18.5){
console.log("You are underweight")
} else if (BMI >18.5 && BMI <24.9) {
    console.log("You are normal")
} else if (BMI >25  && BMI <29.9) {
    console.log("You are overweight")
} else if (BMI >30) {
    console.log("You are obese")
}