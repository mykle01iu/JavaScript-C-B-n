
//Object cinstructor

function User(firstName, lastName, avarta) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avarta = avarta;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Hoang', 'Khai', 'Avatar');
var user = new User('Doo','Nal','Avatar')

author.tittle = 'Welcome to Hoang Dinh Khai'
user.comment = 'Hay quá anh ơi'

console.log(author.getName());
console.log(user);
