import { ListNode, getSize, reverseLinklist, print } from '../../utils/linklist.util';

/**
 * 两两交换链表中的节点
 * @param head
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  const dummy = new ListNode();
  dummy.next = head;
  const size = getSize(head);
  let curr: ListNode | null = dummy;
  for (let i = 0; i < Math.floor(size / 2) && curr !== null; i++) {
    const pre = curr;
    for (let j = 0; j < 2; j++) {
      curr = curr.next as ListNode;
    }
    const next = curr.next;
    curr.next = null;
    const [head, tail] = reverseLinklist(pre.next);
    pre.next = head;
    tail!.next = next;
    curr = tail;
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

print(node1, '两两交换链表之前：')
const head = swapPairs(node1);
print(head, '两两交换链表之后：')
