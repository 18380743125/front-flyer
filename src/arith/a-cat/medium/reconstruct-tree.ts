import { TreeNode } from "../../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM40
 * 重建二叉树
 * @param pre int整型一维数组
 * @param vin int整型一维数组
 * @return TreeNode类
 */
export function reconstructBinaryTree(pre: number[], vin: number[]): TreeNode | null {
  // write code here
  if (pre.length === 0 || vin.length === 0) {
    return null
  }
  const root = new TreeNode(pre[0])
  for (let i = 0; i < vin.length; i++) {
    if (pre[0] === vin[i]) {
      root.left = reconstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i))
      root.right = reconstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1))
      break
    }
  }
  return root
}

const pre = [1, 2, 3, 4, 5, 6, 7]
const vin = [3, 2, 4, 1, 6, 5, 7]
console.log(reconstructBinaryTree(pre, vin))
