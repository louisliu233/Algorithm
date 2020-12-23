/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const dfs = (index, list) => {
      if(list.length == k) {
        res.push([...list])
        return
      }
      for (let i = index; i <= n; i++) {
        list.push(i)
        dfs(i + 1, list)
        list.pop()
      }
    }
    dfs(1, [])
    return res
};
// @lc code=end

