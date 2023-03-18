import { head } from "../data/node";
import type { ListNode } from "../data/node";

/**
 * 来源：牛客网 TOP101 题号: BM1
 * 反转链表
 * @param head ListNode类
 * @return ListNode类
 */
export function reverseList(head: ListNode | null): ListNode | null {
  // write code here
  if (head === null || head.next === null) {
    return head;
  }
  let curr: ListNode | null = head;
  let pre: ListNode | null = null;
  while (curr !== null) {
    const next: ListNode | null = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  return pre;
}

console.log(reverseList(head));
