//Q1
var x = prompt("Where do you live?");
if (x === "karachi") {
    alert("Welcome to the city of lights!");
}

//Q2
var x = prompt("What is you Gender?");
if (x === "Male") {
    alert("Good Morning Sir!");
}
if (x === "Female") {
    alert("Good Morning Mam!");
}

//Q3
var x = prompt("Signal color?");
if (x === "Red") {
    alert("Must Stop");
}
if (x === "Yellow") {
    alert("Ready to move");
}
if (x === "Green") {
    alert("Move now!");
}


//Q4
let remainingFuel = parseFloat(prompt("Enter the remaining fuel in litres:"));

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}


//Q5
//a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//Ans true


//b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//Ans false

//c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
//Ans false

if (c === 13) {
    alert("condition 2 is true");
}
//Ans true
if (++c < 14) {
    alert("condition 3 is true");
}
//Ans false
if (c === 14) {
    alert("condition 4 is true");
}
//Ans true

//Q7
const secretNumber = (10);

let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber);
}

//Q8
let number = (prompt("Enter a number:"));

if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}

//Q9

//let number =  (prompt("Enter a number:"));

if (number % 2 === 0) {
    alert(number + " is an even number.");
} else {
    alert(number + " is an odd number.");
}

//Q10
let temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("The weather is freezing!");
}
