const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var answers1 = [
    [0, 5, 38, 33, 25, 23, 19, 15],
    [5, 0, 38, 33, 25, 18, 14, 10],
    [10, 5, 0, 31, 23, 16, 12, 15],
    [15, 10, 5, 0, 8, 21, 17, 20],
    [23, 18, 13, 8, 0, 29, 25, 28],
    [30, 25, 20, 15, 7, 0, 32, 35],
    [34, 29, 24, 19, 11, 4, 0, 39],
    [15, 10, 28, 23, 15, 8, 4, 0]
];

var answers2 = [
    [0,Infinity,3,7],
    [20,0,6,10],
    [14,Infinity,0,4],
    [10,Infinity,13,0]
]

var answers3 = []

var matrix1 = [
    [0, 5, 0, 0, 25, 0, 0, 0], 
    [5, 0, 0, 0, 0, 0, 0, 10], 
    [0, 5, 0, 0, 0, 0, 12, 0], 
    [0, 0, 5, 0, 8, 0, 0, 0],  
    [25, 0, 0, 8, 0, 0, 0, 0], 
    [0, 0, 0, 0, 7, 0, 0, 0], 
    [0, 0, 0, 0, 0, 4, 0, 0], 
    [0, 10, 0, 50, 0, 0, 4, 0] 
];

var matrix2 = [
    [0,0,3,10],
    [0,0,6,0],
    [15,0,0,4],
    [10,0,0,0]
];

var matrix3 = [[]]

const test1 = jsc.forall(jsc.integer(0, 7), function (n) {
    return JSON.stringify(dijkstra(matrix1, n)) === JSON.stringify(answers1[n]);
});

const test2 = jsc.forall(jsc.integer(0, 3), function (n) {
    return JSON.stringify(dijkstra(matrix2, n)) === JSON.stringify(answers2[n]);
});

const test3 = jsc.forall(jsc.integer(0, 7), function (n) {
    return JSON.stringify(dijkstra(matrix3, n)) === JSON.stringify(answers3);
});

jsc.assert(test1);
jsc.assert(test2);
jsc.assert(test3);

