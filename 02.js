function say() {
  console.log('Say')
}

var say = function () {
  console.log('hijacked')
}

say()
