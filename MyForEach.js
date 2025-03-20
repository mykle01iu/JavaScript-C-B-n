Array.prototype.forEach2 = function(callback){
    for(var index in this) {
        if (this.hasOwnProperty(index)){
            console.log(index)
            callback(this[index], index, this);
        }
    }
}

var courses = [
    'Jvs',
    'PHP',
    'Python'
];

courses.length = 1000;

var output = courses.forEach2(function(course, index, array){
    console.log(course, index, array)
});