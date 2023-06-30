export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const head = new ListNode(6);
const node1 = new ListNode(9);
const node2 = new ListNode(13);
const node3 = new ListNode(19);
const node4 = new ListNode(20);
const node5 = new ListNode(26);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const node = new ListNode(10);
const n1 = new ListNode(30);
const n2 = new ListNode(33);
const n3 = new ListNode(36);
node.next = n1;
n1.next = n2;
n2.next = n3;

const pNode = new ListNode(6);
const p1 = new ListNode(13);
pNode.next = p1;
p1.next = node3;

const cycle = new ListNode(37);
const q1 = new ListNode(6);
const q2 = new ListNode(16);
const q3 = new ListNode(7);
cycle.next = q1;
q1.next = q2;
q2.next = q3;
q3.next = q1;

const a = new ListNode(1);
const a1 = new ListNode(4);
const a2 = new ListNode(0);
const a3 = new ListNode(3);
a.next = a1;
a1.next = a2;
a2.next = a3;

const b = new ListNode(1);
const b1 = new ListNode(1);
const b2 = new ListNode(3);
b.next = b1;
b1.next = b2;

export { head, node, pNode, cycle, a, b };
