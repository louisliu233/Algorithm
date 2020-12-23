/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// O(n^2) 0
var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
      return i;
    }
  }
  return -1
};
// @lc code=end

// O(n) O(n) 空间换取时间
var firstUniqChar = function(s) {
  const array = s.split('')
  const countMap = {}
  for(let i = 0; i < s.length; i++) {
    current = array[i]
    let count = countMap[current]
    if(countMap[current]){
      countMap[current] = count + 1
    } else {
      countMap[current] = 1
    }
  }
  for(let i = 0; i < array.length; i++) {
    if(countMap[array[i]] === 1) {
      return i
    }
  }
  return -1
};
