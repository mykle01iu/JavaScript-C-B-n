/**
CHUỖI TRONG SCRIPT

1.Tạo chuỗi
    -Các cách tạo chuỗi: 2 cách
    -Nên dùng cách nào? Lý do?
    -Kiểm tra data type
2. Một số case sử dụng backsklash (\)
3. Xem độ dài chuõi
4. Chú ý độ dài khi viết code
5. Template string ES6

 */

//1.
var fullName = new String('Dinh Khai');
//backslash
var Fullname = 'Dinh Khai la \'proplayer\''; //   \"Khai\": "Khai" 
console.log(Fullname)

//3.
console.log(fullName.length); //Độ dài kí tự của chuỗi

//4.
var a = "Ngày hôm nay là một ngà quá đyẹp trời, nắng chiếu lung linh muôn hoa vàng" //Dài!!
//Tách:
var b = "Ngày hôm nay là một ngày"
+ " quá đyẹp trời, nắng chiếu"
+ " lung linh muôn hoa vàng"
console.log(b);

//5.
var x = 'dinh'
var y = 'khai'

console.log("Tôi là: " + x + " " + y); //Dài!!
console.log(`Tôi là: ${x} ${y}`);
