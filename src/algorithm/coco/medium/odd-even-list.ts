import { head, ListNode } from "../data/node";
import { print } from "../../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM11
 * 链表的奇偶重排
 * @param head ListNode
 * @return ListNode
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  // write code here
  const odd = new ListNode(-1);
  const even = new ListNode(-1);
  let pOdd = odd;
  let pEven = even;
  // 奇偶位标记
  let flag = false;
  while (head !== null) {
    const next: ListNode | null = head.next;
    if (!flag) {
      // 奇数位
      pOdd.next = head;
      pOdd = pOdd.next as ListNode;
    } else {
      // 偶数位
      pEven.next = head;
      pEven = pEven.next as ListNode;
    }
    head.next = null;
    flag = !flag;
    head = next;
  }
  pOdd.next = even.next;
  return odd.next;
}

export function oddEvenList1(head: ListNode | null): ListNode | null {
  // write code here
  if (head === null || head.next === null) return head;
  let odd: ListNode | null = head;
  let even: ListNode | null = head.next;
  const evenHead = even;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next || null;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

print(head);
print(oddEvenList1(head));
