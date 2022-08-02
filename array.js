/* 
---------------------
ARRAY
-----------------------
1. What is the purpose?
2. How to declare an array in JS
3. Number of elements in an Array
4. What is index? 
5. Find the value of an element by index
6. Change an element by index
7. get the index of an element by the value
8. what does it mean when you get undefined while getting the value of an element by index
9. How can you add an element to an array at the last position
10. How can you remove the last element from array
11. Add an element at the first position of an array
12. Remove the first element of an array
*/


//1. What is the purpose?
// In this article, we discuss what JavaScript can be used for on the web, its downsides, and how to use it responsibly.

//2. How to declare an array in JS
var broNames = ['sabbir', 'nadim', 'arsh'];

//3. Number of elements in an Array
var declareArray = [12, 20, 54, 77];

//4. What is index?
//index. js typically handles your app startup, routing and other functions of your application and does require other modules to add functionality.

//5. Find the value of an element by index
var numbers = [12, 54, 87, 90, 44];
var position = numbers.indexOf(44);
console.log(position);

//6. Change an element by index
var numbers = [12, 54, 87, 90, 44];
numbers[1] = [60];
console.log(numbers);

//7. get the index of an element by the value
var numbers = [12, 54, 87, 90, 44];
var value = numbers.indexOf(87);
console.log(value);

// 8. what does it mean when you get undefined while getting the value of an element by index


// 9. How can you add an element to an array at the last position
var value = [12, 54, 87, 90, 44];
value.push(30);
console.log(value);