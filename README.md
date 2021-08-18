# Vuejs3+Vite2+ElementPlus 后台管理系统模板

## 简介

一个免费开源的后台管理系统模板。使用最新的主流技术开发，开箱即用（主要还是用于学习参考！），主要向以下两个高 star 的后台管理系统模板进行学习，并根据需求进行取舍和优化改进。

- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin) 使用了最新的`vue3`,`vite2`,`TypeScript`,`antdv`等主流技术开发 (代码量非常庞大和复杂...)
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 是一个后台前端解决方案，它基于`vuu2` 和 `element ui` (作者还没开发出 vue3 版本)

没有 TypeScript！！！！

没有 Vuex ！！！！！！

不支持 IE:v::v::v::v::v:

## 技术

(列出来方便写报告呢！)

- [Vue.js 3](https://v3.cn.vuejs.org/) ： 一套用于构建用户界面的**渐进式框架**
- [Vite 2](https://cn.vitejs.dev/) ：基于`ESM` 的新型前端构建工具，能够显著提升前端开发体验
- [Vue Router 4](https://next.router.vuejs.org/zh/) ：Vue.js 的官方路由。它与 Vue.js 核心深度集成
- [Element Plus](https://element-plus.gitee.io/) ：基于 Vue 3.0 的桌面端组件库 (目前仍是 beta 版)
- [axios](https://echarts.apache.org/zh/index.html) ：基于`promise`的 HTTP 请求库
- [echarts](https://axios-http.com/zh/) ：基于 JavaScript 的开源可视化图表库
- [mockjs](http://mockjs.com/) ：生成随机数据，拦截 Ajax 请求，配合 [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) 插提高开发效率
- [SCSS](https://www.sass.hk/docs/) ：动态样式语言，是强化 CSS 的辅助工具 （SCSS 是 Sass 3 引入新的语法）
- [prettier](https://prettier.io/) ：可配置化的代码格式化工具，支持多种语言，（往往与 ESLint 一起使用，但...)

## 特性

- 使最新的前端主流技术栈进行开发
- **没有 TypeScript** 让代码更加轻量级也便于快速上手 （对于初学者，代码多了难看下去）
- **没有 Vuex** 这个用起来是真的麻烦！在 vue3 中更没必要加入它（个人看法）
- **详细的代码注释** 注释多多益善，有总比没有好（个人看法）
- **少依赖** 能减少依赖项就尽量减少，能自己实现就自己实现，依赖多了安装都可能出问题
- 常用组件 组件源码内自带详细的使用案例
- Mock 数据
- 权限功能
- TODO

## 功能

**TODO**

### 待加入

- [ ] 组件-页面内标题
- [ ] 核心-路由重置
- [ ] 组件-消息滚动通知
- [ ] 组件-卡片悬浮遮罩效果
- [ ] 组件-图片预览
- [ ] 功能-Loading
- [ ] 功能-搜索菜单
- [ ] 案例-表格合并示例
- [ ] 案例-文本编辑器
- [ ] 功能-记录滚动位置

## 常见报错

1. esbuild.exe 没找到

> events.js:292
> throw er; // Unhandled 'error' event
> ^
>
> Error: spawn project\node_modules\esbuild\esbuild.exe ENOENT
> at Process.ChildProcess.\_handle.onexit (internal/child_process.js:269:19)
> at onErrorNT (internal/child_process.js:465:16)
> at processTicksAndRejections (internal/process/task_queues.js:80:21)
> Emitted 'error' event on ChildProcess instance at:
> at Process.ChildProcess.\_handle.onexit (internal/child_process.js:275:12)
> at onErrorNT (internal/child_process.js:465:16)
> at processTicksAndRejections (internal/process/task_queues.js:80:21) {
> errno: -4058,
> code: 'ENOENT',
> syscall: 'spawn project\\node_modules\\esbuild\\esbuild.exe',
> path: 'project\\node_modules\\esbuild\\esbuild.exe',
> spawnargs: [ '--service=0.12.9', '--ping' ]
> }

​ 解决如下

> 手动执行 `node node_modules/esbuild/install.js` ，vite-plugin-mock 报错也使用同样方法解决
>
> 手动执行`node .\node_modules\vite-plugin-mock\node_modules\esbuild/install.js`
>
> 或者一行命令执行完 👇
>
> node node_modules/esbuild/install.js && node .\node_modules\vite-plugin-mock\node_modules\esbuild/install.js

## 更新日志

**TODO**

## 启动项目

- 需要 node 和 git

- 获取项目代码

```sh http://fanyibar.top/vite/index.html 👈 戳它戳他
git clone  git@github.com:Shangri-GitHub/vue3-vite-admin.git
```

- 安装项目依赖

```sh
cd prometheus-web/
npm install
npm run dev
```
