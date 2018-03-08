// var total = 30;
// var msg1 = passthru`The total is ${total} (${total*1.05} with tax)`;
// var msg2 = `The total is ${total} (${total*1.05} with tax)`;
// function passthru(literals) {
//   // literals  [ 'The total is ', ' (', ' with tax)' ]
//   // arguments  { '0': [ 'The total is ', ' (', ' with tax)' ], '1': 30, '2': 31.5 }
//   var result = '';
//   var i = 0;
//   while (i < literals.length) {
//     result += literals[i++];
//     if (i < arguments.length) {
//       result += arguments[i]; // 30  31.5
//     }
//   }
//   return result;
// }
// console.log(msg1); // The total is 30 (31.5 with tax)
// console.log(msg2); // The total is 30 (31.5 with tax)

// var sender = 'xxx';
// var msg = saferHTML`<p>${sender} has sent you a message</p>`;
// function saferHTML(tmpData) {
//   console.log(tmpData); // [ '<p>', ' has sent you a message</p>' ]
//   console.log(arguments); // { '0': [ '<p>', ' has sent you a message</p>' ], '1': 'xxx' }
// }

// var regexp = new RegExp(/xzy/ig, 'i');
// console.log(regexp);

// let str = 'abc';
// var res = str.split(/b/);
// console.log(res);

console.log(/A/.test('abc'));
console.log(/a/.test('abc'));

