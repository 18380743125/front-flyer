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

const root = new TreeNode(3)
const node1 = new TreeNode(9)
const node2 = new TreeNode(20)
const node3 = new TreeNode(15)
const node4 = new TreeNode(7)
root.left = node1
root.right = node2
node2.left = node3
node2.right = node4
node3.left = new TreeNode(13)

export default root

// 二叉搜索树
const sroot = new TreeNode(10)
const n1 = new TreeNode(6)
const n2 = new TreeNode(14)
const n3 = new TreeNode(4)
const n4 = new TreeNode(8)
const n5 = new TreeNode(12)
const n6 = new TreeNode(16)
sroot.left = n1
sroot.right = n2
n1.left = n3
n1.right = n4
n2.left = n5
n2.right = n6

export { sroot }
