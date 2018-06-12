import Vue from 'vue'
import Router from 'vue-router'
// 组件导入
export default new Router({
    // 默认mode（模式）为hash，可选值history（路径仿真）、abstract（无状态路径）
    mode: 'history',
    routes: [
            // {path:"/",redirect:"/xxxxxx"},
            {
                // path:'',
                // name:'',
                // component:
            }
    ],
    linkActiveClass: 'active'
})

Vue.use(Router)