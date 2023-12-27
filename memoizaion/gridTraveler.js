const gridTraveller = (m, n, memo = {}) => {

    const key = m + ',' + n

    if (m === 1 && n === 1) return 1
    if (m == 0 || n == 0) return 0
    if (key in memo) return memo[key]

    memo[key] = gridTraveller(m, n - 1, memo) + gridTraveller(m - 1, n, memo)
    return memo[key]
}

console.log(gridTraveller(1,1))
console.log(gridTraveller(2,3))
console.log(gridTraveller(3,2))
console.log(gridTraveller(3,3))
console.log(gridTraveller(18,18))

// Complexity:
// O(m * n) Time
// O(m + n) Space