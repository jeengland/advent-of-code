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
            let num = b.shift()
            if (num === 'no') {
                b = null
            } else {
                b.pop()
            }
            if (b !== null) {
                contained[b.join(' ')] = parseInt(num)
            }
        })
        if (!allBags[container]) {
            allBags[container] = {}
        }
        if (Object.keys(contained).length) {
            allBags[container].contains = contained
        }
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

const traverseBags = (map, bagColor, cache={}) => {
    let list = []
    if (map[bagColor].contains) {
        list = Object.keys(map[bagColor].contains)
    } else {
        return 1
    }
    let total = 1
    list.forEach(color => {
        if (cache[color]) {
            total += cache[color] * map[bagColor].contains[color]
        } else {
            const vol = traverseBags(map, color, cache)
            cache[color] = vol
            total += vol * map[bagColor].contains[color]
        }
    })
    return total
}



console.log(traverseBags(mapBags('./input.txt'), 'shiny gold'))

// find deepest bags
// recurse upwards 