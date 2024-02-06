import { ListNode, head, node } from "../data/node";
import { print } from "../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM5
 * 合并 k 个已排序的链表
 * @param lists ListNode类一维数组
 * @return ListNode类
 */

function mergeKLists(lists: ListNode[]): ListNode | null {
  // write code here
  if (lists.length === 0) return null;
  return divideMerge(lists, 0, lists.length - 1);
}

function divideMerge(
  lists: ListNode[],
  left: number,
  right: number
): ListNode | null {
  if (left > right) return null;
  if (left === right) return lists[left];
  const mid = (left + right) >>> 1;
  return merge(
    divideMerge(lists, left, mid),
    divideMerge(lists, mid + 1, right)
  );
}

/**
 * 合并两个排序链表
 * @param head1
 * @param head2
 */
function merge(
  head1: ListNode | null,
  head2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(-1);
  let curr: ListNode | null = dummy;
  while (head1 && head2) {
    if (head1.val < head2.val) {
      curr.next = head1;
      head1 = head1.next;
    } else {
      curr.next = head2;
      head2 = head2.next;
    }
    curr = curr.next;
  }
  if (head1 !== null) curr.next = head1;
  if (head2 !== null) curr.next = head2;
  return dummy.next;
}

const n = mergeKLists([head, node]);
print(n);
