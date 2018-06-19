import Vue from 'vue'
import Router from 'vue-router'
// 组件导入
import Home from '@/components/page/Home'
import Classification from '@/components/page/Classification'
import Shopping from '@/components/page/Shopping'
import Person from '@/components/page/Person'
import GameDetails from '@/components/page/GameDetails'
import Settlement from '@/components/page/Settlement'
import Login from '@/components/page/Login'

export default new Router({
    //默认mode（模式）为hash，可选值history（路径仿真）、abstract（无状态路径）
    mode: 'history',
    routes: [
            {path:"/",redirect:"/Login"},
            {
                path:'/Home',
                name:'home',
                component:Home
            },
            {
                path:'/Classification',
                name:'classification',
                component:Classification
            },
            {
                path:'/Shopping',
                name:'shopping',
                component:Shopping
            },
            {
                path:'/Person',
                name:'person',
                component:Person
            },
            {
                path:'/GameDetails',
                name:'gamedetails',
                component:GameDetails
            },
            {
                path:'/Settlement',
                name:'settlement',
                component:Settlement
            },
            {
                path:'/Login',
                name:'login',
                component:Login
            }

    ],
    linkActiveClass: 'active',
    
})

Vue.use(Router)