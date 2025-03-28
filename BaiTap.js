//Bai1:

const students = [
    { id: 1, name: "An", score: 85 },
    { id: 2, name: "Bình", score: 92 },
    { id: 3, name: "Cường", score: 75 },
    { id: 4, name: "Duy", score: 95 },
    { id: 5, name: "Lan", score: 89 }
   ];

var TopStudent = (students) => {
    const maxScore = students.reduce((max, student)  =>
        student.score > max ? student.score: max, students[0].score)

    return students.find(student => student.score === maxScore);
}

console.log(TopStudent(students))


//Bai4:
const products = [
    { id: 1, name: "iPhone", price: 1000 },
    { id: 2, name: "Samsung", price: 900 },
    { id: 3, name: "Xiaomi", price: 600 },
    { id: 4, name: "Oppo", price: 700 }
   ];
var NamePhones = (products) => {
    return products.map(phone => phone.name.toUpperCase())
}   

console.log(NamePhones(products))


//Bai3:
const employees = [
    { name: "A", position: "Developer", salary: 2000 },
   { name: "B", position: "Designer", salary: 1800 },
    { name: "C", position: "Manager", salary: 5000 },
    { name: "D", position: "Developer", salary: 2500 },
    { name: "E", position: "Developer", salary: 3000 }
   ];

var Congty = (employees) => {
    return employees.filter(emp => emp.position === 'Developer' && emp.salary >= 2000)
};

console.log(Congty(employees));

//Bai2
const inventory = [
    { name: "Laptop", stock: 10 },
    { name: "Mouse", stock: 2 },
    { name: "Keyboard", stock: 5 },
    { name: "Monitor", stock: 0 },
    { name: "USB", stock: 1 }
   ];

var HangTon = (inventory) => {
    return inventory.some(i => i.stock <= 2)
}

console.log(HangTon(inventory))

//Bai5
const cart = [
    { name: "apple", price: 2, quantity: 4 },
    { name: "banana", price: 1, quantity: 6 },
    { name: "orange", price: 3, quantity: 3 }
   ];

var Sum = (cart) =>  {
    return cart.reduce((acc, n) => acc + (n.price) * (n.quantity), 0);
};
console.log(Sum(cart))

//Bai6
const orders = {
    order1: { customer: "Nguyen Van A", items: [{ name: "Laptop", price: 1000,
   quantity: 1 }, { name: "Mouse", price: 50, quantity: 2 }] },
    order2: { customer: "Tran Thi B", items: [{ name: "Keyboard", price: 80,
   quantity: 1 }, { name: "Monitor", price: 300, quantity: 2 }] },
    order3: { customer: "Le Van C", items: [{ name: "USB", price: 20, quantity:
   5 }, { name: "Headset", price: 150, quantity: 1 }] }
   };
//1.Lay danh sach ma don hang
var MaDonHang = Object.keys(orders)
console.log(MaDonHang)

var TongGiaTriDonHang = (orders) => {
    return orders.filter(sum => sum.MaDonHang.price)
}