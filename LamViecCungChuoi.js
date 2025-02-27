//LÀM VIỆC CÙNG CHUỖI

var myString = "Học JS tại JS JS F8!";

//Tìm hiểu thêm: Key: Javascript string methods

// 1.Length
console.log(myString.length); 

// 2.Find index: kiểm tra vị trí kí tự trong chuỗi
console.log(myString.indexOf('JS', 6)); //Tìm chữ JS thứ 2
console.log(myString.lastIndexOf('JS')); //Chữ JS cuối
console.log(myString.search("JS")); 

// 3.Cut string
console.log(myString.slice(4)); //JS tại JS JS F8!
console.log(myString.slice(-3,-1));

// 4.Replace
console.log(myString.replace('JS','JavasScript')) //Học JavaScript tại JS JS F8!
console.log(myString.replace(/JS/g, 'JavaScript')) //Học JavaScript tại JavaScript JavaScript F8!
// 5.Convert to upper case
console.log(myString.toUpperCase()) //HỌC JV TẠI JV JV F8!

// 6.Convert to lower case
console.log(myString.toLowerCase()) //học jv tại jv jv f8!

// 7.Trim: loại bỏ khoảng trắng
console.log(myString.trim())

// 8.Split
var languages = 'Java, Python, PHP, Ruby, C'
console.log(languages.split(', ')) //["Java","Python","PHP","C"]

// 9.Get a character by index: lấy kí tự bởi index cho trước
const myString2 = "Khai Dinh";
console.log(myString2.charAt(0)) //K
console.log(myString2.charAt(5)) //D
console.log(myString2.charAt(20)) //none

console.log(myString2[0]) //K
console.log(myString2[20]) //undefined

