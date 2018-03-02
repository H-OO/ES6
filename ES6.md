### ES6

目的：学习新特性、学习现代编程语言概念中流行的思想  
例如：解构赋值、迭代器、作用域

#### 第一章 15page/3day

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

『』

---

『』

---

『』

---
