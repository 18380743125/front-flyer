import { getSize, ListNode, print } from '../utils/linklist.util';

/**
 * 链表相交
 * @param headA
 * @param headB
 */
export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let sizeA = getSize(headA);
  let sizeB = getSize(headB);
  if (sizeA < sizeB) {
    [sizeA, sizeB] = [sizeB, sizeA];
    let node = headA;
    headA = headB;
    headB = node;
  }

  let diffSize = Math.abs(sizeA - sizeB);
  while (diffSize > 0 && headA !== null) {
    headA = headA.next;
    diffSize--;
  }

  while (headA !== null && headB !== null) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
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

const intersectionNode = getIntersectionNode(node3, node5);
print(intersectionNode, 'headA 与 headB 相交的节点：');
