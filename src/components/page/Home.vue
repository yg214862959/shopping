<template>
    <div>
        <Row>
            <Col span="24">
                <Carousel autoplay v-model="value2" :autoplay-speed=4000 loop>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="https://homer.dl.playstation.net/pr/bam-art/651/639/6eeb4d34-b90f-48b4-877b-9b7ae26cbfb4.jpg" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="https://homer.dl.playstation.net/pr/bam-art/650/035/e226e13a-fcd3-4b08-a394-d56a82048cea.jpg" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="https://homer.dl.playstation.net/pr/bam-art/645/875/89a02665-1b1e-4fc9-9f53-c700e85727f5.jpg" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="https://homer.dl.playstation.net/pr/bam-art/651/646/825c48c9-96c8-4959-814e-c8a4c9aa9b1b.jpg" alt="">
                        </div>
                    </CarouselItem>
                </Carousel>
                <Row class="scrollNews">
                    <Col span="24">
                        <ul id="play-ul" style="position: relative;bottom: 0px;">
                            <li>
                                <span>
                                    <Icon type="ios-bell-outline" style="size:24px;"/>
                                </span>
                                <span>
                                    PlayStation®4
                                </span>    
                            </li>
                            <li>                               
                                <span>
                                    <Icon type="ios-bell-outline" style="size:24px;"/>
                                </span>
                                <span>
                                    PlayStation®VR
                                </span>
                            </li>
                            <li>                                
                                <span>
                                    <Icon type="ios-bell-outline" style="size:24px;"/>
                                </span>
                                <span>
                                    PlayStation®Vita
                                </span>
                            </li>
                        </ul>
                    </Col>   
                </Row>
                <hr>
                <Row class="list-box">
                    <Col span="24">
                    <h3>最新游戏</h3>
                       <ul class="list-ul">
                           <li v-for="(item,index) in newgame" :key="(item,index).id"
                           @click="modal5 = true;toindex(item)"
                           >
                               <img :src=item.img alt="">
                               <p>{{item.gamename}}</p>
                               <p>HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</p>
                           </li>
                       </ul>
                    </Col>
                </Row>
                <hr>
                <Row class="list-box">
                    <Col span="24">
                    <h3>热门游戏</h3>
                       <ul class="list-ul">
                           <li v-for="(item,index) in hotgame" :key="(item,index).id"
                           @click="modal5 = true;toindex(item)"
                           >
                               <img :src=item.img alt="">
                               <p>{{item.gamename}}</p>
                               <p>HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</p>
                           </li>
                       </ul>
                    </Col>
                </Row>
                <hr>
                <Row class="list-box">
                    <Col span="24">
                    <h3>推荐游戏</h3>
                       <ul class="list-ul">
                           <li v-for="(item,index) in recommendgame" :key="(item,index).id"
                           @click="modal5 = true;toindex(item)"
                           >
                               <img :src=item.img alt="">
                               <p>{{item.gamename}}</p>
                               <p>HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</p>
                           </li>
                       </ul>
                    </Col>
                </Row>
                
            </Col>
        </Row>
        <Modal
        v-model="modal5"
        :title="xitem.gamename"
        width="300"
        class="model"
        >
            <Row>
                <Col span="12">
                    <img :src="xitem.img" alt="">
                </Col>
                <Col span="12" class="info-box">
                    <p>发行时间：{{xitem.time}}</p>
                    <p>售价：HK<Icon type="social-usd"/>{{xitem.price | moneyFormat}}</p>
                    <p>
                        <Button type="info" @click="shopadd(xitem)">加入购物车</Button>
                    </p>
                    <p>
                        <router-link 
                        :to="{name: 'shopping'}"
                        tag="span">
                            <Button type="success" @click="shopadd(xitem),resetfoot()">立即购买</Button>
                        </router-link>                       
                    </p>                   
                </Col>
            </Row>
            <Row class="illustrate">
                <Col span="24">
                    <router-link 
                    :to="{name: 'gamedetails',params:{oitem:xitem}}" 
                    tag="a" style="font-size:15px">
                    详情&nbsp<Icon type="ios-more"></Icon>
                    </router-link>
                    <p>{{xitem.illustrate}}</p>
                </Col>
            </Row>          
        </Modal>
    </div>
</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            value2: 0,
            modal5: false,
            xitem:[],          
        }
    },
    created(){        
        sessionStorage.index=0;
        this.$store.commit('titlex');
        this.$store.commit('yesfoot');
        this.$store.dispatch('newgame');
        this.$store.dispatch('hotgame');
        this.$store.dispatch('recommendgame');
    },
    mounted(){
           window.timer= setInterval(()=>{
           $("#play-ul").animate({
				"bottom": "40px"
			}, 1500, function() {
				$("#play-ul li:eq(0)").appendTo($("#play-ul"))
				$("#play-ul").css({
				    "bottom": '0px'
				})
            })}, 4000)
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(window.timer);
      next();
    },
    methods:{
        toindex(item){
            this.xitem=item;
        },
        shopadd(val){
            this.$store.commit('takeshop',val);
            this.$Message.success('成功添加到购物车');
        },
        resetfoot(){
            this.$store.commit('nofoot');
        },
    },
    computed:{
        newgame(){
            return this.$store.state.newgame
        },
        hotgame(){
            return this.$store.state.hotgame
        },
        recommendgame(){
            return this.$store.state.recommendgame
        }
    },
};
</script>

<style scoped>
.scrollNews{
    height: 40px;
    overflow:hidden;
    position: relative;
    top: -3px;
}
.demo-carousel img{
    height: 130px;
    width: auto
}
.scrollNews li{
    font-size: 18px;
    padding: 6px;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.scrollNews li :nth-child(1){
    color:orange;
}
hr{
    opacity: 0.3;
    width: 90%;
    margin: 0 auto;
}
.list-ul li{
    width: 50%;
    float: left;
    padding: 1.2rem 0.8rem;
    list-style: none;
    text-align: center;
    transition: all 0.3s linear;
}
.list-ul li:hover{
    box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
}
.list-ul li img{
    width: 100%;
}
.list-ul li p:nth-child(2){
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list-ul li p:nth-child(3){
    color: orangered;
}
.list-box{
    padding: 15px
}
.model img{
    width: 90%;
}
.model .info-box p{
    padding-bottom: 5px;
}
.illustrate{
    padding: 10px
}
</style>
