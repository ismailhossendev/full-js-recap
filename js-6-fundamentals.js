/* qestions
১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?var নামক একটা জিনিস আছে সেটাও জানতে হবে। 

২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, >=, <=, ==, !=, ===, !==) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে। 

২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো। else ছাড়া শুধু if দিয়েও কন্ডিশন লিখো। একটা if অনেকগুলা else if এবং লাস্টে একটা else এর কন্ডিশন লিখো। হতে পারে গ্রেডিং বের করার জন্য কন্ডিশন লিখবে তুমি। 

৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? কোন একটা জিনিস array কিনা সেটা চেক করার সিস্টেম জানতে হবে। আরেকটু ভালো হয় slice এবং splice জানলে। আরো বোনাস কিছু জানতে চাইলে shift, unshift, join দেখতে পারো। এডভান্স হিসেবে reduce দেখতে পারো। 

৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। এছাড়া কখন for of আর কখন for in ইউজ করবে সেটা তুমি জানো।

৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কখন করে না। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। কিভাবে কল করে। ফাংশন এর রিটার্ন কোন ভেরিয়েবলে রেখে সেই ভেরিয়েবল নিয়ে কিভাবে কাজ করে।

j

*/


/* 
    ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?var নামক একটা জিনিস আছে সেটাও জানতে হবে। 
       let= let is reassinable and block Scope variable.
       const=  const not reassinable and block scope variable.
        Also you can not redeaclear let and const .

       var= var is reassinable and Global scope variable and Function scope variable .
       also can you redeclear var.

*/

//২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, >=, <=, ==, !=, ===, !==) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে।

/* 
    > getter then 10>5 = true
    < less then 10<5 = false
    >= getter then or equal 10>=10 = ture
    <= less then or equal 10<=10 = ture

    == value qual equal 10=="10" = true
    != not equal 10!=10 = false
    === value and type equal 10==="10" = false // value equal but type not equal
    !== equal value and type both

    || or condition that means two condion one match to true 
    && and conditions that means need to two condion is true then is enter 
*/
//২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো। else ছাড়া শুধু if দিয়েও কন্ডিশন লিখো। একটা if অনেকগুলা else if এবং লাস্টে একটা else এর কন্ডিশন লিখো। হতে পারে গ্রেডিং বের করার জন্য কন্ডিশন লিখবে তুমি।

if (10 === 10 && 5 === 6) {
        // console.log(true);
}
else if (typeof "10" === 'number') {
    // console.log('is number');
}
else {
    // console.log('not a number');
}

//৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? কোন একটা জিনিস array কিনা সেটা চেক করার সিস্টেম জানতে হবে। আরেকটু ভালো হয় slice এবং splice জানলে। আরো বোনাস কিছু জানতে চাইলে shift, unshift, join দেখতে পারো। এডভান্স হিসেবে reduce দেখতে পারো।

const array = [10, 20, 30, 40, 50, 60,19];
// console.log(Array.isArray(array)); how to check is array

// console.log(array.splice(1,3));
// const array1 = [10, 20, 30, 40, 50, 60,19];
// console.log(array1.slice(1,3));
// array.shift() //shift is delete 0 elementd
// array.unshift(20) // unshift is add on 0 elements
// console.log(array);

// const arrayStr = ['ismail', 'kuakata', 'patuakhali'];
// console.log(arrayStr.join('-'));
// console.log(arrayStr);
// console.log(array.join(' - '));
// console.log(array);

// console.log(array.reduce((p,q) => p+q,0));



//৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। এছাড়া কখন for of আর কখন for in ইউজ করবে সেটা তুমি জানো।

//this is for loop 
for (let i = 0; i < 10; i++){
    // console.log(i);
}
let i = 0;
// this is while loop 
while (i < 10) {
    // console.log(i);
    i++
}
for (number of array) {
    // console.log(number);
}
const student = { name: 'ISMAIL', address: 'kuakata' };
for (ismail in student) {
    // console.log(ismail); this is not give array
}
// console.log(Object.keys(student)); this is return an array



//৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কখন করে না। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। কিভাবে কল করে। ফাংশন এর রিটার্ন কোন ভেরিয়েবলে রেখে সেই ভেরিয়েবল নিয়ে কিভাবে কাজ করে।
function myFunction(a,b) {
    return a + b;
}//this is Ragular function declareations
// console.log(myFunction(10,20));
const myFunction2 = (a, b) => a + b; // this is array function


// ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়।

const students = [
    {
        name: 'ismail', id: 1,
        address: {
            city: 'kuakata',
            country:'bd'
        }
    },
    {
        name: 'Read', id: 2,
        address: {
            city: 'kuakata',
            country:'bd'
        }
    },
    {
        name: 'sakib', id: 3,
        address: {
            city: 'kuakata',
            country:'bd'
        }
    },
]
//console.log(Object.values(students[0])); for one students details

for (details of students) {
    // console.log(Object.values(details));
}
