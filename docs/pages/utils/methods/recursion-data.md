# recursionData 根据 id 递归树 curd

```javascript
/**
 * @desc 根据目标id删除指定节点
 * @param {*} list 数据源
 * @param {*} targetId 目标id
 */
this.$CommonUtils.deleteNodeById(list, targetId);
```

```javascript
/**
 * @desc 根据目标id查找指定节点
 * @param {*} list 数据源
 * @param {*} targetId 目标id
 * @returns 匹配id的obj
 */
const result = this.$CommonUtils.selectNodeById(list, targetId);
```

```javascript
/**
 * @desc 添加节点到目标id下
 * @param {*} list 数据源
 * @param {*} targetId 目标id
 * @param {*} obj 目标对象
 */
this.$CommonUtils.appendNodeById(list, targetId, obj);
```

```javascript
/**
 * @desc 修改目标id数据
 * @param {*} list 数据源
 * @param {*} targetId 目标id
 * @param {*} obj 目标对象
 */
this.$CommonUtils.updateNodeById(list, targetId, obj);
```
