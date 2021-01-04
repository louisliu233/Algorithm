/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    const reverse = (pre, cur) => {
      if (!cur) return pre;
      let next = cur.next
      cur.next = pre
      return reverse(cur, next)
    }
    let p = dummyNode = new ListNode()
    p.next = head
    let front, tail, start, end
    for (let i = 0; i < m - 1; i++) {
        p = p.next
    }
    front = p
    start = front.next
    for (let i = m - 1; i < n; i++) {
      p = p.next
    }
    end = p
    tail = end.next
    end.next = null
    front.next = reverse(null, start)
    start.next = tail
    return dummyNode.next
}
// @lc code=end
// 非递归
var reverseBetween = function(head, m, n) {
  let count = n - m
  let p = dummyNode = new ListNode()
  let pre, cur, tail
  p.next = head
  for (let i = 0; i < m - 1; i++) {
    p = p.next
  }
  let front = p
  pre = tail = p.next
  cur = pre.next
  for (let i = 0; i < count; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  front.next = pre
  tail.next = cur
  return dummyNode.next
}
