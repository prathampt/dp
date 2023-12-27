const fib = (n, memo = {}) => {
    if (n <= 2) return 1
    else if (n in memo) return memo[n]

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

console.log(fib(3))
console.log(fib(6))
console.log(fib(10))
console.log(fib(50))
console.log(fib(234))

// Complexity:
// O(n) Time
// O(n) Space