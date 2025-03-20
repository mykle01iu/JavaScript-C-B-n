Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true
            };
        }
    }
    return false;
}

var courses = [
    {
        name: 'javascript',
        coin: 680,
        isFishish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFishish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFishish: false,
    }
];

var result = courses.some2(function(course, index, array){
    return course.isFishish;
});

console.log(result)