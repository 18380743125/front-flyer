const swipeEl = document.querySelector(".swipe")
const controlsEl = document.querySelector(".controls")
const imgsEl = document.querySelector(".imgs")
const dotsEl = document.querySelector(".indicator")

let index = 0
let size = 5
let preIndex = 0

// 切换上 / 下一张
controlsEl.addEventListener("click", (e) => {
  const target = e.target
  let type = target.dataset.type
  preIndex = index
  if (type === undefined) {
    type = target.parentNode.dataset.type
  }
  if (type === "prev") {
    // 上一张
    if (--index < 0) index = size - 1
  } else {
    // 下一张
    if (++index >= size) index = 0
  }
  switchSwipeItem()
})

dotsEl.addEventListener("click", (e) => {
  const target = e.target
  const nextIndex = target.dataset.index
  if (!nextIndex) return
  preIndex = index
  index = nextIndex
  switchSwipeItem()
})

// 切换 swipe-item
function switchSwipeItem() {
  imgsEl.children[preIndex].classList.remove("active")
  imgsEl.children[index].classList.add("active")

  imgsEl.style.transform = `translateX(-${index * 100}%)`

  dotsEl.children[preIndex].classList.remove("active")
  dotsEl.children[index].classList.add("active")
}

function nextSwitch() {
  preIndex = index
  if (++index >= size) index = 0
  switchSwipeItem()
}

swipeEl.addEventListener("mouseover", () => {
  stopPlay()
})
swipeEl.addEventListener("mouseout", () => {
  startAutoplay(2000)
})

let timer = null
function startAutoplay(delay) {
  timer = setInterval(nextSwitch, delay)
}

// 停止自动轮播
function stopPlay() {
  clearInterval(timer)
  timer = null
}

function init() {
  for (let i = 0; i < imgsEl.children.length; i++) {
    imgsEl.children[i].style.left = `${i * 100}%`
  }
}

init()

startAutoplay(2000)
