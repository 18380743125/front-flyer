Promise.prototype.myAll = (params) => {
  let count = 0
  let fulfilledCount = 0
  const result = []
  return new Promise((resolve, reject) => {
    for (const param of params) {
      Promise.resolve(param).then((res) => {
        result[fulfilledCount] = res
        fulfilledCount++
        if (fulfilledCount === count) {
          resolve(result)
        }
      }, reject)
      count++
    }
  })
}

const promise1 = new Promise((resolve, reject) => {
  resolve(1)
})

const promise2 = new Promise((resolve, reject) => {
  resolve(2)
});

const promise3 = new Promise((resolve, reject) => {
  reject(3)
})

Promise.prototype.myAll([promise1, promise2, promise3]).then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})