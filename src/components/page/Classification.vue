<template>
    <Row>
        <Col>
        <Input v-model="searchVal" placeholder="搜索" style="width: 100%" />
            <ul>
                <router-link  
                v-for="(item,index) in searchData" 
                :to="{name: 'gamedetails',params:{oitem:item}}"
                tag="li"
                :key="(item,index).id">
                    <img :src="item.img" alt="">
                    <span>{{item.gamename}}</span>
                    <span>发行时间：{{item.time}}</span>
                    <span>售价：HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</span>
                </router-link>
            </ul>
        </Col>
    </Row>
</template>

<script>
import store from "../../vuex/store"
export default {
    name:"Classification",
    data(){
        return{
            searchVal:""
        }
    },
    created(){
        store.dispatch('allgame')
    },
    computed:{
        searchData(){
            return store.state.allgame.filter((val)=>{ 
               return new RegExp(this.searchVal,'i').test(val.gamename);
            }) 
        },
    },
    store
}
</script>

<style scoped>
</style>
