Array.prototype.filter2 = function(callback) {
    var output = [];
    for(var index in this){
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}


var courses = [
    {
        name: 'Jvs',
        coin: 500
    },
    {
        name: 'Python',
        coin: 400
    },
    {
        name: 'PHP',
        coin: 600
    }
];
var myCourses = courses.filter2(function(course, index, array){
    return course.coin >= 500
});
console.log(myCourses);
