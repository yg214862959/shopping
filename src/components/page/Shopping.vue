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
        </Col>
    </Row>
</template>

<script>
import store from "../../vuex/store"
export default {
    name:'Shopping',
    data(){
        return{
        }
    },
    computed:{
        getshop(){
            return store.state.addshop
        },
    },
    methods:{
        //数量+1
        upnum(e){
            store.commit("addshopnum",e)
        },
        //数量-1
        downnum(e){
            store.commit("delshopnum",e)
        },
        //单个删除
        deluser(val){
            store.commit("deluser",val)
        },
        //勾选事件
        checkone(val){
            store.commit("checkone",val)
        },
        //批量删除
        deluesrAll(){
            store.commit("deluesrAll")
        },
        error () {
            this.$Message.error('成功删除');
        }
    },
    store
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
