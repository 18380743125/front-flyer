import { ListNode } from '../data/node';
import { print } from '../utils/linklist.util';

/**
 * 删除链表的倒数第 N 个节点
 * @param head
 * @param n
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null;
  }
  const dummy = new ListNode();
  dummy.next = head;
  let slow: ListNode | null = dummy;
  let fast: ListNode | null = dummy;
  for (let i = 0; i < n && fast !== null; i++) {
    fast = fast.next;
  }
  if (fast === null) {
    return head;
  }
  while (fast && fast.next !== null) {
    slow = slow.next as ListNode;
    fast = fast.next;
  }
  slow.next = slow.next?.next as ListNode | null;
  return dummy.next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(6);
const node4 = new ListNode(3);
const node5 = new ListNode(4);
const node6 = new ListNode(5);
const node7 = new ListNode(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

print(node1, '删除链表的倒数第 2 个节点：');
const head = removeNthFromEnd(node1, 2);
print(head, '删除链表的倒数第 2 个节点：');
