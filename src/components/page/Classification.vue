<template>
    <Row>
        <Col>
        <Input id="search" v-model="searchVal" placeholder="搜索"/>
            <ul>
                <router-link  id="router-link"
                v-for="(item,index) in searchData" 
                :to="{name: 'gamedetails',params:{oitem:item}}"
                tag="li"
                :key="(item,index).id">
                    <img id="imgs" :src="item.img" alt="">
                    <div id="search-right">
                        <span>{{item.gamename}}</span>
                        <span>发行时间：{{item.time}}</span>
                        <span>售价：HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</span>
                    </div>
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
#search{
    /* position: fixed; */
    /* top: 36px; */
}
#router-link{
    margin: 10px;
    height: 110px;
    border-bottom: 1px solid #DCDCDC;
}
#imgs{
   width: 100px;
   height: 100px;
   float: left;
}
span{
    display:inline-block;
    margin-bottom: 5px;
}
#search-right span:nth-child(3){
     color: orangered;
}
#search-right{
    width: 65%;
    float: right;
}
</style>
