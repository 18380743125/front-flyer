import { array2Tree } from '../utils/array-to-tree.js';

const arr = [
  { id: 1, parentId: null, label: '系统管理' },
  { id: 2, parentId: 1, label: '菜单管理' },
  { id: 3, parentId: 1, label: '用户管理' },
  { id: 4, parentId: 1, label: '角色管理' },
  { id: 5, parentId: null, label: '赛事管理' },
  { id: 6, parentId: 5, label: '报名信息' },
  { id: 7, parentId: 5, label: '赛事信息' },
  { id: 8, parentId: 5, label: '排名信息' },
  { id: 9, parentId: 5, label: '工作台' }
];

const tree = array2Tree(arr);

console.log(JSON.stringify(tree));
