export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
 * 前序遍历
 * @param root TreeNode类
 * @return int整型一维数组
 */
function preorderTraversal(root: TreeNode): number[] {
  // write code here
  const result = [] as number[]
  if (root === null) return result
  const stack = [root]
  while (stack.length !== 0) {
    const node = stack.pop()
    if (node) result.push(node.val)
    if (node?.right) stack.push(node.right)
    if (node?.left) stack.push(node.left)
  }
  return result
}

export const root = new TreeNode(1)
const one = new TreeNode(2)
const two = new TreeNode(5)
root.right = one
one.left = two

console.log(preorderTraversal(root))
