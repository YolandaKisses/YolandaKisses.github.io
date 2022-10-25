# 前端代码优化

## 1. 如果参数超过两个，建议使用 ES6 的解构语法，不用考虑参数的顺序

```javascript
// Bad:
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

// Good:
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```

## 2. 条件运算

> 使用 === 和 !== 而非 == 和 != ，尽可能使用简洁的表达式

```javascript
const name = "test";

// bad
if (name == "test") {
  // ...
}

// good
if (name === "test") {
  // ...
}

const name = "";

// bad
if (name === "") {
  // ......
}

// good
if (!name) {
  // ......
}
```

> 如果函数或全局中的 else 块后没有任何语句，可以删除 else

```javascript
// bad
function getName() {
  if (name) {
    return name;
  } else {
    return "unnamed";
  }
}

// good
function getName() {
  if (name) {
    return name;
  }
  return "unnamed";
}
```

> 条件判断使用 map 映射写法

```javascript
// bad
function price(name) {
  if (name === commodity.phone) {
    console.log(1999);
  } else if (name === commodity.computer) {
    console.log(9999);
  } else if (name === commodity.television) {
    console.log(2999);
  } else if (name === commodity.gameBoy) {
    console.log(3999);
  }
}
price("手机"); // 9999

// good
const commodity = new Map([
  ["phone", 1999],
  ["computer", 9999],
  ["television", 2999],
  ["gameBoy", 3999]
]);

const price = (name) => {
  return commodity.get(name);
};
price("phone"); // 1999
```

> 多个 else-if 带返回值 优化策略

```javascript
// bad
function getPosition(direction) {
  if (direction == "left") {
    return "左";
  } else if (direction == "right") {
    return "右";
  } else if (direction == "top") {
    return "上";
  } else if (direction == "bottom") {
    return "下";
  } else {
    return "未知";
  }
}

// good
function getPosition(direction) {
  return (
    {
      left: "左",
      right: "右",
      top: "上",
      bottom: "下"
    }[direction] || "未知"
  );
}
```

> 以 HashMap 取代条件表达式

```javascript
// bad
let getSpeed = type => {
  switch (type) {
    case SPEED_TYPE.AIR:
    return getAirSpeed()
    case SPEED_TYPE.WATER:
    return getWaterSpeed()
    ...
  }
}

// good
let speedMap = {
  [SPEED_TYPE.AIR]: getAirSpeed,
  [SPEED_TYPE.WATER]: getWaterSpeed
}
let getSpeed = type => speedMap[type] && speedMap[type]()
```

## 3. 学会使用 includes 来判断

```javascript
// bad
function verifyIdentity(identityId) {
  if (identityId == 1 || identityId == 2 || identityId == 3 || identityId == 4) {
    return "你的身份合法，请通行！";
  } else {
    return "你的身份不合法";
  }
}

// good
function verifyIdentity(identityId) {
  if ([1, 2, 3, 4].includes(identityId)) {
    return "你的身份合法，请通行！";
  } else {
    return "你的身份不合法";
  }
}

// best
function verifyIdentity(identityId) {
  return [1, 2, 3, 4].includes(identityId) ? "你的身份合法，请通行！" : "你的身份未知，警告！";
}
```

## 4. 学会使用 new Set 数组去重

```javascript
// bad
function unique4(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(unique4([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));
// [1, 2, 3, 5, 6, 7, 4]

// good
function unique4(oldArr) {
  return Array.from(new Set(oldArr)); // 利用Array.from将Set结构转换成数组
}
console.log(unique4([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));
// [1, 2, 3, 5, 6, 7, 4]

// best
const arr = [...new Set(oldArr)];
```

## 5. 学会使用默认参数优化代码

```javascript
// bad
function request(options) {
  let method = options.method ? options.method : "GET";
  let data = options.data ? options.data : {};
  //...
}

// good
function request(options) {
  let method = options.method || "GET";
  let data = options.data || {};
  //...
}

// best
function request(method = "GET", data = {}) {
  //...
}
```

## 6. 利用 ES6 解构取你所想取的数据

```javascript
// 包含后端不需要字段的参数对象 b和d
const params = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

// bad
delete params.b;
delete params.d;

// good
const { a, c } = params;
const param = { a, c };
```

## 7. for 循环 length 优化

```javascript
// bad
var arr = ["a", "b", "c"];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]); //结果依次a,b,c
}

// 以上的方法有一个问题：就是当数组的长度到达百万级时，arr.length 就要计算一百万次，这是相当耗性能的。所以可以采用以下方法就行改良。

// good
var arr = ["a", "b", "c"];
for (var i = 0, length = arr.length; i < length; i++) {
  console.log(arr[i]); //结果依次a,b,c
}

// 此时 arr.length 只需要计算一次，优化了性能
```

## 8. 如果只有当某个变量为 true 时调用一个函数，那么可以使用与 (&&)短路形式书写

```javascript
//Bad:

if (isLogin) {
  goHome();
}

//Good:
isLogin && goHome();
```

## 9. 一个方法只做一件事情，严格遵守这条规则会让你的代码可读性更好，也更容易重构

```javascript
// Bad:
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// Good:
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

## 10. 函数名上体现它的作用

```javascript
// Bad:
function addToDate(date, month) {
  // ...
}

const date = new Date();
// 很难知道是把什么加到日期中
addToDate(date, 1);

// Good:
function addMonthToDate(month, date) {
  // ...
}
const date = new Date();
addMonthToDate(1, date);
```

## 11. 删除重复代码，合并相似函数

```javascript
// Bad:
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };
    render(data);
  });
}
function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };
    render(data);
  });
}

// Good:
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();
    const data = {
      expectedSalary,
      experience
    };
    switch (employee.type) {
      case "develop":
        data.githubLink = employee.getGithubLink();
        break;
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
    }
    render(data);
  });
}
```

## 12. 使用 Object.assign 设置默认属性

```javascript
// Bad:
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true
};
function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true;
}
createMenu(menuConfig);

// Good:
const menuConfig = {
  title: "Order",
  // 不包含 body
  buttonText: "Send",
  cancellable: true
};
function createMenu(config) {
  config = Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true
    },
    config
  );
  // config : {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}
createMenu(menuConfig);
```

## 13. 不要写全局方法，会造成全局污染

```javascript
// Bad:
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter((elem) => !hash.has(elem));
};

// Good:
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter((elem) => !hash.has(elem));
  }
}
```

## 14. 使用 some 方法判断是否有满足条件的元素

```javascript
// bad
let arr = [1, 3, 5, 7];
function isHasNum(n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return true;
    }
  }
  return false;
}

// good
let arr = [1, 3, 5, 7];
let isHasNum = (n) => arr.some((num) => num === n);

// best
let arr = [1, 3, 5, 7];
let isHasNum = (n, arr) => arr.some((num) => num === n);
```

## 15. 使用 filter 方法过滤原数组，形成新数组

```javascript
// bad
let arr = [1, 3, 5, 7],
  newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 4) {
    newArr.push(arr[i]);
  }
}

// good
let arr = [1, 3, 5, 7];
let newArr = arr.filter((n) => n > 4); // [5, 7]
```

## 16. 使用 map 对数组中所有元素批量处理，形成新数组

```javascript
// bad
let arr = [1, 3, 5, 7],
  newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] + 1);
}

// good
let arr = [1, 3, 5, 7];
let newArr = arr.map((n) => n + 1); // [2, 4, 6, 8]
```

## 17. 使用 Object.values 快速获取对象键值

```javascript
let obj = {
  a: 1,
  b: 2
};
// bad
let values = [];
for (key in obj) {
  values.push(obj[key]);
}

// good
let values = Object.values(obj); // [1, 2]
```

## 18. 使用 Object.keys 快速获取对象键名

```javascript
let obj = {
  a: 1,
  b: 2
};
// bad
let keys = [];
for (value in obj) {
  keys.push(value);
}

// good
let keys = Object.keys(obj); // ['a', 'b']
```

## 19. 字符串拼接使用${}，结构参数

```javascript
let person = {
    name: 'LiMing',
    age: 18
}
// bad
function sayHi (obj) {
    console.log('大家好，我叫' + person.name = '，我今年' + person.age + '了')
}

// good
function sayHi (person) {
    console.log(`大家好，我叫${person.name}，我今年${person.age}了`)
}

// best
function sayHi ({name, age}) {
    console.log(`大家好，我叫${name}，我今年${age}了`)
}
```

## 20. 检查数组是否都满足某条件

```javascript
const data = [
  { name: "a", age: 20 },
  { name: "b", age: 28 },
  { name: "c", age: 18 }
];
// bad
function filter(n) {
  let isAll = true;
  data.forEach(({ age }) => {
    if (age > n) {
      isAll = false;
    }
  });
  return isAll;
}
// good
function filter(n) {
  const o = data.find((x) => x.age > n);
  return o ? true : false;
}
// best
function filter(n) {
  return data.every((x) => x.age > n);
}
```

## 21. 错误处理 - try...catch...

```javascript
// bad
function async fetchData() {
    const res = await getData({})
    const { success, response = [] } = res || {}
    if (success) {
        setData(response)
    }
}

// good
function async fetchData() {
    try {
        const res = await getData({}) ?? []
        const { success, response = [] } = res
        if (success) {
            setData(response)
        }
    } catch (err) {
        console.log('error', const res = await getData({}))
	}
}
```

## 22. 使用展开操作符...

```javascript
// bad
let jayChouSongs = ["七里香", "夜曲", "搁浅", "一路向北"];
let maydaySongs = ["突然好想你", "我不愿让你一个人", "咸鱼", "后来的我们"];

let songs = jayChouSongs.concat(maydaySongs);

// good
let jayChouSongs = ["七里香", "夜曲", "搁浅", "一路向北"];
let maydaySongs = ["突然好想你", "我不愿让你一个人", "咸鱼", "后来的我们"];

let songs = [...jayChouSongs, ...maydaySongs];
```

## 23. 通过**Object.entries**把对象转换成 key/value 对数组

```javascript
const user = {
  name: "jayChou",
  job: "singer",
  song: "七里香"
};

let userKeys = Object.entries(user); //[['name','jayChou'],['job', 'singer'], ['song', '七里香']]
```

## 24. 函数参数使用 function 校验

```javascript
// bad
let findStudentByAge = (arr, age) => {
  if (!age) throw new Error("参数不能为空");
  return arr.filter((num) => num === age);
};

// good
let checkoutType = () => {
  throw new Error("参数不能为空");
};
let findStudentByAge = (arr, age = checkoutType()) => arr.filter((num) => num === age);
```
