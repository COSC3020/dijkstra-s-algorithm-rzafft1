const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var answers = [
    [0, 5, 38, 33, 25, 23, 19, 15],
    [5, 0, 38, 33, 25, 18, 14, 10],
    [10, 5, 0, 31, 23, 16, 12, 15],
    [15, 10, 5, 0, 8, 21, 17, 20],
    [23, 18, 13, 8, 0, 29, 25, 28],
    [30, 25, 20, 15, 7, 0, 32, 35],
    [34, 29, 24, 19, 11, 4, 0, 39],
    [15, 10, 28, 23, 15, 8, 4, 0]
];

var matrix = [
    [0, 5, 0, 0, 25, 0, 0, 0], //0
    [5, 0, 0, 0, 0, 0, 0, 10], //1
    [0, 5, 0, 0, 0, 0, 12, 0], //2
    [0, 0, 5, 0, 8, 0, 0, 0],  //3
    [25, 0, 0, 8, 0, 0, 0, 0],  //4
    [0, 0, 0, 0, 7, 0, 0, 0],  //5
    [0, 0, 0, 0, 0, 4, 0, 0],  //6
    [0, 10, 0, 50, 0, 0, 4, 0]  //7
];

const test = jsc.forall(jsc.integer(0, 7), function (n) {
    return JSON.stringify(dijkstra(matrix, n)) === JSON.stringify(answers[n]);
});

jsc.assert(test);


