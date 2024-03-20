import { ListNode, reverseLinklist } from './linklist.util'

export function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode()
  dummy.next = head
  let pre = dummy
  let curr = dummy

  return dummy.next
}
