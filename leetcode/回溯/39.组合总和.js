/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 简洁
var combinationSum = function(candidates, target) {
    const res = []
    const dfs = (index, list, sum) => {
      if (sum >= target) {
        if (sum == target) {
          res.push([...list])
        }
        return
      }
      for (let i = index; i < candidates.length; i++) {
        list.push(candidates[i])
        dfs(i, list, sum + candidates[i])
        list.pop()
      }
    }
    dfs(0, [], 0)
    return res
};
// @lc code=end

var combinationSum = function(candidates, target) {
  const res = []
  const dfs = (index, list) => {
    if (list.reduce((pre, cur) => (pre + cur), 0) == target) {
      res.push([...list])
      return
    } else if (list.reduce((pre, cur) => (pre + cur), 0) >= target) return
    for (let i = index; i < candidates.length; i++) {
      list.push(candidates[i])
      dfs(i, list)
      list.pop()
    }
  }
  dfs(0, [])
  return res
};