import { head, ListNode } from "../data/node";
import { getSize, print } from "../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM9
 * 删除链表的倒数第 n 个节点
 * @param head ListNode
 * @param n number
 * @return ListNode
 */

export function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
  // write code here
  const size = getSize(head);
  if (n > size) return head;
  const dummy = new ListNode(-1);
  dummy.next = head;
  let curr: ListNode | null = dummy;
  for (let i = 0; i < size - n && curr; i++) {
    curr = curr.next;
  }
  if (curr) {
    curr.next = curr?.next?.next || null;
  }
  return dummy.next;
}

const node = removeNthFromEnd(head, 3);
print(node);
