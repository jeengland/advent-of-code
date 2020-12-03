const txtToArray = require('../../utils/txtToArray.js');

const treeCount = (input) => {
    const map = txtToArray(input);
    map.pop();
    const rowCount = map.length - 1;
    const colCount = map[0].length - 1;
    const crd = [0, 0]; // row, column
    let treeCount = 0;
    while (crd[0] < rowCount) {
        crd[0] += 1;
        crd[1] += 3;
        if (crd[1] > colCount) {
            crd[1] = crd[1] - colCount - 1
        }
        console.log(crd[0])
        if (map[crd[0]][crd[1]] === '#') {
            treeCount += 1;
        };
    };
    return treeCount;
};

console.log(treeCount('./input.txt'));