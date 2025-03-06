
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 330
    },
];

//1.forEach()
courses.forEach(function(course, index) {
    console.log(index,course);

}); 

//2.every() >> Boolean: kiểm tra tất cả điều kiện đúng
var isFree = courses.every(function(course, index){
    console.log(index);
    return course.coin == 0; 
});
console.log(isFree); //false

//3.some() >> Boolean: kiểm tra 1 trong số điều kiện đúng
var isTrue = courses.some(function(course, index){
    console.log(index);
    return course.coin == 400;
});
console.log(isTrue); //true

//4.find(): trả về 1 phần tử thỏa mãn
var timKiem = courses.find(function(course){
    return course.name ===  'Ruby';
});
console.log(timKiem); //{id: 3, name: 'Ruby', coin: 0}

//5.filter(): giống find nhưng trả về tất cả các phần tử thỏa mãn
var timKiem2 = courses.filter(function(course){
    return course.name ===  'Ruby';
});
console.log(timKiem2);

//6.map(): thay đổi element của 1 array
var newCourses = courses.map(function(course){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    };
});
console.log(courses)

//7.reduce():
var i = 0;
function coinHandler(acumentlator, currentValue, currentIndex, originArray){
    i++;

    var total = acumentlator + currentValue.coin;

    console.table({
        'Lượt chạy:': i,
        'Biến tích trữ': acumentlator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    })
    console.log(currentValue);

    return total;
};

var totalCoin = courses.reduce(coinHandler, 0); 
console.log(totalCoin)
