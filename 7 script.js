//! This is the Examples fro MRF

//! MAP

//! Example 1: Method 1:
//            const arr = [1,2,3,4,5]  
//            function double(ele){
//            return ele*2
//            }
//            const output = arr.map(double)
//            console.log(output);     //[2,4,6,8,10]    


//! Example 1: Method 2:
// const arr = [1, 2, 3, 4, 5]
// const output = arr.map(function (ele) {
//     return ele * 2
// })
// console.log(output);     //[2,4,6,8,10]  


//! Example 1: Method 3: using Arrow Function
// const arr = [1, 2, 3, 4, 5];
// const output = arr.map((ele) => {
//     return ele * 2;
// })                      //[2,4,6,8,10]


// ===> Example 1: Method 4: using Arrow Function
// when there is only one line in function which return something

// const arr1 = [1, 2, 3, 4, 5];
// const output = arr.map((ele) => ele * 2) ===> ele is going to arr1 array then multiple for inside the elements.
//     console.log(output);                //[2,4,6,8,10]

// *************************************************************************************************************************

//! Filter 

//! Example 1: Print the odd number
// const arr = [4, 3, 2, 1, 5];
// function odd(ele) {
//     return ele % 2 != 0;
// }
// const output = arr.filter(odd);
// console.log(output);              //[3,1,5]


//! Example 2: Print the even number
// const arr = [4, 3, 2, 1, 5];
// const output = arr.filter(function (ele) {
//     return ele % 2 == 0;
// });
// console.log(output);              //[4,2]


//! Example 2: Print the odd number using Anonymous function
// const arr = [4, 3, 2, 1, 5];
// const output = arr.filter(function{   //just ignored ele name that's anonymous fun
//     return ele % 2 == 0;
// });
// console.log(output);              //[4,2]


//! Example 2: Print the odd number using Arrow function
// const arr = [4, 3, 2, 1, 5];
// const output = arr.filter((ele) => ele % 2 == 0);
// console.log(output);              //[4,2]


//! Example 2: Print the odd and even number using Arrow function
// const arr = [4, 3, 2, 1, 5];
// const output = arr.filter((ele) => ele % 2 == 0);
// console.log(output);
// const output1 = arr.filter((ele) => ele % 2 != 0);
// console.log(output1);             // [ 4, 2 ] // [3, 1, 5 ] 
 
//! Example 3: Method 2:Print the greater than 2 number using Arrow function
// const arr = [4, 3, 2, 1, 5];
// const output = arr.filter((ele) => ele > 2);
// console.log(output);              //[ 4, 3, 5 ]

// *************************************************************************************************************************

//! Reduce

//! Example1:Normal program
//  Print the total value an Array

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);                 //15


//! Example1:Normal program using normal function
//  Print the total value an Array

// const arr = [1, 2, 3, 4, 5];
// function total(arr) {
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     }
//     return (sum);
// }
// console.log(total(arr));         //15


//! Example1:Program using reduce function
//  Print the total value an Array
// var/let/const newarrayname = arrayname.reduce(function (acc, curr) {

// }, initialvalue)

// const arr = [1, 2, 3, 4, 5];
// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;   //sum = sum + arr[i];
//     return acc;      //return(sum);
// }, 0)             //0 => initial value
// console.log(output);               // 15


//! Example2:Normal program
//  Print the maximum value an Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let max = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);           //9


//! Example2:Program with reduce function
//  Print the maximum value an Array

// const arr = [9, 2, 3, 5, 6, 7, 8]
// var output = arr.reduce(function (acc, curr) {
//     if (curr > acc) {
//         acc = curr;
//     }
//     return acc;
// }, 0)
// console.log(output)        //9 



//! Example1:API with MRF function    

// const users = [
//     { firstName: "Kamal", lastName: "Hasan", age: 60 },
//     { firstName: "Donald", lastName: "Trump", age: 60 },
//     { firstName: "Rajini", lastName: "Kanth", age: 50 },
//     { firstName: "Ajith", lastName: "Kumar", age: 40 },
// ];

// Print the firstName + lastName
// Using map function

// var output = users.map((x) => x.firstName + x.lastName)
// console.log(output);
// ['KamalHasan', 'DonaldTrump', 'RajiniKanth', 'AjithKumar']


// Print the firstName + lastName with space
// Using map function

// var output = users.map((x) => x.firstName + " " + x.lastName)
// console.log(output);
// ['Kamal Hasan', 'Donald Trump', 'Rajini Kanth', 'Ajith Kumar']


// Finding the age example 
// Using reduce function

// var output = users.reduce(function (acc, curr) {
// if (acc[curr.age])                   ===>//initially check wthether age is present or not 
// {
//     acc[curr.age] = ++acc[curr.age]; ===>//already the age is declared in else part then and once again added the age
//                                      ===> { 60: 2 }
// }
              
// else
// {
//     acc[curr.age] = 1                ===>//added in age 1time{60:1,50:1,40:1}  
// }

// return acc;
// }, { })
// console.log(output);                //{ '40': 1, '50': 1, '60': 2 }


// Find out the people who's age is less than 60
// Using filter function

// var output = users.filter((x) => x.age < 60)
// console.log(output);
// [{ firstName: 'Rajini', lastName: 'Kanth', age: 50 },
// { firstName: 'Ajith', lastName: 'Kumar', age: 40 }]
// The output will be displayed along with the Object inside the Array.
// output ஆனது Arrayக்குள் உள்ள Object உடன் சேர்த்து காட்டும்.


// Find out the firstname of all people who's age is less than 60
// Using filter and map function
// it's called chaining method 

// var output = users.filter((x) => x.age < 60).map((x) => x.firstName);
// console.log(output);
// ['Rajini', 'Ajith']
// output ஆனது Array ஆக மட்டும் காட்டும்.

// *************************************************************************************************************************