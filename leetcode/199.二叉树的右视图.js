/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let res = [];
  let levelList = [];
  function recurtion(root, level){
      if(!root)return
      levelList[level] = levelList[level] || [];
      levelList[level].push(root.val)
      recurtion(root.left, level + 1)
      recurtion(root.right, level + 1)
  }
  recurtion(root, 0)
  res = levelList.map(item => item.pop())
  return res;
};
// @lc code=end

