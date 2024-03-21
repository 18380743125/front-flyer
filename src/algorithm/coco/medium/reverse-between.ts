import { ListNode, head } from "../data/node";

/**
 * 来源：牛客网 TOP101 题号: BM2
 * 链表内指定区间反转
 * @param head ListNode 类
 * @param m number
 * @param n number
 * @return ListNode类
 */
export function reverseBetween(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  // write code here
  const dummy = new ListNode(-1);
  dummy.next = head;
  let pre: ListNode = dummy;
  for (let i = 0; i < m - 1 && pre && pre.next; i++) {
    pre = pre.next
  }
  let curr = pre ? pre.next : null;
  for (let i = 0; i < n - m && curr && curr.next; i++) {
    const next = curr.next
    curr.next = next.next
    next.next = pre.next
    pre.next = next
  }
  return dummy.next;
}

console.log(reverseBetween(head, 2, 4));
