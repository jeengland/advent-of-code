const txtToArray = require('../../utils/txtToArray.js')

const passReader = (code) => {
    const row = code.slice(0, 7)
    const seat = code.slice(7)
    // console.log(row, seat)
    let lower = 0
    let upper = 127
    for (let i = 0; i < row.length; i++) {
        [lower, upper] = splitter(lower, upper, row[i])
    }
    const rowNum = lower
    lower = 0
    upper = 7
    for (let i = 0; i < seat.length; i++) {
        [lower, upper] = splitter(lower, upper, seat[i])
    }
    const seatNum = lower;
    return (rowNum * 8) + seatNum
}

const splitter = (lower, upper, side) => {
    const half = (upper - lower + 1) / 2
    if (side === 'F' || side === 'L') {
        return [lower, lower + half - 1]
    } else if (side === 'B' || side === 'R') {
        return [lower + half, upper]
    }
}

const allID = (input) => {
    const passList = txtToArray(input);
    const ids = []
    passList.forEach(pass => {
        ids.push(passReader(pass))
    })
    return ids.sort((a, b) => b - a)
}

const allIDs = allID('./input.txt')

for (let i = 0; i < allIDs.length; i++) {
    if (allIDs[i] + 1 !== allIDs[i - 1]) {
        console.log(allIDs[i], allIDs[i - 1])
    }
    if (allIDs[i] - 1 !== allIDs[i + 1]) {
        console.log(allIDs[i], allIDs[i + 1])
    }
}