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
            {path:"/",redirect:"/Home"},
            {
                path:'/Home',
                name:'home',
                component:Home,
                meta:{
                        title: 'PS/首页',
                        
                    },
            },
            {
                path:'/Classification',
                name:'classification',
                component:Classification,
                meta:{
                        title: 'PS/搜索',
                        
                    },
            },
            {
                path:'/Shopping',
                name:'shopping',
                component:Shopping,
                meta:{
                        title: 'PS/购物车',
                           
                    },
            },
            {
                path:'/Person',
                name:'person',
                component:Person,
                meta:{
                        title: 'PS/个人中心',
                        requireAuth: true
                    },
            },
            {
                path:'/GameDetails',
                name:'gamedetails',
                component:GameDetails,
                meta:{
                        title: 'PS/详情',
                        
                    },
            },
            {
                path:'/Settlement',
                name:'settlement',
                component:Settlement,
                meta:{
                        title: 'PS/结算',
                        requireAuth: true
                    },
            },
            {
                path:'/Login',
                name:'login',
                component:Login,
                meta:{
                        title: 'PS/登陆'
                    },
            }

    ],
    linkActiveClass: 'active',
    
})

Vue.use(Router)