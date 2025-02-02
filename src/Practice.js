function sample(...items) {
    console.log(items)
}

const array = [1, 2, 3, 4]

sample(array)
sample(...array)