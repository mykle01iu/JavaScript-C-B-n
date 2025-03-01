/*
1. to string: >>string
2. Join: array >> string
3. Pop: xóa ptu cuối mảng
4. Push: thêm 1 or nhiều ptu vào cuối mảng
5. Shift: xóa ptu đầu mảng
6. Unshift: thêm 1 or nhiều ptu vào đầu mảng
7. Splicing: xóa,cắt,chèn
8. concat: nối array
9. Slicing: cắt 1 vài element của mảng
*/

var languages = ['VN','ENG','FRC','IND']
//1
console.log(languages.toString())
//2
console.log(languages.join(', '))
//3
console.log(languages.pop()) //xóa element cuối mảng >> ptu đã xóa 'IND'
console.log(languages) //['VN','ENG','FRC']
//4
console.log(languages.push('SIN')) //4
console.log(languages) //['VN', 'ENG', 'FRC', 'SIN']
//5
console.log(languages.shift())
console.log(languages)
//6
console.log(languages.unshift('MAS','THA'))
console.log(languages)
//7
   //xóa
      languages.splice(1,1)
      console.log(languages) //['MAS', 'ENG', 'FRC', 'SIN']
   //chèn
      languages.splice(1,0,'HOL')
      console.log(languages) //['MAS', 'HOL', 'ENG', 'FRC', 'SIN']
   //thay
      languages.splice(1,1,'AUS')
      console.log(languages) //['MAS', 'AUS', 'ENG', 'FRC', 'SIN']
//8
var languages2 = ['Java', 'Python', 'Cpp'];
console.log(languages.concat(languages2)); //['MAS', 'AUS', 'ENG', 'FRC', 'SIN', 'Java', 'Python', 'Cpp']
//9
console.log(languages.slice(1, 3)) //['AUS', 'ENG']