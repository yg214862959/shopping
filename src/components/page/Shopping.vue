<template>
    <Row id="shopbox">
        <Col span="24">
            <p v-show="getshop.length==0">空的</p>
            <ul>
                <li v-for="(item,index) in getshop ">
                    <Row>
                        <Col span="1">
                            <Checkbox v-model="item.check" @click.native="checkone(index)"></Checkbox>
                        </Col>
                        <Col span="9">
                            <img :src="item.img" alt="">
                        </Col>
                        <Col span="11">
                            <p>{{item.gamename}}</p>
                            <p>售价：HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</p>   
                            <Button type="primary" icon="plus-round" @click="upnum(index)"></Button>
                            <Input v-model="item.num" id="shopnumbox"/>
                            <Button type="primary" icon="minus-round" @click="downnum(index)"></Button>                      
                        </Col>
                        <Col span="3">
                            <Button type="error" @click="deluser(item),deluesrAll(),error ()"><Icon type="close-round"/></Button>
                        </Col>
                    </Row>                    
                </li>
            </ul>
            <router-link 
            :to="{name: 'settlement'}" 
            tag="p">
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
    img{
        width: 90%
    }

        #shopnumbox{
            .ivu-input{
                text-align:center
            }
            width: 40px;
             
        }

}
</style>
