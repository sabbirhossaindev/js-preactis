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
var money = 10000;
if (money > 80000) {
    console.log('Mama mac use korta hoba');
}
else if (money > 60000 && money <= 80000) {
    console.log('Mama mac use korta hoba');
}
else if (money > 40000 && money <= 60000) {
    console.log('gaming laptop hur ree !!!');
}
else if (money > 20000 && money <= 40000) {
    console.log('levono laptop kinta hoba');
}
else {
    console.log('techno phn kinta hoba');
}