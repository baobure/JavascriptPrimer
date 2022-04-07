// var tweet = prompt("Compose your tweet:");
// tweet.slice(0,140);
// alert(tweet.slice(0,140));


//alert(prompt("Compose tweet: ").slice(0,140));

// Number of tweets made and characters remaining

// Converting word to uppercase

// var name = "Barnabas";
// name = name.toUpperCase();
// name = name.toLowerCase();

/*

// Create a name but the first word should be capitalized
//Steps
//1. Create a variable that stores the user input via prompt
var name = prompt("What is your name? ");
//2. capitalize the first letter

//a. Isolate the first characters
var  firstChar = name.slice(0,1);

//b. Turn the first char to uppercase
var upperFirstChar = firstChar.toUpperCase();

//c. Isolate the rest of the characters
var otherChar = name.slice(1,name.length);

//D. change other names to lowercase
otherChar = otherChar.toLowerCase(); 
//e. concactennate the first char with the rest
var concacNamesCapitalised = upperFirstChar + otherChar;

//3. Use the cpitalized name to greet them using alert
alert("Hello," + concacNamesCapitalised);

*/
/*
//Converting lculating Dog age into human
var dogAge = prompt("How old is your dog? ");
var humanAgeCalc = ((dogAge - 2) * 4) + 21;
alert("Your dog's age in human is " + humanAgeCalc);
*/
/*
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
var numberOfBottles = Math.floor(money/1.5);
console.log("buy " + numberOfBottles + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(5);
*/
/*
//Life in weeks

function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var days = yearsRemaining *365
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days +"days," + weeks + "weeks, and" + months + "months left." );
}

lifeInWeeks(12);
*/


/*
//Create a BMI bmiCalculator
function bmiCalculator (weight, height) {
    
    var bmi = weight / (Math.pow(height, 2));
    
    var interpretation;
    
    if (bmi < 20) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    }
    else if (bmi < 25) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    }
    else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }
    
    
    return interpretation;
}
*/

/*
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
*/

//two prompt that asks for the names of the two people
// calculate a random number that is a percentage. beteen 1 and 100
//return the information back in the form of an alert telling them what percentage they score.

/*
//Create a Love Calculator
prompt("What is the his name? ");
prompt("What is the her name? ");
var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
if (lovescore > 70){
  alert("Your love score is " + lovescore +"%," + " You love each other like Kanye loves Kanye");
} 
if (lovescore > 30 && lovescore < 70){
  alert("Your love score is " + lovescore +"%,");
}
if (lovescore < 30){
  alert("Your love score is " + lovescore +"%" + " You go together like oil on water");
}
*/

// Leap Year Detector.
/*

function isLeap(year) {
  if (year % 4 === 0 ){
    if(year % 100 === 0){
      if (year % 400 === 0){
        return "Leap year"
      }else return "Not leap year"
    }else return "Leap year"
  }
  else{
    return"Not leap year"
  }
}
*/

//Collections working with Arrays in javascript
/*
var guestList = ["Barnabas", "Godwin", "Ezekiel", "Justin"]
var guestName = prompt("What is your name? ");
if (guestList.includes(guestName)){
  alert("Welcome");
}else{
  alert("Sorry, maybe next time");
}
*/

/*
//fizzBuzz challenge

var output = [];

function fizzBuzz() {
  for (var count = 1; count < 101; count ++) {
  if (count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
  }else if (count % 3 === 0){
    output.push("Fizz");
  }else if (count % 5 === 0){
    output.push("Buzz");
  }
  else {
    output.push(count);
  }
  }
  console.log(output);
}
*/
/*
*/

/*
// Who is buying launch?

const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPositions = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPositions];

  return randomPerson + " is going to buy lunch today!";
}



*/
/*

// 99 Bottles of beer song challenge'
var numberOfBottles = 99;
  while (numberOfBottles =>0){
    var bottleWord = "Bottle";
    if (numberOfBottles ===1){
      bottleWord = "bottles";
    }
    console.log (numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
      numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
  }
*/

//Fibonacci Sequence
function fibonacciGenerator(n) {
  for (var fib = [0,1], i = 1; i < n; i++)
    fib.push(fib[i] + fib [i - 1])
  return fib
}


console.log(fibonacciGenerator(10))
/*
function listFibonacci(n) {
  // declare the array starting with the first 2 values of the fibonacci sequence
  // starting at array index 1, and push current index + previous index to the array
  for (var fibonacci = [0, 1], i = 1; i < n; i++) 
    fibonacci.push(fibonacci[i] + fibonacci[i - 1])

  return fibonacci
}

console.log(  listFibonacci(10)  )
*/