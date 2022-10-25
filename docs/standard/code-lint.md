# 前端规范文档

## 前言

> 为了方便开发人员快速、高效、一致的进行前端开发，借鉴网络相关资料归纳和整理形成当前的文档。希望都能最大可能按照规范编写、维护代码

## Vue 风格

> 编码风格上强烈推荐 Vue 官方文档的风格，置顶也是希望重视官方文档  
> 官方的代码规范仅仅限定了 Vue 相关代码的规则，例如组件名称，文件名称，还有一些指令的使用规范等等，不是很全，因此需要其他再做补充  
> URL：https://v2.cn.vuejs.org/v2/style-guide/

## 京东前端规范

> 大厂的前端规范很多，几乎每个大厂都有开放的规范手册，这里我基于京东前端规范手册中的 JS 例子结合开发实际场景做一些情况的补充，主要内容还是以这个文档为准，以此为范本  
> URL：https://guide.aotu.io/docs/js/language.html

## 一、基础路径文件命名规范

> 1. 项目命名，全部采用小写方式， 以公司名称开头，'-'分隔，项目框架结尾

```
datadriver-my-project-vue
```

> 2. 目录命名，参照项目命名规则，有复数结构时，要采用复数命名法

```
pages, apis, directives, components, mixins, utils
```

> 3. JavaScript 文件命名，如果遇到复杂名称，以下划线分隔, 禁止使用驼峰写法

```
contants， account_model.js
```

> 4. css，less 等文件命名，如果遇到复杂名称，以下划线分隔, 禁止使用驼峰写法

```
retina.less， retina_sprites.less
```

> 5. 组件命名使用横线链接

```
calendar-list.vue
```

> 6.  组件名中的单词顺序，组件名应该一般化描述的单词开头，以描述性的修饰词结尾

```
components/
|- search-button-clear.vue
|- search-button-download.vue
|- search-button-upload.vue
|- search-input-query.vue
```

> 7. 自闭和组件(在 DOM 模板里永远不要这样做)

```html
// bad
<!-- 在 DOM 模板中 -->
<my-component />

// good
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

## 二、Vue-template / HTML 规范

> 1.  单文件组件外层样式，单文件组件最外层 div 的 class 的值须是该 vue 文件名称的短横拼写法

- todo-item.vue 文件

```html
<template>
  <div class="todo-item"></div>
</template>

<script>
  export default {
    name: "TodoItem"
  };
</script>
```

> 2. 指令缩写，统一使用简写形式，杜绝复杂写法

- 动态绑定属性 `v-bind === :`
- 动态绑定事件 `v-on === @`
- 动态绑定插槽 `v-slot === #`

```html
// 动态绑定属性
<input :value="newTodoText" :placeholder="newTodoInstructions" />

// 动态绑定事件
<input @input="onInput" @focus="onFocus" />

// 动态绑定插槽
<template #header>
  <h1>Here might be a page title</h1>
</template>
```

> 3. v-for 必须设置 key 值，且尽量不使用 index  
>    v-for 渲染的列表不进行增删操作时，可以使用 index 作为 key 值，但是首选使用 id

```html
// bad
<template v-for="(item, index) in arr" :key="index"></template>

// good
<template v-for="item in arr" :key="item.id"></template>
```

> 4. v-if 和 v-for 不能同时用在同一个元素上，当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，v-for 与 v-if 分开 使用，一般将 v-if 放在 v-for 的最外层

```html
// bad
<div v-for="(item, index) in arr" :key="index" v-if="item.isShow"></div>

// good
<template v-if="item.isShow">
  <div v-for="(item, index) in arr" :key="index"></div>
</template>
```

> 或者可以使用计算属性，计算出符合 v-if 条件的数据进行循环

```javascript
// good
computed: {
  newArr() {
    return this.arr.filter(item => item.isShow)
  }
}
```

> 5.  行内样式 style 中冒号 : 后和分号 ;后必须有空格。（单个样式分号 ; 后不需要空格）

```html
// bad
<div style="width:100px;height:100px;backgroundColor:shyblue;"></div>
<div style="width:100px;"></div>

// good
<div style="width: 100px; height: 100px; backgroundColor: shyblue;"></div>
<div style="width: 100px;"></div>
```

## 三、Vue-script/ JavaScript 规范

> 1.  导入必须使用从@开始的路径，若 vue.config.js 中有定义须优先使用，不使用相对路径

```javascript
// 在 vue.config.js 中配置别名
chainWebpack: (config) => {
  // 添加别名
  config.resolve.alias
    .set('@', resolve('src'))
    .set('@a', resolve('src/assets'))
    .set('@c', resolve('src/components'))
    .set('@h', resolve('src/https'))
    .set('@p', resolve('src/plugins'))
    .set('@l', resolve('src/layout'))
    .set('@r', resolve('src/router'))
    .set('@s', resolve('src/store'))
    .set('@sty', resolve('src/styles'))
    .set('@u', resolve('src/utils'))
    .set('@ven', resolve('src/vendor'))
    .set('@v', resolve('src/views'))
  config.optimization.runtimeChunk('single')
},
// 在引入组件时应该使用别名，不使用相对路径
import MHeader from '@l/header'
import SideBar from '@l/sideBar'
```

> 2. export default 对象中的属性需要按照以下顺序书写，不需要的可不写（name 除外）

- name, component, props, data, methods, computed, watch, mounted
- name 一般与单文件组件相同使用大骆驼拼写法
- components 中一个组件独占一行

```javascript
<script>
export default {
  name: 'BaseEcharts',
  components: {
	MHeader,
  	SideBar
  },
  props: {

  },
  data () {

  },
  methods: {
    init () {

    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.init()
  }
}
</script>
```

> 3.  props 必须有严格的类型约束

- 禁止使用 props: ['id', 'width']
- 如有必要可添加 validator 校验
- 如有必要可添加 required: true

```javascript
props: {
  id: { type: String, required: true },
  width: { type: String, default: '500px' },
  maxHeight: { type: String, default: '500px', validator: function (value) {
        return [
          'syncing',
          'synced',
          'version-conflict',
          'error'
        ].indexOf(value) !== -1
      }
},
```

> 在声明时应该使用 maxHeight，在模板中应该使用短横线 max-height

```html
<my-component max-height="300"></my-component>
```

> 4.  使用 mounted，不使用 created，methods 对象中 init 函数作为第一个

```javascript
// bad
methods: {
  getList1() {
    // to do ...
  },
  getList2() {
    // to do ...
  }
},
mounted() {
  this.getList1()
  this.getList2()
},

// good
methods: {
  // 将全部的请求行为聚合在init函数中
  init() {
    this.getList1()
    this.getList2()
  },
  getList1() {
    // to do ...
  },
  getList2() {
    // to do ...
  }
},
mounted() {
  this.init();
},
```

> 5.  箭头函数单个参数时不使用括号，其他则使用

```javascript
// 单个参数
this.tableData.map((item) => {
  // ...
});

// 多个参数
this.tableData.map((item, index) => {
  // ...
});
```

> 6.  函数中调用接口使用 async await 方式，并使用对象解构获取后端返回数据

- 接口请求先判断唯一标识后获取数据

```javascript
async uploadFile(fData) {
  const { code, message } = await uploadFile(fData)
  if (code === 200) {
     this.message = message
  }
}
```

> 7. 以下几种情况需要空格

- 对象中 `key` 值后面的 `:` 后须有空格
- 函数名称后面的 `()` 前后须有空格
- 三元表达式中的 `?` `:` 前后须有空格

```javascript
data () {
  return {
    mergeListLegacy: [],
    fieldListLegacy: [],
    tableDataLegacy: []
  }
}

const { code, message, data } = await getSelfServiceWorkbench(this.form)

console.log(num, value)

para.pageSize = isDownload ? 0 : this.pagination.pageSize
```

> 8.  代码格式（缩进 / 分号）

- 缩进：使用 `soft` `tab`（4 个空格）
- 分号：以下几种情况后需加分号
  - 变量声明
  - 表达式
  - `return`
  - `throw`
  - `break`

```javascript
var x = 1,
  y = 1;

if (x < y) {
  x += 10;
} else {
  x += 1;
}

/* var declaration */
var x = 1;

/* expression statement */
x++;
```

> 9. 代码注释（单行/多行/文档）

- 单行：双斜线后，必须跟一个空格，可位于一个代码行的末尾，与代码间隔一个空格
- 多行：建议在以下情况下使用
  - 难于理解的代码段
  - 业务逻辑强相关的代码
- 文档：各类标签`@param`, `@method` 等必须注明

```javascript
// 单行
if (condition) {
    // if you made it here, then all security checks passed
    allowed();
}

var zhangsan = 'zhangsan'; // one space after code

// 多行
/*
 * one space after '*'
 */
var x = 1;

// 文档
/**
 * @func
 * @desc 一个带参数的函数
 * @param {string} a - 参数a
 * @param {number} b=1 - 参数b默认值为1
 * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
 * @param {object} d - 参数d为一个对象
 * @param {string} d.e - 参数d的e属性
 * @param {string} d.f - 参数d的f属性
 * @param {object[]} g - 参数g为一个对象数组
 * @param {string} g.h - 参数g数组中一项的h属性
 * @param {string} g.i - 参数g数组中一项的i属性
 * @param {string} [j] - 参数j是一个可选参数
 * @return {string} type 返回具体的类型名称【小写】
 */
function foo(a, b, c, d, g, j) {
    ...
}
```

> 10. 变量命名规范

- `URL`在变量名中全大写
- `ID`在变量名中全大写
- 常量全大写，用下划线连接
- 标准变量采用驼峰式命名
- 别使用保留字作为变量名及 `key` 值
- `boolean` 类型的变量建议使用 `is` 或 `has` 开头

```javascript
var thisIsMyName;

var goodID;

var reportURL;

var MAX_SCREEN_VALUE = 1920;

// boolean类型的变量
const isReady = false;
const hasSelected = false;

// bad
const a = {
  default: {}, // default 是保留字
  common: {}
};

// good
const a = {
  defaults: {},
  common: {}
};
```

> 11. 模板中应该只存在简单的表达式

```javascript
// bad
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}

// good
{{ normalizedFullName }}
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

> 12. 学会使用计算属性

```javascript
// bad
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}

// good
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

> 13. 清除定时器或者事件监听

```javascript
methods:{
  resizeFun () {
    this.tableHeight = window.innerHeight - document.getElementById('table').offsetTop - 128
  },
  setTimer() {
    this.timer = setInterval(() => { })
  },
  clearTimer() {
	  clearInterval(this.timer)
      this.timer = null
	}
},
mounted() {
  this.setTimer()
  window.addEventListener('resize', this.resizeFun)
},
beforeDestroy() {
  window.removeEventListener('resize', this.resizeFun)
  this.clearTimer()
}
```

> 14. 第三方 UI 组件按需引入

```javascript
npm install babel-plugin-component -D

// .babelrc
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)
```

> 15. 路由命名规范  
>     路由命名采用全小写，单词用 - 隔开格式 因为如果你使用下划线或者驼峰形式，会被当成一个单词，搜索引擎无法区分语义

```javascript
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us", // 使用 - 隔开，会被解析为 about 和 us  搜索引擎更容易识别
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
```

> 16. 事件，方法命名规范  
>     这里的事件命名常指通过$emit 广播的事件名和监听，而方法则是自定义方法名

- `$emit` 事件名一般用 `on` + "-" + `eventName`
- 自定义方法分为很多种，一般用 handle 前缀, 如是一些判断方法，包含方法，获取值，设置值，则分别有自己的前缀，采用前缀+`Event` 事件名，驼峰命名形式
- `handle` 大部分自定义方法前缀
- `has` 是否包含某值方法前缀
- `is` 是否为某个值
- `get` 获取某值
- `set` 设置某值
- 公共方法命名规范，为防止命名冲突，建议使用，自定义唯一值 + `Common` + 方法名, 驼峰命名方式

```javascript
<div @on-emit-evet="handleEmitEvent"
     @click="handleClick">
    方法触发
</div>

// parent ts 脚本 (方法命名示例)
handleClick ():  {}
handleEmitEvent (arg) { console.log(arg) }

isPhone () { return false }
hasLoactionString () { return false }
getCountValue () { return this.count }
setCountValue (n) { this.count = n }

// child 组件
<div @click="handleClickEmit">
    事件触发
</div>

handleOnEmitEvent () {
    this.$emit('on-emit-event', '参数')
}

// 公共方法定义
function ddCommonUnshift (n){ return n }
```

> 17. v-if VS v-show  
>     v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建  
>     v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块  
>     相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 `CSS` 的属性 `display` 进行切换  
>     如果运行时，需要非常频繁地切换，推荐使用 v-show 比较好；如果在运行时，条件很少改变，则推荐使用 v-if 比较好

## 四、Vue-style/ Css、Less 等规范

> 1.  防止单组件样式影响全局

- 在 `style` 标签添加属性 `scoped`
- 使用 `CSS` `Modules` 来设定 `CSS` 的作用域

```html
<template>
  <button class="button button-close">X</button>
</template>
<!-- 使用 `scoped` attribute -->
<style scoped>
  .button {
    border: none;
    border-radius: 2px;
  }
  .button-close {
    background-color: red;
  }
</style>

<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>
<!-- 使用 CSS Modules -->
<style module>
  .button {
    border: none;
    border-radius: 2px;
  }
  .buttonClose {
    background-color: red;
  }
</style>
```

> 2.  不允许使用元素选择器，在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的

```html
<!-- bad -->
<template>
  <p>this is text</p>
</template>
<style scoped>
  p {
    color: red;
  }
</style>

<!-- good -->
<template>
  <p class="text">this is text</p>
</template>
<style scoped>
  .text {
    color: red;
  }
</style>
```

> 3.  属性声明顺序

- 位置属性：position top left right z-index display float
- 尺寸大小：width height padding margin
- 背景边框：background border
- 文字系列：font-size line-height letter-spacing color text-align
- 其他： animation transition

> 4.  缩进及格式注意

- 缩进：使用 `space` 两个空格
- 分号：每个属性声明末尾都要加分号
- 注释：注释统一使用 /\* \*/
- 命名：类名使用小写字母，以中划线分隔，id 采用驼峰式命名
- 空格
- 以下几种情况不需要空格：
  - 属性名后
  - 多个规则的分隔符, 前
  - !important 的 ! 后
  - 属性值中/后/前
  - 行末不要有多余的空格
- 以下几种情况需要空格：
  - 属性值前/属性名的冒号 : 后
  - 选择器 > + ~ 前后
  - { 前
  - !important 的 ! 前
  - 属性值中的 , 后
  - 注释内容前后

```css
/* Bad */
.element {
  color: red !important;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Good */
.element {
  color: red !important;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Bad */
.element,
.dialog {
}

/* Good */
.element,
.dialog {
}

/* Bad */
.element > .dialog {
}

/* Good */
.element > .dialog {
}

/* Bad */
.element {
}

/* Good */
.element {
}
```

> 5. SASS 公共文件规范，添加注释区分模块，模块下标签使用\_隔开定义

```css
@charset "UTF-8";

/**
 * @desc File Info
 * @author liqinuo
 * @date 2015-10-10
 */

/* Module A
----------------------------------------------------------------*/
.mod_a {
}

/* module A logo */
.mod_a_logo {
}

/* module A nav */
.mod_a_nav {
}

/* Module B
----------------------------------------------------------------*/
.mod_b {
}

/* module B logo */
.mod_b_logo {
}

/* module B nav */
.mod_b_nav {
}
```

## 五、JS 语言规范

### 类型

> 1.  原始类型: 存取原始类型直接作用于值本身

- 布尔类型
- Null 类型
- Undefined 类型
- 数字类型
- BigInt 类型
- 字符串类型
- 符号类型 Symbol

```javascript
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // 1, 9
```

> 2.  复杂类型: 访问复杂类型作用于值的引用

- object
- array
- function

```javascript
const foo = [1, 2, 3];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // 9, 9
```

> 3. 常用判断类型的方法

- typeof
- instanceof
- constructor

```javascript
typeof num, // number
  typeof str, // string
  typeof bool, // boolean
  typeof arr, // object
  typeof obj, // object
  typeof func, // function
  typeof und, // undefined
  typeof nul, // object
  typeof date, // object
  typeof reg, // object
  typeof error; // object

num instanceof Number, // false
  str instanceof String, // false
  bool instanceof Boolean, // false
  arr instanceof Array, // true--注意
  arr instanceof Object, // true--注意
  obj instanceof Object, // true--注意
  func instanceof Function, // true
  und instanceof Object, // false
  nul instanceof Object, // false
  date instanceof Date, // true
  reg instanceof RegExp, // true
  error instanceof Error; // true

function Person() {}
var Tom = new Person();
// undefined和null没有constructor属性
console.log(
  Tom.constructor == Person,
  num.constructor == Number,
  str.constructor == String,
  obj.constructor == Boolean,
  arr.constructor == Array,
  json.constructor == Object,
  func.constructor == Function,
  date.constructor == Date,
  reg.constructor == RegExp,
  error.constructor == Error
);
// 所有结果均为true
```

> 4. typeof 和 instanceof 都不能很好的判断某个类型，不是很推荐使用建议直接用下面的判断方式来比较

```javascript
  // 推荐比较写法
  Object.prototype.toString.call(num),  // '[object Number]'
  Object.prototype.toString.call(str),  // '[object String]'
  Object.prototype.toString.call(bool),  // '[object Boolean]'
  Object.prototype.toString.call(arr),  // '[object Array]'
  Object.prototype.toString.call(obj),  // '[object Object]'
  Object.prototype.toString.call(func),  // '[object Function]'
  Object.prototype.toString.call(und),  // '[object Undefined]'
  Object.prototype.toString.call(nul),  // '[object Null]'
  Object.prototype.toString.call(date),  // '[object Date]'
  Object.prototype.toString.call(reg),  // '[object RegExp]'
  Object.prototype.toString.call(error)  // '[object Error]'

  // 推荐封装成函数调用
  为了方便实用，可以封装一个公共方法来获取里面的具体类型
  function myTypeof(data) {
      var toString = Object.prototype.toString;
      var dataType = data instanceof Element ? "element" : toString.call(data).replace(/\[object\s(.+)\]/, "$1").toLowerCase()
      return dataType
  };

  myTypeof("a") // string
  myTypeof(1) // number
  myTypeof(window) // window
  myTypeof(document.querySelector("h1")) // element
```

### 引用

> 引用类型指的是对象。可以拥有属性和方法，并且我们可以修改其属性和方法。引用对象存放的方式是：在栈中存放对象变量标示名称和该对象在堆中的存放地址，在堆中存放数据
>
> 对象使用的是引用赋值。当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在堆中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的

- 请记得 `const` 和 `let` 都是块级作用域，`var` 是函数级作用域

```javascript
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

- 对所有引用都使用 `const`，不要使用 `var`，eslint: [prefer-const](https://eslint.org/docs/rules/prefer-const.html), [no-const-assign](https://eslint.org/docs/rules/no-const-assign.html)

> 原因：这样做可以确保你无法重新分配引用，以避免出现错误和难以理解的代码

```javascript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

- 如果引用是可变动的，使用 `let` 代替 `var`，eslint: [no-var](https://eslint.org/docs/rules/no-var.html)
  > 原因：`let` 是块级作用域的，而不像 `var` 属于函数级作用域

```javascript
// bad
var count = 1;
if (count < 10) {
  count += 1;
}

// good
let count = 1;
if (count < 10) {
  count += 1;
}
```

- 引用类型注意事项

```javascript
// 对于引用类型的变量，== 和 === 只会判断引用的地址是否相同，而不会判断对象具体里属性以及值是否相同。因此，如果两个变量指向相同的对象，则返回 true
let aa = [1, 2];
let bb = aa;

console.log(aa === bb); // true
// 如果是不同的对象，即使包含相同的属性和值，也会返回 false
let aa = [1, 2];
let bb = [1, 2];

console.log(aa === bb); // false
```

### 对象

> 对象深浅拷贝，常用的深拷贝里面我们用到例如展开运算符、Object.assign、json 字符串等。但他们都存在面对复杂对象时候的深拷贝问题

```javascript
let objTest = { name: "张三", family: { mother: "李四", father: "王五" } };

// bad
let deepTestByExpand = { ...objTest };

// bad
let deepTestByExpand2 = Object.assign({}, objTest);

// good
let deepTestByExpand3 = _.cloneDeep(objTest);
```

### 数组

- 请使用字面量值创建数组，eslint: [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor.html)

```javascript
// bad
const items = new Array();

// good
const items = [];
```

- 向数组中添加元素时，请使用 `push` 方法

```javascript
const items = [];

// bad
items[items.length] = "test";

// good
items.push("test");
```

- 使用展开运算符 `...` 复制数组

```javascript
// bad
const items = [];
const itemsCopy = [];
const len = items.length;
let i;

// bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
itemsCopy = [...items];
```

- 把一个可迭代的对象转换为数组时，使用展开运算符 `...` 而不是 `Array.from`

```javascript
const foo = document.querySelectorAll(".foo");

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

- 使用 `Array.from` 来将一个类数组对象转换为数组

```javascript
const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

- 遍历迭代器进行映射时使用 `Array.from` 代替扩展运算符 `...`, 因为这可以避免创建中间数组

```javascript
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

- 使用数组的 `map` 等方法时，请使用 `return` 声明，如果是单一声明语句的情况，可省略 `return`

```javascript
// good
[1, 2, 3]
  .map((x) => {
    const y = x + 1;
    return x * y;
  })

  [
    // good
    (1, 2, 3)
  ].map((x) => x + 1);

// bad
const flat = {}[([0, 1], [2, 3], [4, 5])].reduce((memo, item, index) => {
  const flatten = memo.concat(item);
  flat[index] = flatten;
});

// good
const flat = {}[([0, 1], [2, 3], [4, 5])].reduce((memo, item, index) => {
  const flatten = memo.concat(item);
  flat[index] = flatten;
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === "Mockingbird") {
    return author === "Harper Lee";
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === "Mockingbird") {
    return author === "Harper Lee";
  }

  return false;
});
```

- 如果一个数组有多行则要在数组的开括号后和闭括号前使用新行

```javascript
// bad
const arr = [
  [0, 1],
  [2, 3],
  [4, 5]
];

const objectInArray = [
  {
    id: 1
  },
  {
    id: 2
  }
];

const numberInArray = [1, 2];

// good
const arr = [
  [0, 1],
  [2, 3],
  [4, 5]
];

const objectInArray = [
  {
    id: 1
  },
  {
    id: 2
  }
];

const numberInArray = [1, 2];
```

- 数组取交集

```js
const a = [0, 1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7, 8];
const duplicatedValues = [...new Set(a)].filter((item) => b.includes(item));
duplicatedValues; // [3, 4, 5]
```

- 数组取差集

```js
const a = [0, 1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7, 8];
const diffValues = [...new Set([...a, ...b])].filter((item) => !b.includes(item) || !a.includes(item)); // [0, 1, 2, 6, 7, 8]
```

- 数组转对象

```js
const arr = [1, 2, 3, 4];
const newObj = { ...arr }; // {0: 1, 1: 2, 2: 3, 3: 4}
const obj = { 0: 0, 1: 1, 2: 2, length: 3 };
// 对象转数组不能用展开操作符，因为展开操作符必须用在可迭代对象上
let newArr = [...obj]; // Uncaught TypeError: object is not iterable...
// 可以使用Array.form()将类数组对象转为数组
let newArr = Array.from(obj); // [0, 1, 2]
```

- 数组摊平

```js
const obj = { a: "群主", b: "男群友", c: "女裙友", d: "未知性别" };
const getName = function (item) {
  return item.includes("群");
};
// 方法1
const flatArr = Object.values(obj)
  .flat()
  .filter((item) => getName(item));
// 优化后
const flatArr = Object.values(obj).flat().filter(getName);
//二维数组用array.flat()，三维及以上用array.flatMap()。array.flat(2)可以传参数字如 2，表示要摊平的层数。
```

### 解构赋值

```js
// -- 数组 --
// 基础类型解构
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1, 2, 3

// 对象数组解构
let [a, b, c] = [{ name: "1" }, { name: "2" }, { name: "3" }];
console.log(a, b, c); // {name: '1'}, {name: '2'}, {name: '3'}

// ...解构
let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // 1, [2, 3, 4]

// 嵌套解构
let [a, [b], d] = [1, [2, 3], 4];
console.log(a, b, d); // 1, 2, 4

// 解构不成功为undefined
let [a, b, c] = [1];
console.log(a, b, c); // 1, undefined, undefined

// 解构默认赋值
let [a = 1, b = 2] = [3];
console.log(a, b); // 3, 2

// -- 对象 --
// 对象属性解构
let { f1, f2 } = { f1: "test1", f2: "test2" };
console.log(f1, f2); // test1, test2

// 可以不按照顺序，这是数组解构和对象解构的区别之一
let { f2, f1 } = { f1: "test1", f2: "test2" };
console.log(f1, f2); // test1, test2

// 解构对象重命名
let { f1: rename, f2 } = { f1: "test1", f2: "test2" };
console.log(rename, f2); // test1, test2

// 嵌套解构
let {
  f1: { f11 }
} = { f1: { f11: "test11", f12: "test12" } };
console.log(f11); // test11

// 默认值
let { f1 = "test1", f2: rename = "test2" } = { f1: "current1", f2: "current2" };
console.log(f1, rename); // current1, current2

// -- 函数 --
// 参数解构
function func1({ x, y }) {
  return x + y;
}
func1({ x: 1, y: 2 }); // 3

function func1({ x = 1, y = 2 }) {
  return x + y;
}
func1({ x: 4 }); // 6

// -- string / map / set
// String
let [a, b, c, ...rest] = "test123";
console.log(a, b, c, rest); // t, e, s, [ 't', '1', '2', '3' ]

// Map
let [a, b] = new Map().set("f1", "test1").set("f2", "test2");
console.log(a, b); // [ 'f1', 'test1' ], [ 'f2', 'test2' ]

// Set
let [a, b] = new Set([1, 2, 3]);
console.log(a, b); // 1, 2
```

### 字符串

- 字符串统一使用单引号的形式 `''`，eslint: [quotes](https://eslint.org/docs/rules/quotes.html)

```js
// bad
const department = "JDC";

// good
const department = "JDC";
```

- 字符串太长的时候，请不要使用字符串连接符换行 `\`，而是使用 `+`

```js
const str = "凹凸实验室 凹凸实验室 凹凸实验室" + "凹凸实验室 凹凸实验室 凹凸实验室" + "凹凸实验室 凹凸实验室";
```

- 程序化生成字符串时，请使用模板字符串，eslint: [prefer-template](http://eslint.org/docs/rules/prefer-template.html) [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)

```js
const test = "test";

// bad
const str = ["a", "b", test].join();

// bad
const str = "a" + "b" + test;

// good
const str = `ab${test}`;
```

- 不要对字符串使用 eval()，会导致太多漏洞， eslint: [no-eval](https://eslint.org/docs/rules/no-eval)

- 不要在字符串中使用不必要的转义字符， eslint: [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)

```js
// bad
const foo = "'this' is \"quoted\"";

// good
const foo = "'this' is \"quoted\"";
const foo = `my name is '${name}'`;
```

- 常用的字符串技巧(https://juejin.cn/post/7010928535053271077 --- 完整的内容地址)

#### （1）indexOf()

`indexOf()`：查找某个字符，**有则返回第一次匹配到的位置**，否则返回-1，其语法如下：

```javascript
string.indexOf(searchvalue, fromindex);
复制代码;
```

该方法有两个参数：

- searchvalue：必需，规定需检索的字符串值；
- fromindex：可选的整数参数，规定在字符串中开始检索的位置。它的合法取值是 0 到 string.length - 1。如省略该，则从字符串的首字符开始检索。

```javascript
let str = "abcdefgabc";
console.log(str.indexOf("a")); // 输出结果：0
console.log(str.indexOf("z")); // 输出结果：-1
console.log(str.indexOf("c", 4)); // 输出结果：9
复制代码;
```

该方法和 indexOf()类似，只是查找的顺序不一样，indexOf()是正序查找，lastIndexOf()是逆序查找。

#### （2）includes()

`includes()`：该方法用于判断字符串是否包含指定的子字符串。如果找到匹配的字符串则返回 true，否则返回 false。该方法的语法如下：

```javascript
string.includes(searchvalue, start);
复制代码;
```

该方法有两个参数：

- searchvalue：必需，要查找的字符串；
- start：可选，设置从那个位置开始查找，默认为 0。

```javascript
let str = "Hello world!";

str.includes("o"); // 输出结果：true
str.includes("z"); // 输出结果：false
str.includes("e", 2); // 输出结果：false
```

### 函数

- 不要使用 Function 构造函数创建函数， eslint: [no-new-func](https://eslint.org/docs/rules/no-new-func)

> 原因：此方式创建函数和对字符串使用 `eval()` 一样会产生漏洞

```js
// bad
const add = new Function("a", "b", "return a + b");

// still bad
const subtract = Function("a", "b", "return a - b");
```

- 在函数签名中使用空格，eslint: [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren) [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)

```js
const f = function () {};
const g = function () {};
const h = function () {};

// good
const x = function b() {};
const y = function a() {};
```

- 使用具名函数表达式而非函数声明，eslint: [func-style](http://eslint.org/docs/rules/func-style)

> 原因：这样做会导致函数声明被提升，这意味着很容易在文件中定义此函数之前引用它，不利于可读性和可维护性。如果你发现函数定义既庞大又复杂以至于不能理解文件的其他部分，或许你应该将它拆分成模块！别忘记要显式命名表达式，而不用管名字是否是从包含的变量（通常出现在现代浏览器中或者使用 Babel 编译器的时候）中推断的。这样会消除错误调用堆栈中的任何假设。 (讨论)

```js
// bad
function foo() {
  // ...
}

// bad
const foo = function () {
  // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

- 用圆括号包裹自执行匿名函数，eslint：[wrap-iife](http://eslint.org/docs/rules/wrap-iife.html)

> 原因：一个立即执行匿名函数表达式是一个单一的单元，将其及其调用括号包装在括号中，能够清楚地表达这一点。注意，在到处都是模块的世界中几乎不需要 IIFE。

```js
// immediately-invoked function expression (IIFE)
(function () {
  console.log("Welcome to the Internet. Please follow me.");
})();
```

- 不要在非函数代码块（`if` , `while` 等）中声明函数，eslint：[no-loop-func](http://eslint.org/docs/rules/no-loop-func.html)

```js
// bad
if (isUse) {
  function test() {
    // do something
  }
}

// good
let test;
if (isUse) {
  test = () => {
    // do something
  };
}
```

- 不要将参数命名为 `arguments`，会导致该参数的优先级高于每个函数作用域内原先存在的 `arguments` 对象

```js
// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}
```

- 不要使用 `arguments`，使用 剩余运算符 `...`

> `arguments` 只是一个类数组，而 `...` 是一个真正的数组

```js
// bad
function test() {
  const args = Array.prototype.slice.call(arguments);
  return args.join("");
}

// good
function test(...args) {
  return args.join("");
}
```

- 使用参数默认值语法而不是修改函数参数

```js
// really bad
function handleThings(opts) {
  // No! We shouldn't mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

- 避免参数默认值的副作用

```js
let b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count(); // 1
count(); // 2
count(3); // 3
count(); // 3
```

- 将参数默认值放在最后

```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```

- 不要更改参数，eslint: [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)

> 原因：操作作为参数传入的对象可能在原始调用中造成意想不到的变量副作用

```js
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, "key") ? obj.key : 1;
}
```

- 不要给参数重新赋值，eslint: [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)

> 原因：参数重新赋值可能会导致无法预期的行为，尤其是当操作 `arguments` 对象时，也可能导致优化问题，尤其是在 V8 引擎中

```js
// bad
function f1(a) {
  a = 1;
}

function f2(a) {
  if (!a) {
    a = 1;
  }
}

// good
function f3(a) {
  const b = a || 1;
}

function f4(a = 1) {}
```

- 调用可变参数函数时建议使用展开运算符 `....`， eslint: [prefer-spread](http://eslint.org/docs/rules/prefer-spread)

> 原因：显然你无需使用上下文，很难结合 `new` 和 `apply`

```js
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

// good
new Date(...[2016, 8, 5]);
```

### 箭头函数

- 当你必须使用函数表达式（传递匿名函数）时，使用箭头函数标记. eslint: [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html), [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing.html)

> 原因：它将创建在 `this` 上下文中执行的函数版本，通常是您想要的，并且语法更简洁

> 如果您有一个相当复杂的函数，则可以将该逻辑移到其自己的命名函数表达式中

```js
// bad
[1, 2, 3]
  .map(function (x) {
    const y = x + 1;
    return x * y;
  })

  [
    // good
    (1, 2, 3)
  ].map((x) => {
    const y = x + 1;
    return x * y;
  });
```

- 如果函数体只包含一条没有副作用的返回表达式的语句，可以省略花括号并使用隐式的 `return`， 否则保留花括号并使用 `return` 语句，eslint: [arrow-parens](https://eslint.org/docs/rules/arrow-parens.html), [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style.html)

```js
// bad
[1, 2, 3]
  .map((number) => {
    const nextNumber = number + 1`A string containing the ${nextNumber}.`;
  })

  [
    // good
    (1, 2, 3)
  ].map((number) => `A string containing the ${number}.`)

  [
    // good
    (1, 2, 3)
  ].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  })

  [
    // good
    (1, 2, 3)
  ].map((number, index) => ({
    index: number
  }));

// No implicit return with side effects
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => (bool = true));

// good
foo(() => {
  bool = true;
});
```

- 一旦表达式跨多行，使用圆括号包裹以便更好阅读

```js
// bad
["get", "post", "put"]
  .map((httpMethod) => Object.prototype.hasOwnProperty.call(httpMagicObjectWithAVeryLongName, httpMethod))

  [
    // good
    ("get", "post", "put")
  ].map((httpMethod) => Object.prototype.hasOwnProperty.call(httpMagicObjectWithAVeryLongName, httpMethod));
```

- 函数如果只接收一个参数并且没使用用花括号，则省略圆括号，否则为了清晰明确则使用圆括号包裹参数，注意：总是使用圆括号也是可以接受的，eslint 中的 [“always” 选项](https://eslint.org/docs/rules/arrow-parens#always)，eslint: [arrow-parens](http://eslint.org/docs/rules/arrow-parens.html)

```js
// bad
[1, 2, 3]
  .map((x) => x * x)

  [
    // good
    (1, 2, 3)
  ].map((x) => x * x)

  [
    // good
    (1, 2, 3)
  ].map((number) => `A long string with the ${number}. It’s so long that we’ve broken it ` + "over multiple lines!")

  [
    // bad
    (1, 2, 3)
  ].map((x) => {
    const y = x + 1;
    return x * y;
  })

  [
    // good
    (1, 2, 3)
  ].map((x) => {
    const y = x + 1;
    return x * y;
  });
```

### 类&构造方法

- 使用 `class`，避免直接操作 `prototype`

```js
// bad
function Queue (contents = []) {
  this._queue = [..contents]
}
Queue.prototype.pop = function () {
  const value = this._queue[0]
  this._queue.splice(0, 1)
  return value
}

// good
class Queue {
  constructor (contents = []) {
    this._queue = [...contents]
  }

  pop () {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
  }
}
```

- 使用 `extends` 来实现继承

> 原因：这是一个不会破坏 `instanceof` 的内建实现原型式继承的方式

```js
// bad
const inherits = require("inherits");
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
```

- 如果未声明构造函数，则类会有一个默认的构造函数，没必要用空的构造函数或者将其委托给父类，eslint: [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor)

```js
// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = "Rey";
  }
}
```

- 避免类成员重复，eslint: [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)

> 原因：重复的类成员声明会默认使用最后声明的，通常会导致 bug

```js
// bad
class Foo {
  bar() {
    return 1;
  }
  bar() {
    return 2;
  }
}

// good
class Foo {
  bar() {
    return 1;
  }
}

// good
class Foo {
  bar() {
    return 2;
  }
}
```

### 模块

- 使用标准的 ES6 模块语法 `import` 和 `export`

> 原因：模块是未来，让我们现在开始使用未来的特性

```js
// bad
const util = require('./util')
module.exports = util

// good
import Util from './util'
export default Util

// better
import { Util } from './util'
export default Util
```

- 不要使用 `import` 的通配符 `*`，这样可以确保你只有一个默认的 export

```js
// bad
import * as Util from "./util";

// good
import Util from "./util";
```

- 同个文件每个模块只允许 `import` 一次，有多个 `import` 请书写在一起，eslint: [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)

> 原因：这样可以让代码更易于维护

```js
// bad
import foo from "foo";
// … some other imports … //
import { named1, named2 } from "foo";

// good
import foo, { named1, named2 } from "foo";

// good
import foo, { named1, named2 } from "foo";
```

- 将所有 `import` 语句放在文件最前方，eslint: [import/imports-first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

```js
// bad
import foo from "foo";
foo.init();

import bar from "bar";

// good
import foo from "foo";
import bar from "bar";

foo.init();
```

- 多行导入应该像多行数组和对象文字一样缩进

```js
// bad
import { longNameA, longNameB, longNameC, longNameD, longNameE } from "path";

// good
import { longNameA, longNameB, longNameC, longNameD, longNameE } from "path";
```

- 在模块 `import` 声明中禁止使用 `Webpack` 的 `loader` 语法，eslint: [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

```js
// bad
import fooSass from "css!sass!foo.scss";
import barCss from "style!css!bar.css";

// good
import fooSass from "foo.scss";
import barCss from "bar.css";
```

### 迭代器

- 不要使用 `iterators`，建议使用 JS 更高优先级的函数代替 for-in 或 for-of 循环，除非迫不得已，eslint: [no-iterator](https://eslint.org/docs/rules/no-iterator.html) [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)

```js
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

// good
let sum = 0;
numbers.forEach((num) => (sum += num));

// better
const sum = numbers.reduce((total, num) => total + num, 0);
```

### 生成器

- 现阶段请不要使用生成器 `generator`

> 原因：因为不能很好地翻译成 ES5 代码

### 对象属性

- 使用 `.` 来访问对象属性

```js
const joke = {
  name: "haha",
  age: 28
};

// bad
const name = joke["name"];

// good
const name = joke.name;
```

- 当访问的属性是变量时使用 `[]`

```js
const luke = {
  jedi: true,
  age: 28
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp("jedi");
```

### 变量声明

- 声明变量时，请使用 `const`、`let` 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 `const` 来声明变量，我们需要避免全局命名空间的污染。eslint: [no-undef](http://eslint.org/docs/rules/no-undef) [prefer-const](http://eslint.org/docs/rules/prefer-const)

```js
// bad
demo = new Demo();

// good
const demo = new Demo();
```

- 将所有的 `const` 和 `let` 分组

```js
// bad
let a
const b
let c
const d
let e

// good
const b
const d
let a
let c
let e
```

- 变量不要进行链式赋值

> 原因：变量链式赋值会创建隐藏的全局变量

```js
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = (b = c = 1);
})();

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c)(
  // 1

  // good
  (function example() {
    let a = 1;
    let b = a;
    let c = a;
  })()
);

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

- 不允许出现未被使用的变量，eslint: [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

> 原因：声明但未被使用的变量通常是不完全重构犯下的错误.这种变量在代码里浪费空间并会给读者造成困扰

```js
// bad

var some_unused_var = 42;

// Write-only variables are not considered as used.
var y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;

// Unused function arguments.
function getX(x, y) {
  return x;
}

// good

function getXPlusY(x, y) {
  return x + y;
}

const x = 1;
const y = a + 2;

alert(getXPlusY(x, y));

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
const { type, ...coords } = data;
// 'coords' is now the 'data' object without its 'type' property.
```

- 常用的名称和规范

```js
1) 采用小写驼峰命名 lowerCamelCase，代码中的命名均不能以下划线， 也不能以下划线或美元符号结束
反例： name / name / name$

2) 方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风 格，必须遵从驼峰形式
正例： localValue / getHttpMessage() / inputUserId
其中 method 方法命名必须是 动词 或者 动词+名词 形式
正例： saveShopCarData /openShopCarInfoDialog
反例： save / open / show / go
特此说明，增删查改，详情统一使用如下 5 个单词，不得使用其他
add / update / delete / detail / get

3) 常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚， 不要嫌名字长
正例： MAX_STOCK_COUNT
反例： MAX_COUNT

// 常用的名称
附： 函数方法常用的动词:
get 获取/set 设置,
add 增加/remove 删除,
create 创建/destory 销毁,
start 启动/stop 停止,
open 打开/close 关闭,
read 读取/write 写入,
load 载入/save 保存,
begin 开始/end 结束,
backup 备份/restore 恢复,
import 导入/export 导出,
split 分割/merge 合并,
inject 注入/extract 提取,
attach 附着/detach 脱离,
bind 绑定/separate 分离,
view 查看/browse 浏览,
edit 编辑/modify 修改,
select 选取/mark 标记,
copy 复制/paste 粘贴,
undo 撤销/redo 重做,
insert 插入/delete 移除,
add 加入/append 添加,
clean 清理/clear 清除,
index 索引/sort 排序,
find 查找/search 搜索,
increase 增加/decrease 减少,
play 播放/pause 暂停,
launch 启动/run 运行,
compile 编译/execute 执行,
debug 调试/trace 跟踪,
observe 观察/listen 监听,
build 构建/publish 发布,
input 输入/output 输出,
encode 编码/decode 解码,
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩,
pack 打包/unpack 解包,
parse 解析/emit 生成,
connect 连接/disconnect 断开,
send 发送/receive 接收,
download 下载/upload 上传,
refresh 刷新/synchronize 同步,
update 更新/revert 复原,
lock 锁定/unlock 解锁,
check out 签出/check in 签入,
submit 提交/commit 交付,
push 推/pull 拉,
expand 展开/collapse 折叠,
enter 进入/exit 退出,
abort 放弃/quit 离开,
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```

### Hoising

- `var` 存在变量提升的情况，即 `var` 声明会被提升至该作用域的顶部，但是他们的赋值并不会。而 `const` 和 `let` 并不存在这种情况，他们被赋予了 [Temporal Dead Zones, TDZ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)， 了解 [typeof 不再安全](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15)很重要

```js
function example() {
  console.log(notDefined); // => throws a ReferenceError
}

function example() {
  console.log(declareButNotAssigned); // => undefined
  var declaredButNotAssigned = true;
}

function example() {
  let declaredButNotAssigned;
  console.log(declaredButNotAssigned); // => undefined
  declaredButNotAssigned = true;
}

function example() {
  console.log(declaredButNotAssigned); // => throws a ReferenceError
  console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
  const declaredButNotAssigned = true;
}
```

- 匿名函数的变量名会提升，但函数内容不会

```js
function example() {
  console.log(anonymous); // => undefined

  anonymous();

  var anonymous = function () {
    console.log("test");
  };
}
```

- 命名的函数表达式的变量名会被提升，但函数名和函数函数内容并不会

```js
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  superPower(); // => ReferenceError superPower is not defined

  var named = function superPower() {
    console.log("Flying");
  };
}

function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  var named = function named() {
    console.log("named");
  };
}
```

### 比较运算符&相等

- 使用 `===` 和 `!==` 而非 `==` 和 `!=`，eslint: [eqeqeq](https://eslint.org/docs/rules/eqeqeq.html)

- 条件声明例如 `if` 会用 `ToBoolean` 这个抽象方法将表达式转成布尔值并遵循如下规则

  - `Objects` 等于 `true`
  - `Undefined` 等于 `false`
  - `Null` 等于 `false`
  - `Booleans` 等于 `布尔值`
  - `Numbers` 在 `+0`, `-0`, 或者 `NaN` 的情况下等于 `false`, 其他情况是 `true`
  - `Strings` 为 `''` 时等于 `false`, 否则是 `true`

```js
if ([0] && []) {
  // true
  // 数组(即使是空数组)也是对象，对象等于true
}
```

- 运算符注意事项

```js
//永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串’undefined’对变量进行判断。
//正例：
  if (typeof person === 'undefined') { ... }
//反例：
  if (person === undefined) { ... }

  // undefined 可以作为局部变量名称
```

### 分号

我们遵循 `Standard` 的规范，不使用分号。

> 关于应不应该使用分号的讨论有很多，本规范认为非必要的时候，应该不使用分号，好的 `JS` 程序员应该清楚场景下是一定要加分号的，相信你也是名好的开发者。

```js
// bad
const test = "good";
(function () {
  const str = "hahaha";
})();

// good
const test = "good";
(() => {
  const str = "hahaha";
})();
```
