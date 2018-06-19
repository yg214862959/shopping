<template>
    <Row id="shopbox">
        <Col span="24">
            <Row>
                <Col span="24">
                    <p v-show="getshop.length==0" class="nothing">
                        <Icon type="heart-broken"></Icon>&nbsp你的购物车是空的......
                    </p>
                </Col>
            </Row> 
            <ul>
                <li v-for="(item,index) in getshop " class="shoplist">
                    <Row>
                        <Col span="1" class="checkbox">
                            <Checkbox v-model="item.check" @click.native="checkone(index)" size="large"></Checkbox>
                        </Col>
                        <Col span="9">
                            <img :src="item.img" alt="">
                        </Col>
                        <Col span="11" class="updelbox">
                            <p>{{item.gamename}}</p>
                            <p>售价：HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</p>
                            <p>                  
                                <Button size="small" type="primary" icon="plus-round" @click="upnum(index)" class="updelbtn"></Button>
                                    <Input v-model="item.num" id="shopnumbox" size="small"/>
                                <Button  size="small" type="primary" icon="minus-round" @click="downnum(index)" class="updelbtn"></Button>
                            </p>                                                  
                        </Col>
                        <Col span="3" class="delbox">
                            <Button type="error" @click="deluser(item),deluesrAll(),error ()" size="small"><Icon type="close-round"/></Button>
                        </Col>
                    </Row> 
                    <hr>                   
                </li>
            </ul>
            <router-link 
            :to="{name: 'settlement'}" 
            tag="p" class="buybtn">
                <Button type="success" long v-show="getshop.length!==0" @click="sumprice()">前往支付</Button>
            </router-link>
            
        </Col>
    </Row>
</template>

<script>
export default {
    name:'Shopping',
    data(){
        return{
        }
    },
    created(){
        sessionStorage.index=2;
        this.$store.commit('titlex')
        this.$store.commit('yesfoot')
    },
    computed:{
        getshop(){
            return this.$store.state.addshop
        },
    },
    methods:{
        //数量+1
        upnum(e){
            this.$store.commit("addshopnum",e)
        },
        //数量-1
        downnum(e){
            this.$store.commit("delshopnum",e)
        },
        //单个删除
        deluser(val){
            this.$store.commit("deluser",val)
        },
        //勾选事件
        checkone(val){
            this.$store.commit("checkone",val)
        },
        //批量删除
        deluesrAll(){
            this.$store.commit("deluesrAll")
        },
        error () {
            this.$Message.error('成功删除');
        },
        sumprice(){
            this.$store.commit("sumprice");
        }
    },
}
</script>

<style lang="scss" scoped>
#shopbox {
    padding: 12px;
    .nothing{
        text-align:center;
        color: rgb(88, 85, 85);
        font-size: 1rem;
        padding: 1rem;
    }
    .shoplist{
        list-style: none;
            img{
                width: 100%;
                padding: 12px
            }
            .checkbox{
                margin: 15.5% 0;
            }
            .delbox{
                margin: 15% 0;
            }
            .updelbox{
                padding: 12px;
                p{
                    line-height: 27px;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

            }
    }
    

        #shopnumbox{
            .ivu-input{
                text-align:center
            }
            width: 40px;
             
        }
        hr{
            opacity: 0.3;
        }
        .buybtn{
            margin-top: 6px
        }

}
</style>
