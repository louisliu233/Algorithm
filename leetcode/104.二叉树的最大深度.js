/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end

//非递归
var maxDepth = function(root) {
  if (root === null)return 0;
  let depth = 1;
  let queue = [root];
  while (queue.length) {
    let length = queue.length
    for(let i = 0; i < length; i++) {
      let curNode = queue.shift();
      if(curNode.left) queue.push(curNode.left);
      if(curNode.right) queue.push(curNode.right);
    }
    if(queue.length) depth++;
  }
  return depth;
};


