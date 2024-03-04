import { ListNode } from './utils';

/**
 * 给你一个链表的头节点 head 和一个整数 val。请你删除链表中所有满足 Node.val == val 的节点，
 * 并返回 新的头节点 。
 * @param head
 * @param val
 */
export function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let currentNode: ListNode | null | undefined = dummy;
  while (currentNode?.next !== null) {
    if (currentNode?.next.val === val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode?.next;
    }
  }
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

const head = removeElements(node1, 6);
console.log(head);
