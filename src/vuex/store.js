import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

const state={
    hotgame:[],
    newgame:[],
    recommendgame:[],
    allgame:[],
    navItem:[
        "ios-home-outline",
        "ios-search-strong",
        "ios-cart-outline",
        "ios-person-outline"
    ],
    titelList:[
        "首页",
        "搜索",
        "购物车",
        "个人中心",
        "详情"
    ],
    titel:"",
    show:true,
    shopdata:[],
    addshop:[]
}
const mutations={
    nofoot(state){
        state.show=false;
    },
    yesfoot(state){
        state.show=true;
    },
    titlex(state){     
        state.titel=state.titelList[sessionStorage.index]
    },
    takeshop(state,data){
        //先加入一个数组
        state.shopdata.push(data);
        //每个对象中加个新元素
        state.shopdata.map(((item, index)=> {
            state.addshop.push(Object.assign({},item,{check:false}))               
        }));
        //要清空一下
        state.shopdata=[];
        //去重
        let hash = {}; 
        state.addshop = state.addshop.reduce((item, next)=>{ 
        hash[next.gamename] ? '' : hash[next.gamename] = true && item.push(next); 
        return item 
        }, [])
    }
}
const actions={
    newgame(context){
        return axios.get("http://localhost:8080/static/json/NewGame.json").then((resp)=>{
            context.state.newgame=resp.data;
        })
    },
    hotgame(context){
        return axios.get("http://localhost:8080/static/json/HotGame.json").then((resp)=>{
            context.state.hotgame=resp.data;
        })
    },
    recommendgame(context){
        return axios.get("http://localhost:8080/static/json/RecommendGame.json").then((resp)=>{
            context.state.recommendgame=resp.data;
        })
    },
    allgame(context){
        return axios.get("http://localhost:8080/static/json/GameData.json").then((resp)=>{
            context.state.allgame=resp.data;
        })
    }
}
export default new Vuex.Store({
    state,mutations,actions
})