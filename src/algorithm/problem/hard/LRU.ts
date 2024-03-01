// 节点
export class Node {
  public key: string;
  public value: number;
  public prev: Node | null;
  public next: Node | null;
  constructor(key: string, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LRU {
  private capacity: number;
  private size: number;
  private cacheObj: Record<string, Node>;
  public head: Node;
  private tail: Node;
  constructor(capacity: number) {
    this.size = 0;
    this.capacity = capacity;
    this.cacheObj = {};
    this.head = new Node("head", -1);
    this.tail = new Node("tail", -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: string): number {
    const node = this.cacheObj[key] || null;
    if (node !== null) {
      this.moveToHead(node);
      return node.value;
    }
    return -1;
  }

  set(key: string, value: number): void {
    let node = this.cacheObj[key] || null;
    if (node !== null) {
      node.value = value;
      this.moveToHead(node);
    } else {
      node = new Node(key, value);
      if (this.capacity === this.size) {
        this.removeLastNode();
      } else {
        this.size++;
      }
      this.appendAfter(node, this.head);
      this.cacheObj[key] = node;
    }
  }

  appendAfter(node: Node, target: Node): void {
    const targetNext = target.next as Node;
    node.prev = target;
    target.next = node;
    node.next = targetNext;
    targetNext.prev = node;
  }

  moveToHead(node: Node): void {
    this.removeNode(node);
    this.appendAfter(node, this.head);
  }

  removeLastNode(): void {
    if (this.head.next === this.tail) return;
    const node = this.tail.prev as Node;
    this.removeNode(node);
    delete this.cacheObj[node.key];
  }

  removeNode(node: Node): void {
    const nodePrev = node.prev as Node;
    const nodeNext = node.next as Node;
    nodePrev.next = nodeNext;
    nodeNext.prev = nodePrev;
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
