import { ListNode, a, b } from "../data/node";
import { print, reverseLinklist } from "../../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM11
 * 链表相加
 * @param head1 ListNode
 * @param head2 ListNode
 * @return ListNode
 */
export function addInList(head1: ListNode, head2: ListNode): ListNode | null {
  // write code here
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  let [p1] = reverseLinklist(head1);
  let [p2] = reverseLinklist(head2);
  const dummy = new ListNode(-1);
  let curr = dummy;
  let carry = 0;
  while (p1 !== null || p2 !== null) {
    const num1 = p1 ? p1.val : 0;
    const num2 = p2 ? p2.val : 0;
    const sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    curr.next = node;
    curr = curr.next;
    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
  }
  if (carry !== 0) curr.next = new ListNode(carry);
  const [pNode] = reverseLinklist(dummy.next);
  return pNode;
}

const pNode = addInList(a, b);
print(pNode);
