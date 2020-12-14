/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n <= 2){
    return n
  }
  let i = 2, result = 0, pre = 1, current = 2
  while(i++ < n){
    result = pre + current
    pre = current
    current = result
  }
  return result
};
// @lc code=end

