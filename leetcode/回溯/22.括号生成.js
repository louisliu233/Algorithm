/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    const dfs = (str, left, right) => {
      if (left === n && right === n) {
        res.push(str)
        return
      }
      if(left < right) {
        return
      }
      left < n && dfs(str + '(', left + 1, right)
      right < n && dfs(str + ')', left, right + 1)
    }
    dfs('', 0, 0)
    return res
};
// @lc code=end

