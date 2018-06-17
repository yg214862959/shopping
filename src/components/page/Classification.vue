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
                        <p>{{item.gamename}}</p>
                        <p>发行时间：{{item.time}}</p>
                        <p>售价：HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</p>
                    </div>
                </router-link>
            </ul>
        </Col>
    </Row>
</template>

<script>
export default {
    name:"Classification",
    data(){
        return{
            searchVal:""
        }
    },
    created(){
        this.$store.dispatch('allgame')
    },
    computed:{
        searchData(){
            return this.$store.state.allgame.filter((val)=>{ 
               return new RegExp(this.searchVal,'i').test(val.gamename);
            }) 
        },
    },
}
</script>

<style scoped>
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
p{
    margin-bottom: 5px;
}
#search-right p:nth-child(3){
     color: orangered;
}
#search-right{
    width: 65%;
    float: right;
}
</style>
