// Write a function that calculates the sum of numbers from 1 up to (and including) some number n.

// 1 - Approach 
// O(n)
export function addUpTo1(n: number) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// 2 - Approach
// O(1)
export function addUpTo2(n: number) {
  return n * (n + 1) / 2;
}
