/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    const res = [];
    const dfs = (start, path) => {
      res.push(path)
      for (let i = start; i < S.length; i++) {
        if (path[i] >= 'a' && path[i] <= 'z') {
          dfs(i + 1, path.slice(0, i) + path[i].toUpperCase() + path.slice(i + 1))
        } else if (path[i] >= 'A' && path[i] <= 'Z') {
          dfs(i + 1, path.slice(0, i) + path[i].toLowerCase() + path.slice(i + 1))
        }
      }
    }
    dfs(0, S)
    return res;
};
// @lc code=end

