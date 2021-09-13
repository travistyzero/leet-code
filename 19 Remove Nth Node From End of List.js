/** @typedef ListNode
 * @property {undefined | number} val
 * @property {undefined | null | ListNode} next
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function (head, n) {

  let initial = new ListNode(0, head)
  let second = initial
  let first = head

  // Move the first pointer n items ahead
  for (let i = 1; i <= n; i++) {
    first = first.next
  }

  // Move through linked list until first pointer is past the tail of the list
  while (first) {
    first = first.next
    second = second.next
  }

  // Drop the nth item in the list
  second.next = second.next.next

  return initial.next
};