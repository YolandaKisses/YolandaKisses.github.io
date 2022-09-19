# listToTree 线性列表转树性列表

```html
<script>
  /**
   * 线性列表转树性列表
   * @param {Array} list 数据列表
   * @param {Object} option 参数如下
   * @param {String} key 当前节点的key
   * @param {String} parentKey 父节点的key
   * @param {Boolean} isSort 是否排序
   * @param {String} sort 排序属性
   */
  export function listToTree(list, option) {
    const _defaultOptioin = {
      key: "id",
      parentKey: "pid",
      isSort: true,
      sortKey: "sort"
    };
    const { key, parentKey, isSort, sortKey } = Object.assign(_defaultOptioin, option);
    // 存放结果集
    const result = [];
    const itemMap = {};
    for (const item of list) {
      const id = item[key];
      const pid = item[parentKey];

      if (!itemMap[id]) {
        itemMap[id] = {
          children: []
        };
      }
      try {
        const _sort = Number(item[sortKey]);
        item[sortKey] = _sort || item[sortKey];
      } catch {}

      itemMap[id] = {
        ...item,
        children: isSort ? XEUtils.orderBy(itemMap[id]["children"], sortKey) : itemMap[id]["children"]
      };

      const treeItem = itemMap[id];

      if (!pid || pid == 0) {
        result.push(treeItem);
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: []
          };
        }
        itemMap[pid].children.push(treeItem);
        if (isSort) {
          itemMap[pid].children = XEUtils.orderBy(itemMap[pid].children, sortKey);
        }
      }
    }
    return isSort ? XEUtils.orderBy(result, sortKey) : result;
  }
</script>
```
