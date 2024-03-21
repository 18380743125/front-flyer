/**
 * 节点（单链表）
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * 打印链表
 * @param head
 * @param tip
 */
export function print(head: ListNode | null, tip: string = ''): void {
  const result: number[] = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(`${tip}${result.join('，')}`);
}

/**
 * 获取链表长度
 * @param head
 */
export function getSize(head: ListNode | null): number {
  let count = 0;
  while (head !== null) {
    count++;
    head = head.next;
  }
  return count;
}

/**
 * 拷贝链表
 * @param head
 */
export function copy(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  const dummy = new ListNode();
  let curr: ListNode = dummy;
  while (head !== null) {
    curr.next = new ListNode(head.val);
    head = head.next;
    curr = curr.next;
  }
  return dummy.next;
}

/**
 * 反转链表
 * @param head
 */
export function reverseLinklist(head: ListNode | null): Array<ListNode | null> {
  if (head === null || head.next === null) return [head, head];
  let pre: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr !== null) {
    const next: ListNode | null = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  // 新的 [head, tail]
  return [pre, head];
}
