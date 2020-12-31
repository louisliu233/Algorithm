/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const cols = new Array(n);
    const queens = new Array(n);
    const leftTop = new Array((n << 1) - 1);
    const rightTop = new Array(leftTop.length);
    const dfs = (row) => {
      if (row === n) {
        let arr = [];
        for (let i in queens) {
          arr.push('Q'.padStart(queens[i] + 1, '.').padEnd(n, '.'))
        }
        res.push(arr);
        return
      }
      for (let col = 0; col < n; col++) {
        if (cols[col]) continue
        let ltIndex = row - col + n - 1;
        if (leftTop[ltIndex]) continue
        let rtIndex = row + col;
        if (rightTop[rtIndex]) continue

        queens[row] = col;
        cols[col] = true;
        leftTop[ltIndex] = true;
        rightTop[rtIndex] = true;
        dfs(row + 1)
        cols[col] = false;
        leftTop[ltIndex] = false;
        rightTop[rtIndex] = false;
      }
    }
    dfs(0)
    return res
};
// @lc code=end

