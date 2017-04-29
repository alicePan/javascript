/*实现 done  和 finally 方法*/
Promise.prototype.done = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected)
    .catch(function (reason) {
			console.log(reason)
      // 抛出一个全局错误
      setTimeout(() => { throw reason }, 0);
    });
}

var p1 = new Promise((resolve, reject) => {
	reject('helo')
}).then(() => {
	console.log(info)
}).done()

Promise.prototype.finally = function (callback) {
	let p = this.constructor
	// 可以视情况确认是否要返回 Promise 对象 return this.then
	this.then(
		value => p.resolve(callback()).then(() => value),
		reaseon => p.reject(callback()).then(() => reason)
	)
}
new Promise(resolve => resolve(1)).finally(() => {
	console.log('finnaly')
})