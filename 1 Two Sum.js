/**
 * O(n) Hash map solution
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {};
  hashMap[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
    const complement = target - nums[i]

    if (hashMap.hasOwnProperty(complement)) {
      return [hashMap[complement], i]
    }

    hashMap[nums[i]] = i;
  }
};

/**
 * Naive O(n^2) implementation
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumNaive = function (nums, target) {
  let found = false
  let i
  let j

  for (i = 0; (i < nums.length - 1) && !found; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        found = true
        break
      }
    }
  }

  // for loop increments before checking condition
  i--;

  return [i, j]
};