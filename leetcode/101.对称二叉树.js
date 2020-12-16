/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// 非递归
var isSymmetric = function(root) {
    if(root === null)return true;
    let queue = [root.left, root.right];
    let node1, node2;
    while(queue.length){
      node1 = queue.shift();
      node2 = queue.shift();
      if(!node1 && !node2)continue
      if(!node1 || !node2 || node1.val !== node2.val)return false
      queue.push(node1.left)
      queue.push(node2.right)
      queue.push(node1.right)
      queue.push(node2.left)
    }
    return true;
};
// @lc code=end

// 递归
var isSymmetric = function(root) {
  function recurtion(left, right) {
    if(!left && !right)return true;
    if(!left || !right)return false;
    return left.val === right.val && 
    recurtion(left.left, right.right) && 
    recurtion(left.right, right.left)
  }
  return recurtion(root, root)
};
