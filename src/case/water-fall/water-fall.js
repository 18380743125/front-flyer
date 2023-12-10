class WaterFall {
  constructor(el, itemEl, columns, gap) {
    this.el = el;
    this.itemEl = itemEl;
    this.columns = columns;
    this.gap = gap;
  }

  init() {
    const listEl = document.querySelectorAll(this.el)[0];
    const itemEls = listEl.querySelectorAll(this.itemEl);
    const listRect = listEl.getBoundingClientRect();
    // 每个 item 的宽度
    const width = (listRect.width - (this.columns - 1) * this.gap) / this.columns;
    const heights = [];
    for (let i = 0; i < itemEls.length; i++) {
      const itemEl = itemEls[i];
      itemEl.style.width = `${width}px`;
      // 初始化第一行
      if (i < this.columns) {
        itemEl.style.top = `0px`;
        itemEl.style.left = `${i * (width + this.gap)}px`;
        heights.push(itemEl.offsetHeight);
      } else {
        // 找到最小的高度
        const minIdx = heights.indexOf(Math.min.apply(null, heights));
        itemEl.style.left = `${itemEls[minIdx].offsetLeft}px`;
        itemEl.style.top = `${heights[minIdx] + this.gap}px`;
        heights[minIdx] += itemEl.offsetHeight + this.gap;
      }
    }
  }
}

const waterFall = new WaterFall('.list', '.item', 5, 10);
waterFall.init();
