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

// console.log(/A/.test('abc'));
// console.log(/a/.test('abc'));

// var s = 'aaa_aa_a'
// var r1 = /a+_/g;
// var r2 = /a+_/y;
// console.log(r2.exec(s));
// console.log(r2.exec(s));

// var s = 'abc1';
// console.log(/[0-9]?/.test(s));


// var s = ' 88818a ';
// var r = /^\s+|\s+$/;
// console.log(r.test(s));
// console.log(r.exec(s));

// var res = s.replace(/\s|[^0-9]/g, '');
// console.log([res]);

// 用户名只允许使用 字母数字_
// var r = /[^\w]/g; // 除字母数字_外是否存在其他字符
// var s = 'x1_';
// console.log(r.test(s)); // false

// 手机号码 1[3|5|8][0-9]
// var r = /^1[3|5|8][0-9]{8}/g;
// var s = '1301111111';
// console.log(r.test(s));

// var r = /^1[3|5][0-9]{9,9}$/;
// var s = '130000000001'; // 13000000000
// console.log(r.test(s));

// var s = '1//235///2/////523//2423//123/535/32';
// var r = /\/+/g;
// console.log(s.split(r));

// var s = 'xxx1xxx2xxx3xxx4 xxx';
// var r = /[^a-z]{1,}/g;
// console.log(s.split(r));


// Object.defineProperty()
