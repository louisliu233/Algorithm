/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  const dfs = (index, list) => {
    res.push([...list])
    for(let i = index; i < nums.length; i++) {
      list.push(nums[i])
      dfs(i + 1, list)
      list.pop()
    }
  }
  dfs(0, [])
  return res
};
// @lc code=end

// 思路二
var subsets = function(nums) {
  const res = []
  const dfs = (index, list) => {
    if(index === nums.length){
      res.push([...list])
      return
    }
    list.push(nums[index])
    dfs(index + 1, list)
    list.pop()
    dfs(index + 1, list)
  }
  dfs(0, [])
  return res 
};
