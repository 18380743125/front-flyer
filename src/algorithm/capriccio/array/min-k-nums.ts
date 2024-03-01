import { adjustMaxHeap, buildHeap, finishHeapSort } from '../../utils/heap-sort.util';

export function minKNums(n: number, k: number, arr: number[]) {
  // 构建长度为 k 的大顶堆
  const maxHeap = buildHeap(arr, k, 'MAX_HEAP');
  for (let i = k; i < arr.length; i++) {
    if (maxHeap[0] > arr[i]) {
      maxHeap[0] = arr[i];
      adjustMaxHeap(maxHeap, 0, k);
    }
  }
  const result: number[] = finishHeapSort(maxHeap, 'MAX_HEAP');
  return result.join(' ');
}

const arr = [1, 3, 5, 7, 2];
console.log(minKNums(5, 2, arr));

