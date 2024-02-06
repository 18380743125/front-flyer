import { ListNode, b } from "../data/node";
import { print } from "../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM15
 * 删除有序链表中重复的元素 -Ⅰ
 * @param head ListNode类
 * @return ListNode类
 */

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  // write code here
  if (head === null || head.next === null) {
    return head;
  }
  const dummy = new ListNode(-1);
  dummy.next = head;
  let curr: ListNode | null = head;
  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
}

const node = deleteDuplicates(b);
print(node);
