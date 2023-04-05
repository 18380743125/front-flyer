type Node = CacheNode | FreqNode;

// 缓存节点
export class CacheNode {
  freq: number;
  key?: number;
  value?: number;
  prev: CacheNode | null;
  next: CacheNode | null;
  constructor(freq: number, key?: number, value?: number) {
    this.freq = freq;
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// 频次节点
export class FreqNode {
  freq: number;
  cacheHead: CacheNode;
  cacheTail: CacheNode;
  prev: FreqNode | null;
  next: FreqNode | null;
  constructor(freq: number) {
    this.freq = freq;
    this.cacheHead = new CacheNode(0);
    this.cacheTail = new CacheNode(0);
    this.cacheHead.next = this.cacheTail;
    this.cacheTail.prev = this.cacheHead;
    this.prev = null;
    this.next = null;
  }
}

// 设计 LFU 结构
export class LFUCache {
  capacity: number;
  size: number;
  freqHead: FreqNode;
  freqTail: FreqNode;
  cacheMap: Record<number, CacheNode>;
  freqMap: Record<number, FreqNode>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.freqHead = new FreqNode(0);
    this.freqTail = new FreqNode(0);
    this.freqHead.next = this.freqTail;
    this.freqTail.prev = this.freqHead;
    this.cacheMap = {};
    this.freqMap = {};
  }

  get(key: number): number {
    const node = this.cacheMap[key] || null;
    if (node !== null) {
      this.moveToNextFreqNode(node);
      return node.value as number;
    }
    return -1;
  }

  put(key: number, value: number): void {
    let node = this.cacheMap[key] || null;
    if (node !== null) {
      node.value = value;
      this.moveToNextFreqNode(node);
    } else {
      if (this.size === this.capacity) {
        this.removeLowUseCacheNode();
      } else {
        this.size++;
      }
      node = new CacheNode(1, key, value);
      const freqNode = this.getFreqNode(1, this.freqTail);
      this.appendAfter(node, freqNode.cacheHead);
      this.cacheMap[key] = node;
    }
  }

  removeLowUseCacheNode(): void {
    const node = this.freqTail.prev?.cacheTail?.prev as CacheNode;
    this.removeNode(node);
    delete this.cacheMap[node.key as number];
    this.removeFreqNodeWhenEmpty(node.freq);
  }

  moveToNextFreqNode(node: CacheNode): void {
    const freq = node.freq;
    const freqNode = this.getFreqNode(freq + 1, this.freqMap[freq]);
    this.removeNode(node);
    this.appendAfter(node, freqNode.cacheHead);
    node.freq = freq + 1;
    this.removeFreqNodeWhenEmpty(freq);
  }

  getFreqNode(freq: number, target: FreqNode): FreqNode {
    let freqNode = this.freqMap[freq] || null;
    if (freqNode === null) {
      freqNode = new FreqNode(freq);
      this.insertBefore(freqNode, target);
      this.freqMap[freq] = freqNode;
    }
    return freqNode;
  }

  removeFreqNodeWhenEmpty(freq: number): void {
    const freqNode = this.freqMap[freq] || null;
    if (freqNode === null) return;
    if (freqNode.cacheHead.next === freqNode.cacheTail) {
      this.removeNode(freqNode);
      delete this.freqMap[freq];
    }
  }

  insertBefore(node: Node, target: Node): void {
    const targetPrev = target.prev as Node;
    node.next = target;
    target.prev = node;
    node.prev = targetPrev;
    targetPrev.next = node;
  }

  appendAfter(node: Node, target: Node): void {
    const targetNext = target.next as Node;
    node.prev = target;
    target.next = node;
    node.next = targetNext;
    targetNext.prev = node;
  }

  removeNode(node: Node): void {
    const nodePrev = node.prev as Node;
    const nodeNext = node.next as Node;
    nodePrev.next = nodeNext;
    nodeNext.prev = nodePrev;
  }
}

/**
 * 设计 LFU 缓存结构
 * @param operators number[][]
 * @param capacity 容量
 * @return number[]
 */
export function LFU(operators: number[][], capacity: number): number[] {
  // write code here
  const lfu = new LFUCache(capacity);
  const result: number[] = [];
  for (const item of operators) {
    if (item[0] === 1) {
      lfu.put(item[1], item[2]);
    } else {
      const value = lfu.get(item[1]);
      result.push(value);
    }
  }
  return result;
}

const operators = [
  [1, 1, 1],
  [1, 2, 2],
  [1, 3, 2],
  [1, 2, 4],
  [1, 3, 5],
  [2, 2],
  [1, 4, 4],
  [2, 1],
];
const result = LFU(operators, 3);
console.log(result);
