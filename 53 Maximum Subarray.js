/* Brute force O(n^4) complexity */
function bruteForceO3(nums) {
  let upper = 0
  let lower = 0

  let bestResult = Number.NEGATIVE_INFINITY

  // Sum the total in the sub array
  function sum(begin, end, _nums) {
    let result = 0
    for (let i = begin; i <= end; i++) {
      result += _nums[i]
    }

    return result
  }

  // Iterate lower bound of the sub array over each element in the array
  for (lower = 0; lower < nums.length; lower++) {
    // Iterate upper bound of the sub array over each element in the array
    for (upper = lower; upper < nums.length; upper++) {
      const r = sum(lower, upper, nums)

      if (r > bestResult) {
        bestResult = r
      }

    }
  }

  return bestResult
}

/* Brute force O(n^2) complexity */
function bruteForceO2(nums) {
  let largestSum = Number.NEGATIVE_INFINITY

  // Iterate lower bound of the subarray over each element in the array
  for (let i = 0; i < nums.length; i++) {
    let currentSubarraySum = 0

    // Iterate upper bound of the subarray over each element in the arry
    for (let j = i; j < nums.length; j++) {
      // Compute the sum of the array each iteration. There is no need to sum the whole
      // array each time as we only need to keep the best result. This reduces the complexity
      // from O(n^3) to O(n^2)
      currentSubarraySum += nums[j]
      largestSum = Math.max(currentSubarraySum, largestSum)
    }
  }

  return largestSum
}

/* Optimal O(n) */
function optimal(nums) {
  let maxSum = Number.NEGATIVE_INFINITY

  let upper = 0

  let currentSum = 0
  for (upper = 0; upper < nums.length; upper++) {
    currentSum += nums[upper]
    maxSum = Math.max(currentSum, maxSum)

    // If the current sum is less than zero the current sub array will not help future subarrays
    // so restart from the next position
    if (currentSum < 0) {
      currentSum = 0
    }
  }

  return maxSum
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  return optimal(nums)
};

