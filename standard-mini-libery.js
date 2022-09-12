/* 
    স্ট্যান্ডার্ড ছোট ছোট কয়েকটা লাইব্রেরি আছে সেগুলা হালকা করে হলেও জানতে হবে। 

    ১. Math দিয়ে min, max, ceil, floor, abs, round, random ইত্যাদি দেখে রাখতে হবে। যদি লাগে যেন বের করে ফেলতে পারো 

    ২. Date কিভাবে ডিক্লেয়ার করে। সেখান থেকে সময় কিভাবে বের করে নেয় বা দরকার হলে সময় কিভাবে ফরম্যাট করে সেটা জানতে হবে 

    ৩. আগে না হয় পরে রেগুলার এক্সপ্রেশন কি জিনিস এবং কিভাবে এপ্লাই করে। কি কারণে এপ্লাই করে সেটা জানতে হবে 

    ৪. এটলিস্ট JSON কিভাবে parse করে বা stringify করে সেটা জানতে হবে 
*/

// ১. Math দিয়ে min, max, ceil, floor, abs, round, random ইত্যাদি দেখে রাখতে হবে। যদি লাগে যেন বের করে ফেলতে পারো 
const numbers = [10, 20, 30, 40, 50, 60];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));
// console.log(Math.ceil(1.5));//this is 1.1 it make is 2 ;
// console.log(Math.floor(1.9)); // this is 1.9 make it 1
// console.log(Math.abs(-500)); // if you give negitive value it make it positive value
// console.log(Math.round(15.6)); it 1.5 make this 1 and 1.6 it make 2.
// console.log(Math.random(5)*100);// this is genarate random numbers.


// ২. Date কিভাবে ডিক্লেয়ার করে। সেখান থেকে সময় কিভাবে বের করে নেয় বা দরকার হলে সময় কিভাবে ফরম্যাট করে সেটা জানতে হবে
   
function nowTime() {
    const date = new Date;
    let hour = date.getHours();
    if (12 < hour) {
        hour = hour - 12;
    }
    const minutes = date.getMinutes();
    const secend = date.getSeconds();
    const times = `Your Time Is ${hour}:${minutes} ${secend}`
    // console.log(times);
}
nowTime()


// ৩. আগে না হয় পরে রেগুলার এক্সপ্রেশন কি জিনিস এবং কিভাবে এপ্লাই করে। কি কারণে এপ্লাই করে সেটা জানতে হবে 
const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
// More for Watch https://www.youtube.com/watch?v=5ckmCW8png0



// ৪. এটলিস্ট JSON কিভাবে parse করে বা stringify করে সেটা জানতে হবে 
const hello = 'hello';
const str = JSON.stringify(hello);
// console.log(str);
// console.log(JSON.parse(str));