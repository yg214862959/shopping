<template>
    <Row>
        <Col span="24">
            <h3>商品信息确认</h3>
            <Row>
                <Col span="24">
                    <h3>价格信息</h3>
                    <p>商品总价：HK<Icon type="social-usd"/>{{sumprice | moneyFormat}}</p>
                    <p>邮费：HK<Icon type="social-usd"/>{{10 | moneyFormat}}</p>
                    <p>订单总价：HK<Icon type="social-usd"/>{{10+sumprice | moneyFormat}}</p>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <h3>收货信息</h3>
                    <Row>
                        <Col span="24">
                            <p>收货地址：{{useraddress+userdata[userdata.length-1].moreaddress}}</p>
                            <p>收货人：{{userdata[userdata.length-1].name}}</p>
                            <p>邮编：{{userdata[userdata.length-1].code}}</p>
                            <p>电话：{{userdata[userdata.length-1].tel}}</p>
                        </Col>
                    </Row>
                    <i-address></i-address>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <h3>支付方式</h3>
                    <P><Icon type="chatbubbles"></Icon>微信支付</P>
                    <P><Icon type="social-yen"></Icon>支付宝支付</P>
                    <P><Icon type="card"></Icon>银行卡支付</P>
                </Col>
            </Row>
        </Col>
    </Row>
</template>

<script>
import iAddress from "../component/iAddress"

export default {
    name:'Settlement',
    components:{
        iAddress,
    },
    data(){
        return{
            userdata:this.$store.state.userdatas,
        }
    },
    created(){
        this.$store.commit('nofoot');
        sessionStorage.index=5;
        this.$store.commit('titlex')
    },
    beforeRouteLeave(to, from, next) {
        sessionStorage.index=2;
        this.$store.commit('titlex');
        this.$store.commit('yesfoot');
        next();
    },
    computed:{
        sumprice(){
            return this.$store.state.sum
        },
        useraddress(){
            return this.$store.state.address
        },
    },
}
</script>

<style>

</style>
