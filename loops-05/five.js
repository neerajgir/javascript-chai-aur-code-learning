//for each loop
const programming = ['cpp', 'js', 'python', 'java', 'c#'];

programming.forEach(function (item) {
    console.log(item);    
});

//arrow function
programming.forEach(item => {
    console.log(item);
});

programming.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

//array of objects using forEach
const coding = [
    {
        name: 'cpp',
        type: 'compiled'
    },
    {
        name: 'js',
        type: 'interpreted'
    },
    {
        name: 'python',
        type: 'interpreted'
    },
    {
        name: 'java',
        type: 'compiled'
    },
    {
        name: 'c#',
        type: 'compiled'
    }
]

coding.forEach((item) => {
    // console.log(item.name); //print name
    // console.log(item.type); //print type
    
    console.log(item.name, item.type); //print name and type
});
    