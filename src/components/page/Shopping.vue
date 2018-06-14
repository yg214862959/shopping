<template>
    <Row id="shopbox">
        <Col span="24">
            <p v-show="getshop.length==0">空的</p>
            <ul>
                <li v-for="(item,index) in getshop ">
                    <Row>
                        <Col span="1">
                            <Checkbox :v-model="item.check"></Checkbox>
                        </Col>
                        <Col span="9">
                            <img :src="item.img" alt="">
                        </Col>
                        <Col span="11">
                            <p>{{item.gamename}}</p>
                            <p>售价：HK<Icon type="social-usd"/>{{item.price | moneyFormat}}</p>                        
                        </Col>
                        <Col span="3">
                            <Button type="error"><Icon type="close-round"/></Button>
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
            shop:[]
        }
    },
    computed:{
        getshop(){
            return store.state.addshop
        },
    },
    store
}
</script>

<style lang="scss" scoped>
#shopbox {
    img{
        width: 90%
    }
}
</style>
