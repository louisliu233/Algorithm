/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const dfs = (start, path) => {
      if (start == s.length) {
        res.push([...path])
        return
      }
      for (let i = start; i < s.length; i++) {
        if (!isPalindrome(start, i)) continue
        path.push(s.substring(start, i + 1));
        dfs(i + 1, path)
        path.pop()
      }
    }

    function isPalindrome(start, end) {
      let i = start, j = end
      while(i < j) {
        if (s[i++] !== s[j--])return false
      }
      return true
    }
    dfs(0, [])
    return res
};
// @lc code=end

