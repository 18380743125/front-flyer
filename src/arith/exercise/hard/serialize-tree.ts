import root from "../data/root"
import { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM39
 * 序列化二叉树
 * @param root TreeNode类
 * @return string
 */
export function serialize(root: TreeNode | null): string {
  // write code here
  if (root === null) return "#"
  let str = ""
  str += root.val + ";"
  str += serialize(root.left)
  str += serialize(root.right)
  return str
}

let index = 0
function deserialize(str: string): TreeNode | null {
  // write code here
  if (str.charAt(index) === "#") {
    index++
    return null
  }
  let val = 0
  while (index < str.length && str.charAt(index) !== ";") {
    const ch = str.charAt(index)
    val = 10 * val + parseInt(ch)
    index++
  }
  index++
  const root = new TreeNode(val)
  if (index >= str.length) return root
  root.left = deserialize(str)
  root.right = deserialize(str)
  return root
}

const str = serialize(root)

const node = deserialize(str)
console.log(node)
