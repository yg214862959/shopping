<template>
    <Row class="Classification">
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
                        <p><Icon type="ios-game-controller-b"></Icon>{{item.gamename}}</p>
                        <p><Icon type="clock"></Icon>发行时间：{{item.time}}</p>
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
        sessionStorage.index=1;
        this.$store.commit('titlex');
        this.$store.commit('yesfoot');
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
.Classification{
    padding: 12px
}
#router-link{
    /* margin: 10px; */
    padding: 12px;
    height: 110px;
    border-bottom: 1px solid #DCDCDC;
    list-style: none;
}
#imgs{
   height: 100%;
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
