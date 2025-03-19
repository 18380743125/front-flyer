import { ListNode } from '../utils/linklist.util';

/**
 * 设计单链表带头节点
 */
export class MyLinkedList {
  private readonly head: ListNode;

  constructor() {
    this.head = new ListNode();
  }

  get(index: number): number {
    let currNode: ListNode | null = this.head;
    while (currNode && index >= 0) {
      currNode = currNode.next;
      index--;
    }
    return currNode ? currNode.val : -1;
  }

  addAtHead(val: number): void {
    const node = new ListNode(val);
    node.next = this.head.next;
    this.head.next = node;
  }

  addAtTail(val: number): void {
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    currNode.next = new ListNode(val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0) {
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    let currNode: ListNode | null = this.head;
    // 找到要插入位置的前一个节点
    while (currNode !== null && index > 0) {
      currNode = currNode.next;
      index--;
    }
    if (currNode === null) {
      return;
    }
    const node = new ListNode(val);
    node.next = currNode.next;
    currNode.next = node;
  }

  deleteAtIndex(index: number): void {
    let currNode: ListNode | null = this.head;
    while (currNode !== null && index > 0) {
      currNode = currNode.next;
      index--;
    }
    if (currNode === null) {
      return;
    }
    currNode.next = currNode.next?.next || null;
  }
}

// const myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(2);
// myLinkedList.deleteAtIndex(1);
// myLinkedList.addAtHead(2);
// myLinkedList.addAtHead(7);
// myLinkedList.addAtHead(3);
// myLinkedList.addAtHead(2);
// myLinkedList.addAtHead(5);
// myLinkedList.addAtTail(5);
// myLinkedList.get(5);
// myLinkedList.deleteAtIndex(6);
// myLinkedList.deleteAtIndex(4);

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
// 链表变为 1->2->3
myLinkedList.addAtIndex(1, 2);
// 返回 2
myLinkedList.get(1);
// 现在，链表变为 1->3
myLinkedList.deleteAtIndex(1);
// 返回 3
myLinkedList.get(1);
