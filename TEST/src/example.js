// let obj = {
//   p: [
//     'hello',
//     {y: 'World'}
//   ]
// }

// let {p: [x, {y}]} = obj
// console.log(x);

// let {x, y} = {
//   x: 'aaa'
// }
// console.log(x);

// let obj = {
//   p: ['aaa', {y: 'bbb'}]
// }
// let {p: [x, {y}]} = obj

// console.log(x);
// console.log(y);

// let node = {
//   loc: {
//     start: {
//       line: 1,
//       column: 5
//     }
//   }
// };

// let { loc, loc: { start }, loc: { start: { line } } } = node;

// console.log(loc); // { start: { line: 1, column: 5 } }
// console.log(start); // { line: 1, column: 5 }
// console.log(line); // 1

// let obj = {};
// let arr = [];

// ({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true});

// console.log(obj); // { prop: 123 }
// console.log(arr); // [ true ]

// let {x, y = 1} = {};
// console.log(x); // undefined
// console.log(y); // 1

// let {x: y = 1} = {x: 2};
// console.log(y); // 2

// let arr = [1, 2, 3];
// let {0: first, [arr.length - 1]: last} = arr;
// console.log(first); // 1
// console.log(last); // 3

// let {length: len} = 'hello';
// console.log(len); // 5

// // 数值
// let { toString: s } = 123;
// console.log(s === Number.prototype.toString); // true
// // 布尔值
// let { toString: s } = true;
// console.log(s === Boolean.prototype.toString); // true

// [[1, 2], [3, 4]].map(([a, b]) => {
//   console.log(a + b);
// });
// [1, 2].map((i, v) => {
//   console.log(i, v);
// });

// function move({x = 0, y = 0} = {}) {
//   console.log(x, y);
// }
// move({x: 1, y: 2}); // 1 2
// move({x: 3}) //
// move(); // 使用默认值{} 0 0

// let x = 1;
// let y = 2;
// console.log([x, y] = [y, x]);

// let map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [k, v] of map) {
//   console.log(v);

// }

// let map = new Map();
// map.set('first', 'Hello');
// map.set('second', 'World');
// console.log(map);

// for (let [k] of map) {
//   console.log(k);
// }
// // first Hello
// // second World

// for (let [i, v] of 'hello') {
//   console.log(i, v);
  
// }

// let str = 'hello world';
// console.log(str.endsWith('world', 10)); // true

