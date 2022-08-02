/* 
--------------------
CONDITIONALS
--------------------
1. meaning of: >, <, >=, <=, ==, !=, ===, !==, 
2. Meaning of &&
3. Meaning of ||
4. Let's say you have x amount of money. if you have more than 80,000, then you will by a mac
if more than 60,000 then you will by gaming laptop
if you more than 40,000 then  you will by Lenovo Yoga
if you have more than 20, 000 then  you will by an used laptop
otherwise, you will use you mobile phone
*/

//1. meaning of: >, <, >=, <=, ==, !=, ===, !==,
//  > gaterdan
//  < lesdan
//  >= gaterdan equal
//  <= lessdan equal
//  == dubel equal
//  != not equal
//  === equal value eqal type
//  !== not equal value or not eqal type

// 2. Meaning of &&
// => AND


// 2. Meaning of ||
// => OR

/*4. Let's say you have x amount of money. if you have more than 80,000, then you will by a mac
if more than 60,000 then you will by gaming laptop
if you more than 40,000 then  you will by Lenovo Yoga
if you have more than 20, 000 then  you will by an used laptop
otherwise, you will use you mobile phone
*/
var macAmount = 800000;
var gamingLaptop = 60000;
var lenovoYoga = 40000;
var phoneAmount = 20000;
if (macAmount > gamingLaptop) {
    console.log('Mama mac use korta hoba');
}
else if (macAmount > lenovoYoga) {
    console.log('Mama mac use korta hoba');
}
else if (macAmount > phoneAmount) {
    console.log('Mama mac use korta hoba');
}
else if (gamingLaptop > lenovoYoga) {
    console.log('gaming laptop hur ree !!!');
} 
else if (gamingLaptop > lenovoYoga) {
    console.log('gaming laptop hur ree !!!');
} 
else {
    console.log('phone ii kinta hoba');
}