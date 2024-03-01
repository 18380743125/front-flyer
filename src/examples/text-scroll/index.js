let currentIndex = 0; // 目前展示的是第几项
const itemHeight = 40; // 每一项的高度

/**
 * 将列表中的第一个元素克隆到列表的最后一个
 */
function _cloneFirstItem(list) {
  const firstItem = list.children[0];
  const newItem = firstItem.cloneNode(true);
  list.appendChild(newItem);
}

/**
 * 将列表滚动到下一个位置
 */
function _moveNext(list) {
  let from = currentIndex * itemHeight; // 开始的滚动高度
  currentIndex++;
  const to = currentIndex * itemHeight; // 下一项的滚动高度
  // 让 list 的 scrollTop，从 from 慢慢变为 to
  // 慢慢变为：在一段时间内，每隔一小段时间，变化一点
  const totalDuration = 300; // 变化的总时间
  const duration = 10; // 变化的间隔时间
  const times = totalDuration / duration; //变化的次数
  const distance = (to - from) / times; // 每次变化的量
  const timerId = setInterval(function() {
    from += distance;
    if (from >= to) {
      // 到达目标值了
      clearInterval(timerId); // 停止计时器
      // 滚动完成后，如果是最后一项
      if (currentIndex === list.children.length - 1) {
        from = 0;
        currentIndex = 0;
      }
    }
    list.scrollTop = from;
  }, duration);
}

function init() {
  const moveDuration = 2000; // 滚动的间隔时间

  const list = document.querySelector('.list');

  _cloneFirstItem(list);

  // 滚动：每隔一段时间，将列表滚动到下一个位置
  setInterval(() => _moveNext(list), moveDuration);
}

// 初始化
init();
