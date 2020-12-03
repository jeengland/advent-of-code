const treeCount = require('./treeCount.js');

const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

const multipleTreeCount = (input, slopes) => {
    const results = slopes.map(slope => treeCount(input, slope[0], slope[1]))
    return [results, results.reduce((a, b) => a * b)]
}

console.log(multipleTreeCount('./input.txt', slopes))