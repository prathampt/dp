const howSum = (targetValue, numbers, memo = {}) => {
    if (targetValue in memo) return memo[targetValue]
    if (targetValue === 0) return []
    if (targetValue < 0) return null

    for (let num of numbers){
        const remainder = targetValue - num

        const out = howSum(remainder, numbers, memo)

        if (out !== null) {
            memo[targetValue] = [ ...out, num ]
            return memo[targetValue]
        }
    }

    memo[targetValue] = null
    return null
}

console.log(howSum(7, [2,3]))
console.log(howSum(7, [5,3,4,7]))
console.log(howSum(7, [2,4]))
console.log(howSum(8, [2,3,5]))
console.log(howSum(300, [7,14]))
console.log(howSum(248, [134,3,33,56]))

// Complexity:
// O(n * m ^ 2) Time          ....... Where n is length of the array
// O(m ^ 2) Space             ....... Where m is targetValue