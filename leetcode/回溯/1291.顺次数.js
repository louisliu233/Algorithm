/*
 * @lc app=leetcode.cn id=1291 lang=javascript
 *
 * [1291] 顺次数
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const res = []
    const dfs = (pre, cur) => {
      if (pre >= low && pre <= high) {
        res.push(pre)
      }
      if (pre > high) return
      if (cur + 1 <= 9) {
          dfs(pre * 10 + cur + 1, cur + 1)
      }
    }
    for (let i = 1; i <= 9; i++) {
      dfs(i, i)
    }
    return res.sort((a, b) => a - b)
};
// @lc code=end

