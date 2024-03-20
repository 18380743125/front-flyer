interface IStack<T> {
  peek(): T | null;
  push(value: T): void;
  pop(): T | null;
  size: number;
  isEmpty(): boolean;
}

export default IStack;
