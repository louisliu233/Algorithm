/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = []
    candidates.sort((a, b) => a - b)
    const dfs = (index, list, sum) => {
      if (sum >= target) {
        if (sum == target) {
          res.push([...list])
        }
        return
      }
      for (let i = index; i < candidates.length; i++) {
        if(i > index && candidates[i] == candidates[i - 1])continue
        list.push(candidates[i])
        dfs(i + 1, list, sum + candidates[i])
        list.pop()
      }
   }
   dfs(0, [], 0)
   return res
};
// @lc code=end

