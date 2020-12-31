/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits)return [];
    const res = [];
    const queens = [];
    let phone = {2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'}
    for (let i of digits) {
      queens.push(phone[i])
    }
    const dfs = (start, path) => {
        if (start === digits.length) {
          return res.push(path)
        }
        for (let i of queens[start]) {
          dfs(start + 1, path + i)
        }
    }
    dfs(0, '')
    return res
};
// @lc code=end

