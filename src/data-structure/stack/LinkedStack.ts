import IStack from './types/IStack';

class LinkedStack<T> implements IStack<T> {
  peek(): T | null {
    throw new Error('Method not implemented.');
  }

  push(): void {
    throw new Error('Method not implemented.');
  }

  pop(): T | null {
    throw new Error('Method not implemented.');
  }

  get size(): number {
    throw new Error('Method not implemented.');
  }

  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }
}

export default LinkedStack;
