// Printing Hello World in Dunction

function greet() {
    console.log("Hello World");
}

greet()


// adding two interger
function add(a, b) {
    return a + b
}

console.log(add(2, 3));


// calculating the square of a number
function sqrt(a) {
    return a * a
}

console.log(sqrt(7));


// checking whether a number is even or odd
function evenOdd() {
    let num = Number(prompt("Enter a Number"))
    if(num%2 == 0){
        console.log("Number is Even!");
    }else  {
        console.log("Number is Odd!");
    }
}

evenOdd();


//convert Celsius to Fahrenheit
function weather() {
    let cel = Number(prompt("Enter the Celcius"));
    let Fahre;

    Fahre = (9/5)*cel + 32;

    console.log(`Fahrenheit is ${Fahre}`); 
}

weather();


//function with default parameter


function def(user = "Guest") {
    console.log(user)
}

def()



// function for greater of two numbers


function greatest(a, b) {
    if (a > b) {
        console.log(`${a} is gretest`);
    } else if (b > a) {
        console.log(`${b} is gretest`);
    } else {
        console.log("Both are equal");

    }
}

greatest(9, 9);



//function for calcultaing area of ractangle


function ract(l, w) {
    console.log(l * w);
}

ract(4, 5);


// Function for valid age
function validAge(age) {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
}

validAge(18);
validAge(17);



//Function of multiplication using function expression


let multiple = function (a, b) {
    return a * b;
}

console.log(multiple(3, 2));



// normal funcion
function add(a, b) {
    return a + b
}

console.log(add(2, 3));


// Arrow funcion
const add2 = (a, b) => {
    return a + b
}

console.log(add2(9, 3));



// Adding multiple numbers using rest operator
const addNums = (...values) => {
    let total = 0;

    for (value of values) {
        total += value;
    }

    return total;
}


console.log(addNums(1, 2, 3, 4, 5, 6, 7));




//Funtion for counting if string has vowels
function vowels(str) {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;

        }
    }

    return count
}

console.log(vowels("Priyanka"));




//Function to check the word is palindrome or not
function palindrome(pali) {

    let checkPali = pali.toLowerCase();

    let reversed = checkPali.split("").reverse().join("");

    if (checkPali === reversed) {
        return "This is Polindrome"
    } else {
        return "This is not a Polindrome"
    }
}


console.log(palindrome("121"));





//function using setTimeout
function greetings(name) {
    console.log(`Hello ${name}!`);
}

setTimeout(function(){
    greetings("Sachin");
},2000);

console.log("Waiting for greetings...");




// Function to use callback
function cal(callit) {
    callit();
    callit();
}

function sayHello(a, b) {
  console.log("Hello!");
}

cal(sayHello);





// function returning another function
function outerfn() {
    return function innerfn() {
        console.log("Inner calling Hey");
    }
}

const result = outerfn();


result();



//printing pure function
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 4));





// impure function
let count = 0;

function impure() {
    count++
    return count
}

console.log(impure());
console.log(impure());







//factorial function
function factorial(n) {
    if (n === 1){
        return 1;
    }


    return n * factorial(n - 1);
}


console.log(factorial(5));





// recursive fibonacci function
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}


console.log(fib(8));
