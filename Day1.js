/*
Bài 1: Khai báo các biến với var, let, const và gán các giá trị khác nhau. In ra kiểu dữ liệu của từng biến.
Yêu cầu:

Tạo biến name (kiểu chuỗi), age (kiểu số), isStudent (kiểu boolean).
In ra kiểu dữ liệu của từng biến bằng typeof().
*/
var name = 'Hoang Dinh Khai';
let age = 19;
const isStudent = true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

/*
Bài 2: Thực hiện ép kiểu dữ liệu trong JavaScript.
Yêu cầu:

Chuyển số thành chuỗi và ngược lại.
Chuyển chuỗi thành boolean và kiểm tra kết quả.
*/
var isNumber = 10112006;
var changeString = String(isNumber);
var isBoolean = Boolean(changeString);
console.log(typeof isNumber);
console.log(typeof changeString);
console.log(typeof isBoolean)

/*
Bài 3: Viết chương trình thực hiện các phép toán số học.
Yêu cầu:

Nhập hai số từ người dùng.
Thực hiện các phép toán: cộng, trừ, nhân, chia, lũy thừa, chia lấy dư.
In kết quả ra màn hình
*/
let num1 = Number(prompt('Nhập số thứ 1: '));
let num2 = Number(prompt('Nhập số thứ 2'));
console.log(`${num1} + ${num2} = `, num1 + num2);
console.log(`${num1} - ${num2} = `, num1 - num2);
console.log(`${num1} x ${num2} = `, num1 * num2);
console.log(`${num1} : ${num2} = `, num1 / num2);
console.log(`${num1} % ${num2} = `, num1 % num2);


/*
Bài 4: So sánh hai giá trị bất kỳ.
Yêu cầu:

So sánh bằng (==) và so sánh tuyệt đối (===).
So sánh lớn hơn, nhỏ hơn, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng
*/
let a = 3;
let b = 5;
let c = '5'
console.log(b == c);
console.log(b === c);
console.log(a > b);
console.log(a < b);
console.log(b >= c);
console.log(b <= c);


/*
Bài 5: Quản lý danh sách màu sắc.
Yêu cầu:

Tạo một mảng chứa các màu: ["red", "green", "blue"].
Thêm màu mới vào cuối mảng và đầu mảng.
Xóa màu đầu tiên và màu cuối cùng.
Sắp xếp mảng theo bảng chữ cái và đảo ngược thứ tự.
 */
let colorArray = ["red","green","blue"];
//Thêm vào cuối:
colorArray.push("orange");
//Thêm vào đầu:
colorArray.unshift("pink");
console.log(colorArray); //['pink', 'red', 'green', 'blue', 'orange']
//Xóa phần tử cuối cùng của mảng
colorArray.pop();
//Xóa phần tử đầu tiên của mảng
colorArray.shift();
console.log(colorArray); //['red', 'green', 'blue']
//Sắp xếp:
colorArray.sort();
console.log(colorArray); //['blue', 'green', 'red'] (B,G,R)
//Đảo ngược thứ tự:
colorArray.reverse();
console.log(colorArray); //['red', 'green', 'blue']


/*
Bài 6: Tìm kiếm phần tử trong mảng.
Yêu cầu:

Tạo mảng ["apple", "banana", "orange", "grape"].
Tìm kiếm vị trí của "orange" bằng indexOf().
Kiểm tra phần tử "banana" có trong mảng không bằng includes().
*/
let fruitsArray = ["apple", "banana", "orange", "grape"];
console.log(fruitsArray.indexOf("orange")); //2
console.log(fruitsArray.includes("Banana")); //false


/*
Bài 7: Tạo và thao tác với đối tượng.
Yêu cầu:

Tạo object student với các thuộc tính: name, age, grade, isEnrolled.
Truy cập và in ra thông tin của student.
Thêm thuộc tính address, sửa grade, và xóa isEnrolled.
 */
var student = {
    name: "Nhi",
    age: 19,
    grade: 8,
    isEnrolled: true
}
console.log(student)
student.address = "Ba Đình"; //Thêm address
delete student.isEnrolled; //Xóa isEnrolled
console.log(student)