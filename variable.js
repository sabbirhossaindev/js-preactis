/* 
------------------
VARIABLE
-------------------
1. What is JavaScript?
2. How does JS Works?
3. What is Variable?
4. Declare a variable
5. Types of Variable? How can you find out type of a variable
6. Primitive and non-primitive data types
7. Naming Convention of JS variables
8. Math Operation +, -, *, /, %
9. Short hand: +=, -=, *=, /=
10. ++, --
11. parseInt, ParseFloat
12. toFixed
*/

// 1. What is JavaScript?
// => javscript is a high lavel, interpreated programming language use to make web page more Intersection.

// 2. How does JS Works ?
// => web design, mobile apps, stop watch, game, apps, flying robat, web server, web application etc.

// 3. What is Variable ?
// => In programming, a variable is a value that can change, depending on conditions or on information passed to the program

// 4. Declare a variable
var declare = "variable";
console.log(declare);

// 5. Types of Variable? How can you find out type of a variable
var chackType = "variable";
console.log(typeof chackType);

//6. Primitive and non-primitive data types
// Primitive Explore
//variable
var string = "sabbir";
//string
var number = 100;
// undefined
var a;
console.log(a);
// null
var nam = null;
console.log(nam);
// Boolen
var bool = true;
console.log(typeof bool)
var bools = false;
console.log(typeof bools)

//non-primitive data types
// 1. object
// 2. array
// 3. funtion

// 7. Naming Convention of JS variables
var myConvention = 100; // camelCase.

// 8. Math Operation +, -, *, /, %
var a = 10;
var b = 20;
console.log(a + b);

var a = 10;
var b = 20;
console.log(a - b);

var a = 10;
var b = 20;
console.log(a * b);

var a = 10;
var b = 20;
console.log(a / b);

var a = 10;
var b = 20;
console.log(a % b);

//9. Short hand: +=, -=, *=, /=
var myprices = 100;
console.log(myprices = myprices += 6);
var myprices = 100;
console.log(myprices = myprices -= 6);
var myprices = 100;
console.log(myprices = myprices *= 6);
var myprices = 100;
console.log(myprices = myprices /= 6);

// 10. ++, --
var dabuleSamation = 10;
dabuleSamation++;
console.log(dabuleSamation);

var dabuleSamation = 10;
dabuleSamation--;
console.log(dabuleSamation);