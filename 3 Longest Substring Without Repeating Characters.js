/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  let lower = 0
  let bestLength = 0
  let currentSubstring = ""

  function charAt(_s, index) {
    return _s.substring(index, index + 1)
  }

  for (let upper = 0; upper < s.length; upper++) {
    const currentChar = charAt(s, upper)

    if (currentSubstring.includes(currentChar)) {
      // Not a unique character in the substring, start a new substring from where
      // the duplicate occurs in the current substring
      lower = lower + currentSubstring.indexOf(currentChar) + 1
      currentSubstring = s.substring(lower, upper + 1)
    } else {
      currentSubstring = s.substring(lower, upper + 1)
      bestLength = Math.max(bestLength, currentSubstring.length)
    }
  }

  return bestLength
};