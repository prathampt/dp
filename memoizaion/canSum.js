const canSum = (targetValue, numbers, memo = {}) => {

    if (targetValue === 0) return true
    if (targetValue < 0) return false
    if (targetValue in memo) return memo[targetValue]

    for (let num of numbers){
        let remainder = targetValue - num

        if (canSum(remainder, numbers, memo) === true){
            memo[targetValue] = true
            return true
        }    
    }

    memo[targetValue] = false
    return false
}

console.log(canSum(7, [2,3]))
console.log(canSum(7, [5,3,4,7]))
console.log(canSum(7, [2,4]))
console.log(canSum(8, [2,3,5]))
console.log(canSum(300, [7,14]))
console.log(canSum(248, [134,3,33,56]))

// Complexity:
// O(m * n) Time          ....... Where n is length of the array
// O(m) Space             ....... Where m is targetValue