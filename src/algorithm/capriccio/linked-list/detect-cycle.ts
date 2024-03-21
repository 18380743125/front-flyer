import { ListNode } from '../../coco/data/node';

/**
 * 环形链表Ⅱ
 * @param head
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head,
    fast: ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow!.next;
    fast = fast!.next;
  }
  return slow;
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
node7.next = node5;

const entryNode = detectCycle(node1);
console.log(entryNode);
