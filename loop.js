/* 
------------------
LOOP
------------------
1. Display "Ajke amar mon valo nei" for 39 times
2. Display numbers between 58 to 98
3. Show all even numbers from 412 to 456
4. Show all odd numbers 581 to 623
5. Difference between while loop and for loop
6. Declare an array for all the topics that you have learned last few days
display then as output
7. Create an array for all the mobile phones. Display all the elements of the array
by using a while loop
8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
9. Write the price of the books that you have. 
Display the prices if the prices is lower than 200
*/

//1. Display "Ajke amar mon valo nei" for 39 times
var i = 39;
for (var i = 1; i <= 39; i++) {
    console.log('ajka amr mon valo nai');
}

//2. Display numbers between 58 to 98
var i = 98;
for (var i = 58; i <= 98; i++) {
    console.log(i);
}

//3. Show all even numbers from 412 to 456
var i = 412;
for (var i = 412; i <= 456; i+=2) {
    console.log(i);
}

//4. Show all odd numbers 581 to 623
var i = 481;
for (var i = 481; i <= 623; i+=2) {
    console.log(i);
}

//5. Difference between while loop and for loop
// while loop
// while (expression) {
//     // statement
// }
var value = 0;
while (value < 5) {
    console.log('while loop');
    value = value + 1;
}
// loop
// for (initialization; condition; final - expressing){
//     // statement;
// }
for (var i = 0; i < 5; i++) {
    console.log('for loop');
}

//7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop
var useMobile = ['robi', 'symphony-i97', 'techno'];
// pari na;

//8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
// break explore
var numbers = [45, 87, 89, 99, 30, 32, 33, 42, 44, 55,];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 44) {
        continue;
    }
    console.log(number);
}

//9. Write the price of the books that you have. Display the prices if the prices is lower than 200