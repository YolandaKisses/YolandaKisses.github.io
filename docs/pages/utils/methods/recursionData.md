# recursionData 根据id递归树curd

```javascript
/**
 * 根据目标id删除指定节点
 * @param {*} list 数据源
 * @param {*} targetId 目标id
 */
this.$CommonUtils.deleteNodeById(list, targetId);
```

```javascript
/**
 * 根据目标id查找指定节点
 * @param {*} list 数据源
 * @param {*} targetId 目标id
 * @returns 匹配id的obj
 */
 const result = this.$CommonUtils.selectNodeById(list, targetId);
```

```javascript
/**
 * 添加节点到目标id下
 * @param {*} list 数据源
 * @param {*} targetId 目标id
 * @param {*} obj 目标对象
 */
this.$CommonUtils.appendNodeById(list, targetId, obj);
```

```javascript
/**
 * 修改目标id数据
 * @param {*} list 数据源
 * @param {*} targetId 目标id
 * @param {*} obj 目标对象
 */
this.$CommonUtils.updateNodeById(list, targetId, obj);
```
