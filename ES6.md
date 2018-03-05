### ES6

目的：学习新特性、学习现代编程语言概念中流行的思想  
例如：解构赋值、迭代器、作用域

---

#### 第一章 15page/2day

**Babel 转码器**  
功能：ES6 转 ES5  
目的：学会 Babel 的配置  
使用：使用配置文件.babelrc，位置一般存在于项目根目录

```javascript
  // 该文件用来设置转码规则和插件，格式如下
  {
    "presets": [],
    "plugins": []
  }
```

---

**『babel-cli 命令行转码』**  
全局或本地安装`babel-cli`  
相关参数：

* --out-file 文件转码输出至某个文件，简写 -o
* --out-dir 整个目录转码输出至某个目录，简写 -d
* -s 生成 source map 文件

注意：使用 Babel 转码，项目产生了对环境的依赖，此时需要将 `babel-cli` 安装在项目中  
再通过 `package.json` 文件中的 `scripts` 简化转码命令行

---

**『babel-node 提供支持 ES6 的 REPL 环境』**  
`babel-node`随`babel-cli`一同安装  
同样可通过 `package.json` 文件中的 `scripts` 简化命令行操作，直接运行 ES6 文件

---

**『babel-register 模块改写 require 命令，加上一个钩子』**  
作用：require 加载后缀为.js/.jsx/.es/.es6 的文件时，先用 Babel 进行转码  
使用：  
安装 `npm i babel-register --save-dev`  
先 `require('babel-register')`  
再 `require('./xxx/es6.js')`  
这样就无需手动转码

注意：由于它是实时转码，只适合在开发环境中使用

---

**『babel-core 只有部分代码需要转 ES5 时』**  
作用：调用 Babel 的 API 进行转码  
使用：  
安装 `npm i babel-core --save-dev`

```javascript
const es6Code = 'let x = n => n + 1'; // 字符串便于查看打印结果
const es5Code = require('babel-core').transfrom(es6Code, {
  presets: ['latest'] // 插件
});
```

---

**『babel-polyfill 解决不转换新的 API 问题』**  
作用：由于 Babel 默认只转换新的 JS 句法，不转换新的 API  
例如：Iterator、Generator、Set、Maps、Promise 等全局对象，以及一些定义在全局对象上的方法 Object.assign 都不转码  
使用：如果想让方法运行，就需使用 `babel-polyfill` 模块  
安装 `npm i babel-polyfill --save`  
在脚本头部引入 `require('babel-polyfill')`

---

**『ESLint 代码风格检查』**  
作用：用于静态检查代码的语法和风格  
使用：  
安装 `npm i eslint babel-eslint --save-dev`  
在项目根目录下创建配置文件 `.eslintrc`

```javascript
  //
  {
    "parser": "babel-eslint",
    "rules": {
      ...
    }
  }
```

---

#### 第二章 15page/1day

目的：了解 let 和 const 与 var 的区别，掌握块级作用域的使用

**『let and const』**  
作用：提供块级作用域  
注意：

* 不存在变量提升
* 暂时性死区（块级作用域中存在 let 或 const，其所声明的变量不再受外部影响）
* 不能在同一个作用域内重复声明同一个变量

---

**『块级作用域』**  
ES6 能生成块级作用域有：`{}`、`let`、`const`  
ES5 中只存在全局作用域和函数作用域，并没有块级作用域；这导致很多场景不合理  
例如：内层变量可能覆盖外层变量；循环变量泄露为全局变量

ES6 允许块级作用域任意嵌套  
内层作用域可定义外层作用域的同名变量

应用：

```javascript
// ES5 使用自执行函数(IIFE)生成作用域（函数作用域）
(function() {
  var tmp = '...';
  // ...
})();
// ES6 使用{}生成作用域（块级作用域）
{
  let tmp = '...';
  // ...
}
```

---

**『块级作用域与函数声明』**  
ES6 明确允许在块级作用域中声明函数  
但使用环境会导致差异性，尽量使用函数表达式

---

**『const 命令』**  
const 声明一个只读的常量。一旦声明，常量的值就不能改变  
本质：保证变量指向的那个内存地址不得改动

```javascript
const obj = {};
obj.a = '123'; // 可添加
obj = {}; // error
```

冻结对象  
`Object.freeze()`

---

**『顶级对象』**  
Node 的 REPL 环境中，顶级对象为 `global`，仅 Node 支持  
浏览器和 Web Worker 中，`self`也指向顶级对象，但是 Node 不支持  
通用方法：使用 `this` 变量获取顶级对象，但有局限性

全局环境中 this 返回顶级对象，但在 Node 模块和 ES6 模块则返回当前模块

注意：在浏览器中顶级对象为 window，但`Node`和`Web Worker`没有 window

```javascript
// REPL环境中定义至全局
global.a = '123';
console.log(a); // 123

// 通用方法定义至全局
this.b = '234';
console.log(b); // 234
```

很难找到一种方法可以在所有情况下都能获取到顶级对象，以下两种方法勉强可以使用：

```javascript
// 方法1
typeof window !== 'undefined'
  ? window
  : typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object'
    ? global
    : this;

// 方法2
var getGlobal = function() {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
};
```

---

#### 第三章 12page/3day

目的：掌握ES6变量的解构赋值  

**『』**

---

**『』**

---

**『』**

---

**『』**

---

**『』**

---

**『』**

---

**『』**

---

**『』**

---
