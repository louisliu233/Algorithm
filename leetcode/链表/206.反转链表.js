/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const reverse = (pre, cur) => {
      if (!cur) return pre
      let next = cur.next
      cur.next = pre
      return reverse(cur, next)
    }
    return reverse(null, head)
};
// @lc code=end
// 非递归
var reverseList = function(head) {
    if (!head) return null
    let pre = null, cur = head
    while (cur) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
}
