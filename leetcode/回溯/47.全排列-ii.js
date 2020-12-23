/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = []
  const used = []
  nums.sort((a,b) => a-b)
  function dfs(path){
      if(path.length === nums.length){
          res.push([...path])
          return
      }
      for(let i = 0; i < nums.length; i++){
          if(nums[i] == nums[i-1] && i-1 >= 0 && !used[i-1]){
              continue
          }
          if(used[i]){
              continue
          }
          used[i] = true
          path.push(nums[i])
          dfs(path)
          path.pop()
          used[i] = false
      }
  }
  dfs([])
  return res
};
// @lc code=end

