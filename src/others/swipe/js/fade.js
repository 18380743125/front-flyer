const swipeEl = document.querySelector(".swipe");
const controlEl = document.querySelector(".control");
const imagesEl = document.querySelector(".images");
const dotsEl = document.querySelector(".indicator");

let index = 0;
let size = 0;
let preIndex = 0;
const imageUrl = "./images/";
const autoPlay = true;
const delay = 2000;

// 指示灯点击
dotsEl.addEventListener("click", (e) => {
  const target = e.target;
  const nextIndex = target.dataset.index;
  if (nextIndex === undefined) return;
  preIndex = index;
  index = nextIndex;
  switchSwipe();
});

// 切换上 / 下一张
controlEl.addEventListener("click", (e) => {
  const target = e.target;
  let type = target.dataset.type;
  if (type === undefined) {
    type = target.parentNode.dataset.type;
  }
  switchSwipe(type);
});

// 切换轮播
function switchSwipe(type) {
  if (type) preIndex = index;
  if (type === "prev") {
    if (--index < 0) index = size - 1;
  } else if (type === "next") {
    if (++index >= size) index = 0;
  }
  imagesEl.children[preIndex].classList.remove("active");
  imagesEl.children[index].classList.add("active");
  dotsEl.children[preIndex].classList.remove("active");
  dotsEl.children[index].classList.add("active");
}

// 自动轮播
let timer = null;
function startAutoplay() {
  if (timer) return;
  timer = setInterval(() => switchSwipe("next"), delay);
}
function stopAutoPlay() {
  if (timer) clearInterval(timer);
  timer = null;
}

// 鼠标移入关闭轮播
swipeEl.addEventListener("mouseover", () => {
  stopAutoPlay();
});
swipeEl.addEventListener("mouseout", () => {
  startAutoplay();
});

// 窗口不在可视区取消轮播
document.addEventListener("visibilitychange", () => {
  const visible = document.visibilityState;
  if (!autoPlay) return;
  if (visible === "visible") {
    startAutoplay();
  } else {
    stopAutoPlay();
  }
});

// 初始化
function init(autoPlay) {
  size = imgData.length;
  for (let i = 0; i < imgData.length; i++) {
    // 图片
    const imgLi = document.createElement("li");
    if (i === 0) imgLi.classList.add("active");
    imgLi.classList.add("item");
    const img = document.createElement("img");
    img.src = imageUrl + imgData[i];
    imgLi.append(img);

    // 指示点
    const dotLi = document.createElement("li");
    if (i === 0) dotLi.classList.add("active");
    dotLi.classList.add("item");
    dotLi.dataset.index = String(i);

    imagesEl.append(imgLi);
    dotsEl.append(dotLi);
  }
  if (autoPlay) startAutoplay();
}
init(autoPlay);
