/* 
সিম্পল বেসিক কয়েকটা ডাটা টাইপ সম্পর্কে জানতে হবে। 

১. string কি জিনিস। স্ট্রিং কেমনে ডিক্লেয়ার করে। স্ট্রিং থেকে কিভাবে কোন একটা ক্যারেক্টার খুঁজে বের করে। চাইলে স্ট্রিং এর উপরে কি লুপ চালানো যায়। এছাড়াও length, includes, indexOf, toUpperCase, toLowerCase, জানতেই হবে। subString, concat জানলে ভালো। বোনাস হিসেবে জানতে পারো string কি mutable নাকি immutable 



২. number সম্পর্কে জানতে হবে। integer, float কোনগুলা। স্ট্রিং থেকে নাম্বারে রূপান্তর করার সিস্টেম। কোন একটা সংখ্যা integer কিনা সেটা চেক করার সিস্টেম জানতে হবে। NaN বলতে একটা জিনিস আছে। সেটা কি জিনিস। 



৩. true false কখন ইউজ করে। সেটা জানতে হবে। কি কি ধরনের জিনিস জাভাস্ক্রিপ্ট এর truthy আর কি কি জিনিস জাভাস্ক্রিপ্ট এ falsy সেটা জানতে হবে। 



৪. null এবং undefined কি জিনিস। কখন কোনটা ইউজ করা হয়। বা কখন কোনটা কিভাবে চেক করতে হয়। সেটা জানতে হবে। 

*/
// ১. string কি জিনিস। স্ট্রিং কেমনে ডিক্লেয়ার করে। স্ট্রিং থেকে কিভাবে কোন একটা ক্যারেক্টার খুঁজে বের করে। চাইলে স্ট্রিং এর উপরে কি লুপ চালানো যায়। এছাড়াও length, includes, indexOf, toUpperCase, toLowerCase, জানতেই হবে। subString, concat জানলে ভালো। বোনাস হিসেবে জানতে পারো string কি mutable নাকি immutable 

const ismail = 'hello my name is ismail i am web developer ';
const cons = 'added by concat'
for (i of ismail) {
    // console.log(i);
}
// console.log(ismail.includes('i'));
// console.log(ismail.indexOf('i'));
// console.log(ismail.toUpperCase());
// console.log(ismail.toLowerCase());
// console.log(ismail.substring(20,30));
// console.log(ismail.concat(cons));

// string is immutable type

//২. number সম্পর্কে জানতে হবে। integer, float কোনগুলা। স্ট্রিং থেকে নাম্বারে রূপান্তর করার সিস্টেম। কোন একটা সংখ্যা integer কিনা সেটা চেক করার সিস্টেম জানতে হবে। NaN বলতে একটা জিনিস আছে। সেটা কি জিনিস।
// const iniger = 10;
// const float = '10.5';?
// console.log(parseInt(iniger));
// console.log(parseFloat(float));
// console.log(parseInt(float));
// console.log(Number.isInteger(iniger));
// NaN when we Math oparetion in a string with numbers like
// console.log(10 * 'hello');

//৩. true false কখন ইউজ করে। সেটা জানতে হবে। কি কি ধরনের জিনিস জাভাস্ক্রিপ্ট এর truthy আর কি কি জিনিস জাভাস্ক্রিপ্ট এ falsy সেটা জানতে হবে। 
/* 
    1.empty string is false
    2.not empty string is true
    3.object and array is true
    4. 0 is false 
    5. More then 0 or negetive value is true


*/
const isTrue = 0;
if (isTrue) {
    // console.log(true);
}
else {
    // console.log(false);
}

// ৪. null এবং undefined কি জিনিস। কখন কোনটা ইউজ করা হয়। বা কখন কোনটা কিভাবে চেক করতে হয়। সেটা জানতে হবে।
/* 
    when we not enter or empty then is Null 
    when some sting use but not define it is Undifined
*/
const undi = undefined;
const nu = null
// console.log(undi , null);


/* 
    this is extra 

    premitive data type is-
        1. string 
        2. number 
        3. boolean
        4.Symbol(new)
            (More premitive Type)
            1.null
            2.undifined
    Non Premitive Data Type is- 
        1. Object 
        2. Array

        (function also non premitive type)
*/