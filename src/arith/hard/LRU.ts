// 双向链表节点
export class Node {
  public key: string;
  public val: number;
  public pre: Node | null;
  public next: Node | null;
  constructor(key: string, val: number) {
    this.key = key;
    this.val = val;
    this.pre = null;
    this.next = null;
  }
}

export class LRU {
  private capacity: number;
  private size: number;
  private obj: Record<string, Node>;
  public head: Node;
  private tail: Node;
  constructor(capacity: number) {
    this.size = 0;
    this.capacity = capacity;
    this.obj = {};
    this.head = new Node("head", -1);
    this.tail = new Node("tail", -1);
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }

  get(key: string) {
    const node = this.obj[key] || null;
    this.moveToHead(node);
    if (node === null) return -1;
    else return node.val;
  }

  set(key: string, val: number) {
    let node = this.obj[key] || null;
    if (node !== null) {
      node.val = val;
      this.moveToHead(node);
    } else {
      node = new Node(key, val);
      this.obj[key] = node;
      if (this.capacity === this.size) {
        // 容量已满, 移出最近最少使用
        this.removeLastNode();
        this.size--;
      }
      this.size++;
      this.insertHead(node);
    }
  }

  // 插入到头部
  insertHead(node: Node) {
    node.pre = this.head;
    node.next = this.head.next;
    if (this.head.next?.pre) {
      this.head.next.pre = node;
    }
    this.head.next = node;
  }

  // 移动节点到头部
  moveToHead(node: Node) {
    if (node === null) return;
    this.removeNode(node);
    this.insertHead(node);
  }

  // 移除最后一个节点
  removeLastNode() {
    if (this.head.next === this.tail) return;
    const node = this.tail.pre as Node;
    this.removeNode(node);
    delete this.obj[node.key];
  }

  // 移除节点
  removeNode(node: Node | null) {
    if (node === null) return;
    if (node.pre) {
      node.pre.next = node.next;
    }
    if (node.next) {
      node.next.pre = node.pre;
    }
    node.pre = null;
    node.next = null;
  }
}

const lru = new LRU(2);

// 1 -1 -1 3 4
lru.set("1", 1);
lru.set("2", 2);
console.log(lru.get("1"));
lru.set("3", 3);

console.log(lru.get("2"));
lru.set("4", 4);
console.log(lru.get("1"));
console.log(lru.get("3"));
console.log(lru.get("4"));
