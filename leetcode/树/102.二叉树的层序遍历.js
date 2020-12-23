/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root)return []
  let queue = [root]
  let level = 0
  let res = []
  while(queue.length){
    res.push([])
    let len = queue.length
    while(len--){
      let node = queue.shift()
      res[level].push(node.val)
      if(node.left)queue.push(node.left)
      if(node.right)queue.push(node.right)
    }
    level++
  }
  return res
};
// @lc code=end

// 递归
var levelOrder = function(root) {
  let res = [];
  function recurtion(root, level) {
    if (!root) return
    res[level] = res[level] || [];
    res[level].push(root.val);
    recurtion(root.left, level + 1);
    recurtion(root.right, level + 1);
  }
  recurtion(root, 0);
  return res
};

