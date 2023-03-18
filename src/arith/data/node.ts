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
const node3 = new ListNode(8);
const node4 = new ListNode(19);
const node5 = new ListNode(26);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

export { head };
