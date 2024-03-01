import { head, ListNode } from "../data/node";
import { getSize, print, reverseLinklist } from "../../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM3
 * 链表中的节点每 k 个一组翻转
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
export function reverseKGroup(head: ListNode, k: number): ListNode {
  // write code here
  if (head === null) return head;
  // 链表长度
  const size = getSize(head);
  let dummy = new ListNode(-1);
  dummy.next = head;
  let curr: ListNode | null = dummy;
  for (let i = 0; i < Math.floor(size / k); i++) {
    const pre = curr;
    for (let j = 0; j < k; j++) curr = curr.next as ListNode;
    // 记录下一组第一个节点且断开与下组的连接
    const next = curr.next;
    curr.next = null;
    const [head, tail] = reverseLinklist(pre.next);
    pre.next = head;
    if (tail) tail.next = next;
    curr = tail as ListNode;
  }
  return dummy.next;
}

const node = reverseKGroup(head, 2);
print(node)
