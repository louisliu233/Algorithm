/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    const dfs = (subRes, start) => {
      if (subRes.length == 4 && start == s.length) {
          res.push(subRes.join('.'));
          return
      }
      if (subRes.length == 4 && start < s.length) {
        return
      }
      for (let len = 1; len <= 3; len++) {
        if (start + len - 1 >= s.length)return
        if (len != 1 && s[start] == '0')return
        const str = s.substring(start, start + len)
        if (len == 3 && +str > 255)return
        subRes.push(str)
        dfs(subRes, start + len)
        subRes.pop()
      }
    }
    dfs([], 0)
    return res
};
// @lc code=end

