<template>
    <Row id="personbox">
        <Col span="24">
            <Row class="headerbox1">
                <Col span="24" class="headerbox2">
                    <img src="http://img4.duitang.com/uploads/blog/201408/23/20140823235955_ymUkf.thumb.700_0.jpeg" alt="">
                    <p>{{getusername.name}}</p>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <Row class="setbox">
                        <Col span="24">
                            <user-data></user-data>
                            <hr>
                            <i-address></i-address>
                        </Col>
                    </Row>
                    
                
            
                    <Row class="setbox">
                        <Col span="24">
                            <p>
                                <span>我的订单</span>
                                <Icon type="chevron-right" class="iconright"></Icon>
                            </p>
                            <hr>
                            <p>
                                <span>我的评价</span>
                                <Icon type="chevron-right" class="iconright"></Icon>
                            </p>
                        </Col>
                    </Row>
                    <Row class="setbox">
                        <Col span="24">
                            <p>
                                <span>商品收藏</span>
                                <Icon type="chevron-right" class="iconright"></Icon>
                            </p>
                            <hr>
                            <p>
                                <span>店铺收藏</span>
                                <Icon type="chevron-right" class="iconright"></Icon>
                            </p>
                            <hr>
                            <p>
                                <span>浏览记录</span>
                                <Icon type="chevron-right" class="iconright"></Icon>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div style="padding:12px">
                <router-link :to="{name: 'login'}" tag="div">
                    <Button type="error" long @click="error ()">退出登陆</Button>
                </router-link>                
            </div>
            
        </Col>
    </Row>
</template>

<script>
import UserData from "../component/UserData"
import iAddress from "../component/iAddress"
export default {
    name: "Person",
    components:{
        UserData,iAddress
    },
    created(){
        sessionStorage.index=3;
        this.$store.commit('titlex');
        this.$store.commit('yesfoot');
    },
    methods:{
        error () {
            this.$Message.error('退出登陆');
            localStorage.login=0;
        },
    },
    computed:{
        getusername(){
            return this.$store.state.user
        }
    }
    
};
</script>

<style lang="scss" scoped>
#personbox{
    hr{
        
        opacity: 0.3;
        margin: 6px auto;
    }
    .headerbox1{
        height: 150px;
        background: url("http://img4.duitang.com/uploads/blog/201408/23/20140823235955_ymUkf.thumb.700_0.jpeg") no-repeat;
        background-size:cover;
    }
    .headerbox2{
        height: 100%;
        background: rgba(244,244,244,0.7);
        text-align: center;
        img{
            margin-top: 12px;
            height: 100px;
            border-radius: 50px;     
        }
    }
    .setbox{
        padding: 12px;
        border-bottom: 1px solid rgba(187, 186, 186,0.6);
        border-top: 1px solid rgba(187, 186, 186,0.6);
        margin-top: 18px;
        background: #fff;
        .iconright{
            float: right;line-height: 18px
        }
        
    }
}
</style>


