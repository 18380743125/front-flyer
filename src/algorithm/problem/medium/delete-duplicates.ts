import { ListNode, b } from "../data/node";
import { print } from "../../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM16
 * 删除有序链表中重复的元素 - Ⅱ
 * @param head ListNode
 * @return ListNode
 */
export function deleteDuplicates(head: ListNode): ListNode | null {
  // write code here
  if (head === null || head.next === null) return head;
  const dummy = new ListNode(-1);
  dummy.next = head;
  let curr = dummy;
  while (curr.next !== null && curr.next.next !== null) {
    if (curr.next.val === curr.next.next.val) {
      const val = curr.next.val;
      while (curr.next !== null && curr.next.val === val) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
}

print(deleteDuplicates(b));
