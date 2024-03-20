import IStack from './types/IStack';

class ArrayStack<T> implements IStack<T> {
  private data: T[];

  private _size: number;

  constructor() {
    this.data = [];
    this._size = 0;
  }

  peek(): T | null {
    if (this.size === 0) {
      return null;
    }
    return this.data[this.size - 1];
  }

  push(value: T): void {
    this.data.push(value);
    this._size++;
  }

  pop(): T | null {
    if (this._size === 0) {
      return null;
    }
    --this._size
    return this.data.pop() as T;
  }

  get size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }
}

export default ArrayStack;
