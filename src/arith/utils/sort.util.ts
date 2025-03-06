// types
type HeapWay = 'MAX_HEAP' | 'MIN_HEAP';
type SortWay = 'ASC' | 'DESC';

/**
 * 堆排序 - 大顶堆排序
 * @param arr 源数组
 * @param way 1 - 升序 | 0 - 升序
 */
export function heapSort(arr: number[], way: SortWay = 'ASC') {
  const n = arr.length;
  // 建堆
  if (way === 'ASC') {
    arr = buildHeap(arr, n, 'MAX_HEAP');
    finishHeapSort(arr, 'MAX_HEAP');
  } else if (way === 'DESC') {
    arr = buildHeap(arr, n, 'MIN_HEAP');
    finishHeapSort(arr, 'MIN_HEAP');
  }
  return arr;
}

// 建堆
export function buildHeap(arr: number[], n: number, way: HeapWay) {
  const heap: number[] = arr.slice(0, n);
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    if (way === 'MAX_HEAP') adjustMaxHeap(heap, i, n);
    else if (way === 'MIN_HEAP') adjustMinHeap(heap, i, n);
  }
  return heap;
}

export function finishHeapSort(arr: number[], way: HeapWay) {
  const n = arr.length;
  // 排序
  for (let k = n - 1; k > 0; k--) {
    const temp = arr[0];
    arr[0] = arr[k];
    arr[k] = temp;
    if (way === 'MAX_HEAP') adjustMaxHeap(arr, 0, k);
    else if (way === 'MIN_HEAP') adjustMinHeap(arr, 0, k);
  }
  return arr;
}

export function adjustMaxHeap(arr: number[], i: number, n: number) {
  const lc = 2 * i + 1;
  const rc = 2 * i + 2;
  let k = lc;
  if (lc >= n) return;
  if (rc < n && arr[rc] > arr[lc]) {
    k = rc;
  }
  if (arr[i] < arr[k]) {
    const temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
    adjustMaxHeap(arr, k, n);
  }
}

export function adjustMinHeap(arr: number[], i: number, n: number) {
  const lc = 2 * i + 1;
  const rc = 2 * i + 2;
  let k = lc;
  if (lc >= n) return;
  if (rc < n && arr[rc] < arr[lc]) {
    k = rc;
  }
  if (arr[i] > arr[k]) {
    const temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
    adjustMinHeap(arr, k, n);
  }
}
