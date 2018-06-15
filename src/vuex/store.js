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
    addshop:[],
    checkdel:[]
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
            state.addshop.push(Object.assign({},item,{check:false,num:1}))               
        }));
        //要清空一下
        state.shopdata=[];
        //去重
        let hash = {}; 
        state.addshop = state.addshop.reduce((item, next)=>{ 
        hash[next.gamename] ? '' : hash[next.gamename] = true && item.push(next); 
        return item 
        }, [])
    },
    deluser(state,k) {
        state.addshop.splice(state.addshop.indexOf(k), 1);
    },
    checkone(state,k){
        if (!state.addshop[k].check) {
            state.addshop[k].check=true
        }else{
            state.addshop[k].check=false
        }
    },
    deluesrAll(state) {
        let arr = [];
            for (let p in state.addshop) {
                if (state.addshop[p].check) {
                    arr.push(state.addshop[p]);
                }
            }
            for (let x = 0; x < arr.length; x++) {
                state.addshop.splice(state.addshop.indexOf(arr[x]), 1);
            }
    },
    addshopnum(state,e){
        state.addshop[e].num++
    },
    delshopnum(state,e){
        if(state.addshop[e].num>1){
            state.addshop[e].num--
        }else{
            state.addshop[e].num=1
        }      
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