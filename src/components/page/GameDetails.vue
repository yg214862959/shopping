<template>
    <div>
        <Row class="data-box">
            <Col span="24">            
                <Row class="text-box">
                    <Col span="12">
                        <img :src="gamedata.img" alt="">
                    </Col>
                    <Col span="12" class="info-box">
                        <p>发行时间：{{gamedata.time}}</p>
                        <p>售价：HK<Icon type="social-usd"/>{{gamedata.price | moneyFormat}}</p>
                        <p>
                            <Button type="info" @click="shopadd(gamedata),success()">加入购物车</Button>
                        </p>
                        <p>
                            <Button type="success">立即购买</Button>
                        </p>                   
                    </Col>
                </Row>
                <Row>
                    <Col span="24">         
                        <div class="tab-box">
                            <img :key="item.id" v-for='(item,index) in gamedata.imgtab' v-show="index == num" :src="item.img"/>     
                        </div>
                        <img :key='item.id' v-for="(item,index) in gamedata.imgtab" :class="{active:index == num}" @click="tab(index)" :src="item.img" class="img-nav">
                    </Col>
                </Row>
                <Row class="illustrate-box">
                    <Col span="24"> 
                        <h3>说明：</h3>        
                        <p>{{gamedata.illustrate}}</p>
                    </Col>
                </Row>
            </Col>
        </Row>   
    </div>   
</template>

<script>
import store from "../../vuex/store"
export default {
    name:"GameDetails",
    data(){
        return{
            gamedata:this.$route.params.oitem,
            num:0
        }
    },
    created(){
        store.commit('nofoot');
        sessionStorage.index=4;
        store.commit('titlex')
    },
    beforeRouteLeave(to, from, next) {
        sessionStorage.index=0;
        store.commit('titlex');
        store.commit('yesfoot');
        next();
    },
    methods: {
        tab(index) {
            this.num = index;   
        },
        shopadd(val){
            store.commit('takeshop',val)
        },
        success () {
            this.$Message.success('成功添加到购物车');
        },
    },
    store
}
</script>

<style scoped>
.info-box p{
    margin-bottom:5px; 
}
.data-box{
    padding: 10px;
}
.text-box img{
    width: 90%;
}
.img-nav{
    width: 30%;
    padding-right: 7px;
}
.tab-box img{
    width: 100%
}
.illustrate-box{
    padding: 10px
}
</style>
