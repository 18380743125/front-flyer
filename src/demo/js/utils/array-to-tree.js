export function array2Tree(items) {
  const map = {};
  const roots = [];

  // 第一次遍历：初始化所有节点并存入映射
  for (const item of items) {
    map[item.id] = {
      ...item,
      children: []
    };
  }

  // 第二次遍历：建立父子关系
  for (const item of items) {
    const node = map[item.id];
    const parentId = node.parentId;
    if (parentId === null || parentId === undefined) {
      roots.push(node);
    } else {
      const parent = map[parentId];
      if (parent) {
        parent.children.push(node);
      } else {
        // 找不到父节点，可能数据提供有误或者出现脏数据
      }
    }
  }

  return roots;
}
