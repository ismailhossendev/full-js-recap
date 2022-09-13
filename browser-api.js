/* 
ব্রাউজার API সম্পর্কে চারটা জিনিস

১. লোকাল স্টোরেজ, সেশন স্টোরেজ কোনটা কখন ইউজ করবে। কিভাবে ইউজ করবে

২. location API কিভাবে ইউজ করবে ব্রাউজারে

৩. history API কিভাবে ইউজ করে

৪. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
*/

/*
    1. localStorage stored data not deleted after close your browser but sessional storage data will be deleted after close your tab or browser. 

    2. location.href = "url"

    3.
        3.1- history.back() // for back
        3.2- history.forward() // for forword
        3.3- history.go(-3) // for spacific tab    
 */
    // 4. we alredy use this - just now insert a demo
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))