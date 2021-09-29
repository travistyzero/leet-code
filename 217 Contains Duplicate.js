/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

  const s = new Set()
  let foundDuplicate = false
  for (let i = 0; i < nums.length && !foundDuplicate; i++) {
    if (s.has(nums[i])) {
      foundDuplicate = true
    } else {
      s.add(nums[i])
    }
  }

  return foundDuplicate
};