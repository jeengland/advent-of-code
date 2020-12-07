const txtToArray = require('../../utils/txtToArray')

const mapBags = (input) => {
    const raw = txtToArray(input)
    raw.pop()
    const allBags = {}
    raw.forEach(bag => {
        const halves = bag.split(' bags contain ')
        const container = halves[0]
        const bags = halves[1].split(', ')
        const contained = {}
        bags.forEach(b => {
            b = b.split(' ')
            const num = b.shift()
            b.pop()
            contained[b.join(' ')] = parseInt(num)
        })
        if (!allBags[container]) {
            allBags[container] = {}
        }
        allBags[container].contains = contained
        Object.keys(contained).forEach(key => {
            if (!allBags[key]) {
                allBags[key] = {}
            }
            if (!allBags[key].containedBy) {
                allBags[key].containedBy = []
            }
            allBags[key].containedBy.push(container)
        })
    })
    return allBags
}

const traverseBags = (input, bagColor) => {
    const map = mapBags(input)
    const toVisit = [bagColor]
    const visited = []
    while (toVisit.length > 0) {
        const bag = toVisit.shift()
        if (map[bag].containedBy) {
            map[bag].containedBy.forEach(type => {
                if (!visited.includes(type)) {
                    toVisit.push(type)
                }
            })
        }
        visited.push(bag)
    }
    const vSet = new Set(visited)
    return vSet.size - 1
}

console.log(traverseBags('./input.txt', 'shiny gold'))