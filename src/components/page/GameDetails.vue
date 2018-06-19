<template>
        <Row class="data-box">
            <Col span="24">
                <Row>
                    <Col span="24">
                        <p>{{gamedata.gamename}}</p>
                    </Col>    
                </Row>
                <hr>            
                <Row class="text-box">
                    <Col span="12">
                        <img :src="gamedata.img" alt="">
                    </Col>
                    <Col span="12" class="info-box">
                        <p>发行时间：{{gamedata.time}}</p>
                        <p>售价：HK<Icon type="social-usd"/>{{gamedata.price | moneyFormat}}</p>
                        <p>
                            <Button type="info" @click="shopadd(gamedata)"><Icon type="ios-cart"></Icon>&nbsp加入购物车</Button>
                        </p>
                        <p>
                            <router-link 
                            :to="{name: 'shopping'}"
                            tag="span">
                                <Button type="success" @click="shopadd(gamedata)"><Icon type="ios-cart-outline"></Icon>&nbsp立即购买</Button>
                            </router-link>                                                   
                        </p>                   
                    </Col>
                </Row>
                <hr>
                <Row>
                    <Col span="24">         
                        <div class="tab-box">
                            <img :key="item.id" v-for='(item,index) in gamedata.imgtab' v-show="index == num" :src="item.img"/>     
                        </div>
                        <img :key='item.id' v-for="(item,index) in gamedata.imgtab" :class="{active:index == num}" @click="tab(index)" :src="item.img" class="img-nav">
                    </Col>
                </Row>
                <hr>
                <Row class="illustrate-box">
                    <Col span="24"> 
                        <h3>说明：</h3>        
                        <p>{{gamedata.illustrate}}</p>
                    </Col>
                </Row>
                <div id="tooltipbox">
                    <Tooltip content="返回" placement="top-start" :always="true" :disabled="disabled" @click.native="disabled = true"/>
                </div>
            </Col>
        </Row>     
</template>

<script>
export default {
    name:"GameDetails",
    data(){
        return{
            gamedata:this.$route.params.oitem,
            num:0,      
            disabled:false
        }
    },
    created(){
        this.$store.commit('nofoot');
        sessionStorage.index=4;
        this.$store.commit('titlex')
    },
    methods: {
        tab(index) {
            this.num = index;   
        },
        shopadd(val){
            this.$store.commit('takeshop',val)
            this.$Message.success('成功添加到购物车');
        },
    },
}
</script>

<style scoped>
.info-box p{
    margin-bottom:8px; 
}
.data-box{
    padding: 12px;
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
hr{
    width: 100%;
    margin: 6px auto;
    opacity: 0.3;
}
#tooltipbox{
    position: fixed;
    bottom: 40px;
}
</style>
