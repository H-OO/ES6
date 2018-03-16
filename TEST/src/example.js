// let promise = new Promise(function (resolve, reject) {
//   resolve('test');
// });
// setTimeout(function () {
//   promise.then(function (data) {
//     console.log(data);
//   });
// }, 1000)

const data = '已获取数据';
const state = 200;
const promise = new Promise(function (resolve, reject) {
  if (state === 200) {
    resolve(data);
  } else {
    reject('error...');
  }
});

promise.then(function (data) {
  console.log(data);
}, function (err) {
  console.log(err);
})

console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');
console.log('TOP?');

for (var i = 100; i > 50; i--) {
  console.log('for...');
}

setTimeout(function () {
  console.log('timer...');
}, 1000)