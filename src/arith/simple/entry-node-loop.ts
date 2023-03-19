import { head, cycle, ListNode } from "../data/node";

/**
 * 来源：牛客网 TOP101 题号: BM7
 * 链表中环的入口结点
 * @param head ListNode类
 * @return ListNode类
 */
function entryNodeOfLoop(head: ListNode): ListNode | null {
  // write code here
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast !== null) {
    if (fast === null || fast.next === null || fast.next.next === null) {
      return null;
    }
    slow = slow?.next || null;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  fast = head;
  while (slow !== fast) {
    slow = slow?.next || null;
    fast = fast?.next || null;
  }
  return slow;
}

console.log(entryNodeOfLoop(head));
console.log(entryNodeOfLoop(cycle));
