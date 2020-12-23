/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const used = [];
  function dfs(path){
    if(path.length === nums.length) {
      res.push([...path])
      return
    }
    for(let i = 0; i < nums.length; i++) {
      if(!used[i]) {
        used[i] = true
        path.push(nums[i]);
        dfs(path);
        path.pop();
        used[i] = false
      }
    }
  }
  dfs([]);
  return res;
};
// @lc code=end

//leetcode题解
var permute = function(nums) {
  const res = [];
  const used = {};
  function dfs(path){
    if(path.length === nums.length) {
      res.push([...path]) // push一个新的数组，不然引用数组指向的是同一个栈
      return
    }
    for(const num of nums) { //const 保证每次循环num的值不被覆盖
      // if (path.includes(num)) continue; // 查找的时间是O(n)，别这么写，时间复杂度增加
      if(!used[num]) {
        used[num] = true
        path.push(num);
        dfs(path);
        path.pop();
        used[num] = false
      }
    }
  }
  dfs([]);
  return res;
};