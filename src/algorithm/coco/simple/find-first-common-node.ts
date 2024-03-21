import type { ListNode } from "../data/node";
import { head, pNode } from "../data/node";
import { print } from "../../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM10
 * 两个链表的第一个公共节点 (无环)
 * @param head1 ListNode
 * @param head2 ListNode
 * @return ListNode
 */

export function findFirstCommonNode(
  head1: ListNode,
  head2: ListNode
): ListNode | null {
  // write code here
  if (head1 === null || head2 === null) {
    return null;
  }
  let p1: ListNode | null = head1;
  let p2: ListNode | null = head2;
  while (p1 !== p2) {
    p1 = p1 ? p1.next : head2;
    p2 = p2 ? p2.next : head1;
  }
  return p1;
}

const p = findFirstCommonNode(head, pNode);
print(p);
