/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  function f(i, prev, curr) {
    return i === 0 ? prev : f(i - 1, curr, prev + curr)
  }

  return f(n, 0, 1)
};