const swipeEl = document.querySelector(".swipe")
const imagesEl = document.querySelector(".images")
const dotsEl = document.querySelector(".indicator")
const controlEl = document.querySelector(".control")

let index = 0
let size = 0
let preIndex = 0
const imageUrl = './images/'
const autoPlay = true
const delay = 2000
const animationDuration = 500

// 指示点点击
dotsEl.addEventListener("click", (e) => {
  const target = e.target
  const nextIndex = target.dataset.index
  if (!nextIndex) return
  preIndex = index
  index = nextIndex
  switchSwipe()
})

// 切换上 / 下一张
controlEl.addEventListener("click", (e) => {
  const target = e.target
  let type = target.dataset.type
  if (type === undefined) {
    type = target.parentNode.dataset.type
  }
  if (fixTimer) return
  // if (fixTimer) {
  //   clearTimeout(fixTimer)
  //   fixTimer = null
  //   imagesEl.style.transition = "none"
  //   imagesEl.style.transform = `translateX(${-index * 100}%)`
  // }
  switchSwipe(type)
})

let fixTimer = null
function fixSwipePos() {
  if (fixTimer) return
  fixTimer = setTimeout(() => {
    imagesEl.style.transition = "none"
    imagesEl.style.transform = `translateX(${-index * 100}%)`
    fixTimer = null
  }, animationDuration)
}

// 切换轮播
function switchSwipe(type) {
  if (type) preIndex = index
  if (type === 'prev') {
    index--
  } else if(type === 'next') {
    index++
  }
  imagesEl.style.transition = `all ${animationDuration}ms ease`
  imagesEl.style.transform = `translateX(${-index * 100}%)`
  if (index === -1) {
    index = size - 1
    fixSwipePos()
  } else if( index === size) {
    index = 0
    fixSwipePos()
  }
  // active
  dotsEl.children[preIndex].classList.remove("active")
  dotsEl.children[index].classList.add("active")
}

// 自动轮播
let timer = null
function startAutoplay() {
  if (timer) return
  timer = setInterval(() => switchSwipe('next'), delay)
}
function stopAutoPlay() {
  if (timer) clearInterval(timer)
  timer = null
}

// 鼠标移入取消轮播
swipeEl.addEventListener("mouseover", () => {
  stopAutoPlay()
})
swipeEl.addEventListener("mouseout", () => {
  startAutoplay()
})

// 窗口不在可视区取消轮播
document.addEventListener('visibilitychange', () => {
  const visible = document.visibilityState
  if (!autoPlay) return
  if (visible === 'visible') {
    startAutoplay()
  } else {
    stopAutoPlay()
  }
})

// 初始化
function init() {
  size = imgData.length
  for (let i = 0; i < imgData.length; i++) {
    // 图片
    const imgLi = document.createElement('li')
    if (i === 0) imgLi.classList.add('active')
    imgLi.classList.add('item')
    const img = document.createElement('img')
    img.src = imageUrl + imgData[i]
    imgLi.append(img)
    imgLi.style.left = `${i * 100}%`

    // 指示点
    const dotLi = document.createElement('li')
    if (i === 0) dotLi.classList.add('active')
    dotLi.classList.add('item')
    dotLi.dataset.index = String(i)

    imagesEl.append(imgLi)
    dotsEl.append(dotLi)
  }
  const firstEl = imagesEl.children[0].cloneNode(true)
  const lastEl = imagesEl.children[size - 1].cloneNode(true)
  firstEl.style.left = `${size * 100}%`
  lastEl.style.left = `-100%`
  imagesEl.append(firstEl)
  imagesEl.prepend(lastEl)
  if (autoPlay) startAutoplay()
}

init()

startAutoplay()
