# Vue 后台管理系统说明

## 前言：

> 开发后台框架须知: 由于页面框架暂时没有演示地址，目前用的长江养老投研绩效的后台 api 地址，下边所叙述的功能框架前端代码已更新，按照文档叙述做开发即可，有问题再沟通。（若在系统上进行修改测试，记得数据要复原，不要影响原系统）

> 开发系统须知：下列叙述的功能各个系统没有实现统一，开发功能的时候要结合本项目的代码来开发，如果需要此功能的话，去系统框架上进行 copy

> 框架 git 地址 https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-web-vue

## 一、开发工具和配置

### 1.1 开发工具 VsCode

> 官网：https://code.visualstudio.com/docs

> 一个比较详细的教程：
> https://geek-docs.com/vscode/vscode-tutorials/introduction-to-vscode.html

> 设置背景颜色的：https://jingyan.baidu.com/article/fdbd42773cef93f99f3f4823.html

> 统一格式化插件选用...?

### 1.2 统一 setting.json 文件配置

```
// todo...
```

### 1.3 统一 .eslintrc.js 文件配置

```
// todo...
```

### 1.4 统一忽略文件配置 .eslintignore / .gitignore

```
// todo...
```

### 1.5 统一 .npmrc 源地址

```
// todo...
```

## 二、运行和打包部署

### 1.1 环境配置

> https://nodejs.org/en/download/ node js 官网下载，会自动配置 npm

> node，npm 版本不同暂时没有发现问题（有同事用高版本的 node 发布 ddportal-ui 的包出过问题，暂时不确定是否是版本的问题）

> 和目前本地的版本保持一致，node：8.11.3 / npm：6.11.3

> 同一个项目本地环境的 node 版本不一致的话，node_modules 不可相互复制；如果本地开发环境更新了 node 版本，对应的 node_modules 也要重新下载，不然会报兼容性问题

### 1.2 下载依赖指令 npm install

> 注意：下载 npm 包的时候是根据系统里边的.npmrc 文件指定的下载地址来下载的

> http://192.168.1.21:8081/repository/npm-public/ （公司内网）

> http://vip.datadriver.com.cn:8082/repository/npm-public/（公司外网）

> 下载失败可能的原因：
>
> 1.  网速问题导致包没有下载完全导致报错，重新执行 npm install 下载还不行的话，再删除 node_modules 目录重新下载试试
> 2.  其他问题自行百度解决，无法解决的问下对应的前端开发人员

### 1.3 运行指令 npm run dev

> 注：ip 运行，可以让其他开发者访问你的本地开发环境

<img :src="$withBase('/host.png')" alt="host">

> localhost 本地启动，其他开发者无法访问你的开发环境

### 1.4 打包指令

> 项目打包步骤（删除之前的 dist 目录，不然可能会出现更新问题）
>
> 1.  确定 .npmrc 文件里边配置如下，公司内网环境打包
>
>     registry="http://192.168.1.21:8081/repository/npm-public/" 2.公司外网环境
>
>     registry="http://vip.datadriver.com.cn:8082/repository/npm-public/"
>
> 2.  拉取代码，下载更新 npm install ddportal-ui@1.0.0（pc 端需要的话就更新，pad 端暂时不需要）
>
>     确保代码无误可运行，以及最新的功能已经更新 （项目存在其他私有前端包也要更新）
>
> 3.  确定是否需要采用外部系统登录跳转到本系统的形式(长江养老投研绩效系统)
>
>     需修改 src=>store => modules => setting.js 里边的
>     backendLogin 是否后端登录 true or false
>
>     backendLoginUrl 外部系统登录跳转地址
>
> 4.  修改打包地址
>
>     config => prod.env.js BASE_API 变量修改为服务器端请求地址
>
>     config => sit.env.js 此文件为测试环境打包 暂时无用
>     配置方式
>
>     1.绝对路径 http://vip.datadriver.com.cn:9062/iamac/rest
>
>     2.相对路径 ./rest
>
>     备注：如页面访问地址为http://vip.datadriver.com.cn:9062/iamac/#/dashboard，则相对路径会自动添加http://vip.datadriver.com.cn:9062/iamac/ 的内容

### 1.5 公司环境部署

#### 1.5.1 部署 203 服务器

> 地址：http://192.168.1.202:9090/jenkins/  
> 账号密码： datadriver  datadriver

> 1. 新建一个任务

<img :src="$withBase('/jenkins.png')" alt="jenkins">

> 2. 名字命名规则 wy\_ fund + 项目名称 + vue 示例: wy_fund-iamac-vue 下边的是从哪个项目复制过来的（直接写项目名称） 方便修改后边的打包命令

<img :src="$withBase('/newTask.png')" alt="newTask">

> 3. Git 地址换一下

<img :src="$withBase('/jenkinsGit.png')" alt="jenkinsGit">

> 4. 修改路径为访问的路径就可以了，可以测试下，打包结构不一样的需要另外配置，例: 如http://vip.datadriver.com.cn:9062/cjyl-dev/ 路径就为 cjyl-dev  
>    访问地址为： http://vip.datadriver.com.cn:9062/ + 打包路径（上边红框里边的路径）

<img :src="$withBase('/jenkinsPath.png')" alt="jenkinsPath">

> 203 服务器自动部署注意事项：
>
> 1. 删除项目的 ddportal-ui，目的是重新拉取 ddportal-ui 包，也可以执行 npm install ddportal-ui@1.0.0命令， dist 是项目打包文件
>
> 2. npm install // 下载
>
> 3. npm run build:prod // 打包

#### 1.5.1.1 服务器端公司私有 npm 包更新失败

> 解决方案：
>
> 1. 添加这个下载私有包的命令 例如：npm install ddrisk-ui@1.0.0 那个包更新不了就写那个
>
>    <img :src="$withBase('/npmError.png')" alt="npmError">
>    <img :src="$withBase('/npmError2.png')" alt="npmError2">
>
> 2. 如果这样可以了，那就行了，如果还不行报如下错误，添加命令 npm cache clean --force 试下，就可以了
>
>    <img :src="$withBase('/npmCache.png')" alt="npmCache">
>    <img :src="$withBase('/npmCache2.png')" alt="npmCache2">

#### 1.5.2 部署 204 服务器

- 1. 首次部署的做法：

* （1）修改 dev.env.js 的访问地址为 204 服务器请求地址
* （2）打压缩包给后端开发人员即可（包括 node_modules 和 package.json ）
* （3）直接运行 npm run dev 即可

<img :src="$withBase('/204server.png')" alt="204server">

- 2. 后边部署更新的做法

* （1）一般只需要更新 src 文件夹即可
* （2）如果有 ddportal-ui 包的更新或者其他 npm 包的更新也要发 npm 包给后端开发人员
* （3）直接复制 node_modules 需要确保两边的 node 环境一致，不一致可能会出现如下错误，解决办法就是在服务器上重新下载这个包，或者不发 node_modules 包，直接在服务器上执行 npm install 即可

<img :src="$withBase('/nodeSass.png')" alt="nodeSass">

> 1. 修改 npmsrc 文件地址为外网 （内网在服务器上下载不了，比较奇怪）

<img :src="$withBase('/npmReg.png')" alt="npmReg">

> 2. 执行 npm rebuild node-sass 命令

<img :src="$withBase('/sassRebuild.png')" alt="sassRebuild">

#### 204 服务器端管理界面登录方式

> 访问远程桌面 mstsc

<img :src="$withBase('/204long.png')" alt="204long">

> IP 地址： 192.168.1.204
> 账号密码：administrator / data68868569

## 三、主要技术支持

> vue.js（2.5.17） https://cn.vuejs.org/  
> vue element admin https://panjiachen.github.io/vue-element-admin-site/zh/  
> element UI https://element.eleme.io/#/zh-CN

## 四、目录树

```
├── build # 构建相关
├── config # 项目打包配置
├── node_modules # npm 依赖资源
├── src # 源代码
│ ├── api # 所有请求
│ │ ├── template # 请求示例
│ ├── assets # 主题 字体等静态资源
│ ├── components # 全局公用组件
│ ├── directive # 全局指令
│ ├── filters # 全局 filter
│ ├── icons # 项目所有 svg icons
│ ├── lang # 国际化 language
│ ├── mock # 模拟数据
│ ├── router # 路由
│ ├── store # 全局 store 管理
│ ├── styles # 全局样式
│ ├── utils # 全局公用方法
│ ├── vendor # 公用 vendor 第三方库
│ ├── views # views 所有页面
│ │ ├── errorPage # 报错提示页面
│ │ ├── home # 项目首页
│ │ ├── layout # 页面主体布局
│ │ ├── login # 登录页面
│ │ ├── loginBack # 其它途径登录系统页面
│ │ ├── permission # 前端控制权限实例
│ │ ├── ping # 项目部署成功后 pin 的路由 根路径 + /ping
│ │ ├── redirect # 路由重定向
│ │ ├── responseStatus # 后台报错指向页面 根路径 + /responseStatus?status=401
│ │ ├── setting # 系统设置页面
│ │ ├── template # 系统模板
│ │ │ ├── template # 页面请求接口示例
│ │ │ │ ├── templateSeparate # 页面 css、js、vue 分离写法
│ ├── App.vue # 入口页面
│ ├── main.js # 入口文件 加载组件 初始化等
│ └── permission.js # 权限管理 路由切换前所做的处理
├── .eslintrc.js # eslint 配置项
├── .npmrc # npm 包下载地址
├── index.html # 项目主页面
├── .babelrc # babel-loader 配置 es6 语法转化
└── package.json # npm 包配置文件
```

## 五、规范

### 5.1 页面规范

> 1. 如果页面代码量较小，采用 views =》template 文件夹下 template.vue 的写法；如果页面代码量较多，就采用 views =》template =》templateSeparate 文件夹下 scss、js、vue 文件分离的形式  
>    参考：https://blog.csdn.net/weixin_30593443/article/details/97817798
> 2. 页面代码尽可能多调用组件和方法，备注写清晰，结构清晰
> 3. 页面兼容最小分辨率为 1344\*768，目前主要兼容谷歌浏览器即可

### 5.2 配置文件

> package.json 文件如有修改，需要通知协同开发的同事更新包或下载包或删除包

### 5.3 增删改查

> 参考长江养老投研绩效系统的券商佣金 => 券商信息维护 页面进行开发  
> 前端访问：http://vip.datadriver.com.cn:9062/cjyl-dev/  
> 项目 git 地址：https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-invet-web.git

## 六、功能明细

### 6.1 ddportal-ui npm 包（公司私有）

> Git 地址 https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-vue-ui-risk

#### 6.1.1 公司 npm 服务器访问地址

> http://192.168.1.21:8081/repository/npm-public/  
> http://vip.datadriver.com.cn:8082/repository/npm-public/

#### 6.1.2 公司推送包步骤

- 注意事项

* 1. 更新最新代码，确认功能无误，保证不影响其他项目的情况下再打包
* 2. . npmsrc 文件根据需要修改，不要提交
* 3. 由于各个项目公用此组件的原因，不要随意改变系统管理等模块的代码，打包完成后要通知对应项目组进行包的更新
* 4. 更新代码要注意一个问题，只更新前端没问题，但前端和后台同时更新了，就要注意下该系统后台是否更新了，是否有影响，会报错等

> 执行 npm run lib 打包，生成如下文件即为成功

<img :src="$withBase('/npmlib.png')" alt="npmlib">

> 如 npm run lib 打包报以下错误

<img :src="$withBase('/buildError.png')" alt="buildError">

> 解决办法：https://blog.csdn.net/lucky_Zeng/article/details/108622002

- 修改 .npmsrc 文件地址如下
- 然后执行 npm config get registry 确认发包地址为内网或外网（可以省略）
  - 内网：http://192.168.1.21:8081/repository/npm-hosted/
  - 外网：http://vip.datadriver.com.cn:8082/repository/npm-hosted/

<img :src="$withBase('/npmsrc.png')" alt="npmsrc">

> npm login 输入用户名密码 datadriver datadriver

> npm publish 发包成功界面如下

<img :src="$withBase('/publish.png')" alt="publish">

> Ps: 发布版本可以重复，目前只能是 1.0.0 版本

#### 6.1.3 下载 npm 包地址

> 1. 外网：http://vip.datadriver.com.cn:8082/repository/npm-public/
> 2. 内网：http://192.168.1.21:8081/repository/npm-public/

#### 6.1.4 常用地址切换

> 切换.npmrc 文件的路径即可

<img :src="$withBase('/changeNpmrc.png')" alt="changeNpmrc">

### 6.2 包引入

#### 6.2.1 改变 npm 仓库地址

> 1. 改变仓库地址到公司: 修改.npmrc 文件（这个文件是把项目的 npm 下载路径指向为文件配置的内容，不受 npm config set 的影响）
> 2. npm install ddportal-ui@1.0.0 （公司库里边存在一个 1.0.1 的版本，没用） 每次更新包都是这个命令
> 3. 添加配置到 main.js 里 （和 element ui 位置一样）

```
import DdportalUI from 'ddportal-ui'
import 'ddportal-ui/lib/ddportal-ui.css'
Vue.use(DdportalUI)
```

> 备注：现在的包为公司私有服务器上的 npm 包  
> 只能通过http://192.168.1.21:8081/repository/npm-public/ 或 http://vip.datadriver.com.cn:8082/repository/npm-public/ 下载  
> 开发项目需要 npm install 更新下载包（比如 element ui），目前都是是默认通过公司服务器下载（公司服务器没有的服务器会自动从公网下载）

#### 6.2.2 store/setting.js 添加变量，已存在忽略此步骤

```
// 添加 baseApi 变量, 后端请求地址
baseApi: process.env.BASE_API,
```

#### 6.2.3 引入嵌套页面

> 相关组件名称可以去 ddportal-ui 开发环境里边获取  
> https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-vue-ddui  
> 示例：框架里边的 ETL 菜单  
> https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-web-vue

<img :src="$withBase('/ddUI.png')" alt="ddUI">

#### 6.2.4 切换下载源到 npm 或淘宝镜像的命令

> 1.修改.npmrc 文件指向的下载路径为 https://registry.npm.taobao.org  或 http://registry.npmjs.org/

### 6.2 菜单配置

#### 6.3.1 通配

- ID: 不能重复
- id 配置规则：
- 一级菜单为 0,1,2,3,4,5,6
- 二级菜单为：以父级为 1 的作为示例 101 102 103
- 三级菜单为：以父级为 101 的作为示例 10101 10102 10103
- ......
  - 排序字段：不是按照大小排序，按照第一个数字、第二个数字等 0-9 进行排序
  - 菜单名称：正常写
- 菜单编码：菜单的编码标识，无特殊需求的话，只配置个 MENU.PORTAL 即可（如果页面出现 name 值的警告，需要将菜单编码值设置成唯一的）
- 1.是权限设置的，配置方法参考 4.6
- 2.和页面缓存功能相关的 ，需要参考本文档的 4.5 ，此功能路由多级（二级以上）页面、公用页面和嵌套外部系统页面存在缓存不了的问题，暂未解决，不要使用
  - 图标文件：对应前端开发代码内 src => icons => svg 的内容
  - 菜单类型：PAGE.PERMISSION.TYPE.MU 为菜单类型 \* PAGE.PEISSIORMN.TYPE.BT 为按钮类型 配置按钮权限的
- PAGE.PEISSIORMN.TYPE.RESOURCE 暂未使用
- 状态：启用 禁用 只遍历启用的
- 远程访问本系统：本系统（暂时无用，之前是 jsp 页面框架在系统间相互嵌套时有用）
- 菜单加载模式：内部链接 外部链接（嵌套外部页面选择外部链接选项）
- 菜单分组编码：暂时无用
- 备注：页面地址 添加方法参考以下单个菜单，多级菜单的详细内容
- URL： 必填（原因是不写容易造成路由重复，以及项目代码如果不写路由地址的话可能会报错） 添加方法参考以下单个菜单，多级菜单的详细内容

#### 6.3.2 单个菜单

> 备注字段就是页面地址  
> 单个菜单需要配置该页面的页面地址 从 views 开始， URL 配置示例： /routerPage （一个单词，同级别的不要重复，前边加斜杠）

<img :src="$withBase('/MENU.png')" alt="MENU">

#### 6.3.3 多级菜单

> 多级菜单的根路由无需配置页面地址 URL 配置示例： /routerPage （一个单词，同级别的不要重复，前边加斜杠）

<img :src="$withBase('/menuMore.png')" alt="menuMore">

> 多级菜单的子级菜单还存在子级页面的如下配置 页面地址统一为  
> views/routerPage/index URL 配置示例：routerPage （单个单词，不加斜杠，同级别不要重复）

<img :src="$withBase('/routerPage.png')" alt="routerPage">

> 多级菜单的子级菜单没有子级的如下配置 页面地址为该路由下边的 vue 页面地址 从 views 开始，URL 配置示例：routerPage （单个单词，不加斜杠，同级别不要重复）

<img :src="$withBase('/roternoChild.png')" alt="roternoChild">

#### 6.3.4 jsp 页面嵌套

> Ps: 配置成功，本地打开可能会跨域，线上没问题

> 1.jsp 页面嵌套:  
> 配置 jsp  页面就统一前边加  jspPage  标识，  
> 多级菜单示例：jspPage/rest/edimExt/edimList.do （ps：/rest/edimExt/edimList.do 加上页面请求的根地址就是 jsp 页面对应的地址，逻辑可以看 views => department >下边的内容 ，父级路由参考上边的说明写就可以）  
> 单个菜单示例：/jspPage/rest/edimExt/edimList.do?depe=1  
> 页面地址就是固定的 views/setting/department  
> 示例：

<img :src="$withBase('/jsp.png')" alt="jsp">

#### 6.3.5 外部链接

配置方法：

- 1.菜单加载模式选择外部链接，
- 2.页面地址 固定的 views/setting/outerPage，
- 3.配置两个参数   第一个是 isNeedLogin  是否需要登录  true or false ，后边 url  是外部链接地址，前边的 outerPage 是路由，配置一个单词就可以了，菜单同级的话不要重复，一级路由记得加  / ，具体逻辑可以参考对应的代码
- outerPage?isNeedLogin=true&url=http://10.248.27.83:8075/WebReport/ReportServer?op=f

<img :src="$withBase('/link.png')" alt="link">

> ps: 页面存在& 符号的问题导致出不来页面的，联系对应的后端开发人员解决

<img :src="$withBase('/linktest.png')" alt="linktest">

#### 6.3.6 点击某个菜单，打开浏览器新的 tab 页显示这个页面

> 部分系统此菜单页面比较重要，需要单独展示等

> 如果使用此功能需要确认以下代码，看提交记录即可  
> https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-web-vue/commit/a2cb2c51e5d1949415bbb7a42b9f23aacfbfd549

<img :src="$withBase('/blank.png')" alt="blank">

> 1. 系统 vue 页面，在 URL 后边添加 -targetBlank 即可

<img :src="$withBase('/blankvue.png')" alt="blankvue">

> 2.  系统嵌套的 jsp 页面 在链接参数上添加 targetBlank=targetBlank 即可

<img :src="$withBase('/blankjsp.png')" alt="blankjsp">

> 3.  外部链接页面 在参数前边的路由地址里边添加 -targetBlank 即可

<img :src="$withBase('/blanklink.png')" alt="blanklink">

> 4.  如果新打开的 tab 页需要隐藏菜单打开

<img :src="$withBase('/hidenpage.png')" alt="hidenpage">

> 5.  修改浏览器 tab 页名称

<img :src="$withBase('/tabname.png')" alt="tabname">

> 需添加如下代码，屏蔽代码放开即可  
> https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-web-vue/commit/bace093e828f082e7047622f15a69894a88e9672

### 6.4 本系统页面被其他系统框架嵌套

- 目的: 其他系统需要嵌套本系统的页面做展示

- 实现方式: 例: http://vip.datadriver.com.cn:9062/etl/#/ddportal/ddMenu?token=
- token 就是当前系统登录的 token

- 描述: 如果使用此功能需要确认以下代码

<img :src="$withBase('/nest1.png')" alt="nest1">
<img :src="$withBase('/nest2.png')" alt="nest1">
<img :src="$withBase('/nest3.png')" alt="nest1">
<img :src="$withBase('/nest4.png')" alt="nest1">

### 6.5 登录配置

> 登录跳转页面之前为固定的，现在修改为动态获取后端返回路由菜单的第一个页面，可参考  
> https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-web-vue/commit/bd7b06149869330f6af736f8d3a4db7f16dc27e7 这个提交记录对项目进行修改  
> Ps: 登录跳转的页面也可以指定，然后登录后就跳转此页面，和系统管理的首页配置相关，暂未开发

### 6.6 页面缓存

1. store => modules => setting.js 下的 pagesCache 变量 默认为 2

   - 1. 关闭页面顶部的 tabs 菜单清除缓存，切换 tabs 菜单保持缓存
        - 此功能路由多级（二级以上）页面、公用页面和嵌套外部系统页面存在缓存不了的问题，暂未解决，不要使用
        - 可能有用的解决方案 https://juejin.cn/post/6895228036342513672
   - 2. 所有页面都缓存
   - 3. 所有页面都不缓存

2. 关闭页面顶部的 tabs 菜单清除缓存，切换 tabs 菜单保持缓存   目前的配置：  
   设置菜单编码的值和页面 name 的值保持一致，配置一个不重复的英文即可（菜单编码不要重复，重复会有警告，比如框架里边就有警告）

<img :src="$withBase('/cache1.png')" alt="cache1">
<img :src="$withBase('/cache2.png')" alt="cache2">

### 6.7 权限设置

> 1. 菜单如何配置
>    除了红字描述的，其他的按照 6.2 的菜单配置正常配置即可

<img :src="$withBase('/auth.png')" alt="auth">

> 2.使用方法  
> （1）自定义指令： v-btn = "'MENU.PORTAL'" MENU.PORTAL 为菜单编码  
> 备注：此方式对于控制 tabs 选项卡的权限设置有问题，可以使用方法 2 解决  
> （2）调用公共方法： v-if = "this.$fun.btnsAuthority('MENU.PORTAL')" MENU.PORTAL 为菜单编码  
> 使用方法 2 要确认下  
> https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-web-vue/commit/d16629efe7e302038db531d780377409a1166050 ，以上代码项目里边是否存在，不存在要手动同步下再使用

### 6.8 新建项目

> 1.  从https://git.datadriver-inc.com/org-fund-foms/datadriver-fund-web-vue 项目里边复制以下文件到新建项目的 git 地址下，点击执行 datadriver-web.bat 文件，iOS 系统执行 datadrvier-web.sh 文件即可

<img :src="$withBase('/create.png')" alt="create">

> 2.  npm install 下载依赖
> 3.  配置文件修改

<img :src="$withBase('/api.png')" alt="api">
<img :src="$withBase('/title.png')" alt="title">
<img :src="$withBase('/setting.png')" alt="setting">
<img :src="$withBase('/logo.png')" alt="logo">
