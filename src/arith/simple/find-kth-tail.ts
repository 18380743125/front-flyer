import type { ListNode } from "../data/node";
import { getSize, print } from "../utils/linklist.util";
import { head } from "../data/node";

/**
 * 来源：牛客网 TOP101 题号: BM8
 * 链表中倒数最后 k 个结点
 * @param head ListNode
 * @param k number
 * @return ListNode
 */
export function findKthToTail(head: ListNode, k: number): ListNode | null {
  // write code here
  const size = getSize(head);
  if (k > size) return null;
  let curr: ListNode | null = head;
  for (let i = 0; i < size - k && curr; i++) {
    curr = curr.next;
  }
  return curr;
}

const node = findKthToTail(head, 3);
print(node);
