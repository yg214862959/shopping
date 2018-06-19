# project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<!-- 坑总结：
页面中某个按钮直接跳转路由并非导航切换时，底部路由图标需要切换，在上一个组件离开，下一个组件载入时，v-if重新加载一下底部路由导航 -->
