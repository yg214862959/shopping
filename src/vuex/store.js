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
    show:true
}
const mutations={
    nofoot(state){
        state.show=false;
    },
    yesfoot(state){
        state.show=true;
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