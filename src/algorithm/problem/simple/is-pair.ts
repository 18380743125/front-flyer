import { head, ListNode } from "../data/node";
import { copy, reverseLinklist } from "../../utils/linklist.util";

/**
 * 来源：牛客网 TOP101 题号: BM13
 * 判断一个链表是否为回文结构
 * @param head ListNode
 * @return boolean
 */
export function isPail(head: ListNode): boolean {
  // write code here
  let pNode: ListNode | null = copy(head);
  let [revNode] = reverseLinklist(head);
  while (pNode && revNode) {
    if (pNode.val !== revNode.val) return false;
    pNode = pNode.next;
    revNode = revNode.next;
  }
  return true;
}

console.log(isPail(head));
