/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];
    const dfs = (index, path, sum) => {
      if (path.length == k) {
        if (sum == n) {
          res.push([...path])
        }
        return
      }
      for (let i = index; i <= 9; i++) {
        path.push(i);
        dfs(i + 1, path, sum + i)
        path.pop();
      }
    }
    dfs(1, [], 0);
    return res
};
// @lc code=end

