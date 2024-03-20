import { head, ListNode } from "../data/node";
import { print } from "../../capriccio/linked-list/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM12
 * 单链表的排序
 * @param head ListNode
 * @return ListNode
 */
export function sortInList(head: ListNode): ListNode | null {
  // write code here
  if (head === null || head.next === null) return head;
  let left: ListNode = head;
  let mid: ListNode | null = head.next;
  let right: ListNode | null = head.next.next;
  while (right !== null && right.next !== null) {
    left = left.next as ListNode;
    mid = mid.next as ListNode;
    right = right.next.next;
  }
  left.next = null;
  return mergeTwoList(sortInList(head), sortInList(mid));
}

export function mergeTwoList(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(-1);
  let curr = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1 !== null) curr.next = l1;
  if (l2 !== null) curr.next = l2;
  return dummy.next;
}

const node = sortInList(head);
print(node);
