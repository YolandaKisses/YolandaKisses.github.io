# myPromiseAll

```html
<script>

/**
 * Promise.all() 封装
 * @param {Array} array 接口参数
*/
export function myPromiseAll(array){
  let AllList = []
  array.forEach(item=>{
    AllList.push(PromiseObj(item))
  })
  return Promise.all(AllList)
}

function PromiseObj(item){
  return new Promise((resolve, reject)=>{
    let obj = {};
    if(item.method == "get"){
      obj = {
        url: item.url + '?' + qs.stringify(item.params),
        method: 'get'
      }
    }
    if(item.method == "post"){
      if(item.paramsType == "json"){
        obj = {
          url: item.url,
          method: 'post',
          data: item.params
        }
      }
      if(item.paramsType == "formdata"){
        obj = {
          url: item.url,
          method: 'post',
          data: qs.stringify(item.params)
        }
      }
    }
    request(obj).then(res=>{
      resolve({ key:item.key, data:res.data })
    })
  })
}

</script>
```

# 使用举例

```html
<script>
  const requestArr = [
    {
      url: "/api/edimExt/v1.0/edimsGet",
      params: { dimTypecode: "fundann_reportType" },
      method: "get",
      key: "aaa"
    },
    {
      url: "/api/edimExt/v1.0/edimsGet",
      params: { dimTypecode: "fundann_submitComp" },
      method: "get",
      key: "bbb"
    }
  ];
  fun.myPromiseAll(arr).then(res=>{
    console.log("res", res);
  })
</script>
```