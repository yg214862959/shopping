<template>
    <Row class="Settlement">
        <Col span="24">
            <h2>商品信息确认</h2>
            <hr>
            <Row class="setbox">
                <Col span="24">
                    <h3>价格信息</h3>
                    <p>商品总价：HK<Icon type="social-usd"/>{{sumprice | moneyFormat}}</p>
                    <p>邮费：HK<Icon type="social-usd"/>{{10 | moneyFormat}}</p>
                    <p id="sumprice">订单总价：HK<Icon type="social-usd"/>{{10+sumprice | moneyFormat}}</p>
                </Col>
            </Row>
            <hr>
            <Row class="setbox">
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
                    <i-address class="adresbox"></i-address>
                </Col>
            </Row>
            <hr>
            <Row class="setbox">
                <Col span="24">
                    <h3>支付方式</h3>
                    <P class="buyskill"><Icon type="chatbubbles"></Icon>&nbsp微信支付</P>
                    <P class="buyskill"><Icon type="social-yen"></Icon>&nbsp支付宝支付</P>
                    <P class="buyskill"><Icon type="card"></Icon>&nbsp银行卡支付</P>
                </Col>
            </Row>
            <div id="tooltipbox">
                <Tooltip content="返回" placement="top-start" :always="true" :disabled="disabled" @click.native="disabled = true"/>
            </div>
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
            disabled:false
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

<style lang="scss" scoped>
.Settlement{
    padding: 12px;
    h3{
        padding: 6px 0;
    }
    hr{
        opacity: 0.3;
    }
    .setbox{
        padding: 6px 0;
        #sumprice{
            font-size: 1rem;
            color: rgb(236, 6, 6);
            font-weight: bold
        }
        .buyskill{
            padding: 6px;
            font-size: 0.8rem;
            border-bottom: 0.8px solid rgba(131, 131, 131,0.3);
        }
        .adresbox{
            margin-top: 6px;
        }
    }
    #tooltipbox{
        position: fixed;
        bottom: 40px;
    }
}
</style>

