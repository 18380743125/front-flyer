import { cycle, head, ListNode } from "../data/node";

/**
 * 来源：牛客网 TOP101 题号: BM6
 * 判断链表是否有环
 * @param head ListNode类
 * @return boolean
 */
function hasCycle(head: ListNode): boolean {
  // write code here
  if (head === null || head.next === null) return false;
  let slow: ListNode = head;
  let fast: ListNode | null = head.next;
  while (fast !== null) {
    if (slow === fast) return true;
    slow = slow.next as ListNode;
    fast = fast.next;
    if (fast !== null) fast = fast.next;
  }
  return false;
}

console.log(hasCycle(cycle)); // true
console.log(hasCycle(head)); // false
