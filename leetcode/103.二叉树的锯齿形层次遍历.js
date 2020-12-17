/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function(root) {
    let res = [];
    function recurtion(root, level){
      if(!root) return
      res[level] = res[level] || [];
      if(level % 2 === 0){
        res[level].push(root.val);
      } else {
        res[level].unshift(root.val);
      }
      recurtion(root.left, level + 1);
      recurtion(root.right, level + 1);
    }
    recurtion(root, 0)
    return res;
};
// @lc code=end

// 非递归
var zigzagLevelOrder = function(root) {
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
    if(level % 2 === 0)res[level].reverse()
    level++
  }
  return res
};
