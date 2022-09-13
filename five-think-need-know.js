/* 
১.১ -> অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

১.২. -> জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো।

২. ->  ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে

৩. -> লজিক্যাল এন্ড (&&) আর লজিক্যাল or (।।) এই দুইটা সম্পর্কে হালকা ধারণা

৪. -> JSON এর stringify এবং parse কখন কোনটা ইউজ করে

৫. -> ++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি।

৬. -> Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো। 
*/


//১.১ -> অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const newArray = numbers.map(n => n*2);
// console.log(newArray);

// ১.২. -> জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো।
/* 
    map = map for loop all in an array and return an array.
    forEach = forEach loop all but not return array
    filter = filter play conditional oparetion and retun all match elements in a new array.
    find = find allmost similer like filter but find return frist match element.
*/

//২. -> ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে
// console.log(100 == 10 ? "match": 'not match' )


// ৩.-> লজিক্যাল এন্ড (&&) আর লজিক্যাল or (।।) এই দুইটা সম্পর্কে হালকা ধারণা
// && means need  all condition is true .
// || means need any condition true .

// ৪.-> JSON এর stringify এবং parse কখন কোনটা ইউজ করে
    /* 
        JSON stringfy to need convert a elements on json format 
        JSON parse need to conver json format to ragular stype
    */


// -> ৫. ++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি।
/* 
    i+1 = i++
    i-1 = i--
    10 + 10 = 20
    10+"10" = it convert to number type
    10 += 10 = 20
    10 -= 10 = 0

    active = is now active 
    !active = is now inactive
*/

// ->  ৬. Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো। 
const obj = {key: 'value'}