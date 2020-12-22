/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res = []
  nums.sort( (a, b) => a - b )
  const dfs = (index, list) => {
    res.push([...list])
    for(let i = index; i < nums.length; i++) {
      if(i > index && nums[i] === nums[i - 1]) continue
      list.push(nums[i])
      dfs(i + 1, list)
      list.pop()
    }
  }
  dfs(0, [])
  return res
};
// @lc code=end

