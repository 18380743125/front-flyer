import { ListNode, head, node } from "../data/node";
import { print } from "../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM4
 * 合并两个排序的链表
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function merge(
  head1: ListNode | null,
  head2: ListNode | null
): ListNode | null {
  // write code here
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  if (head1.val < head2.val) {
    head1.next = merge(head1.next, head2);
    return head1;
  } else {
    head2.next = merge(head1, head2.next);
    return head2;
  }
}

const n = merge(head, node);
print(n);
