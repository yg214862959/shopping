<template>
    <Row class="heardbox">
        <Col span="24">
            <p>{{gettitel}}</p>
        </Col>
    </Row>
</template>

<script>
import store from "../../vuex/store"
export default {
    name:'HeaderNav',
    created(){
        store.commit('titlex')
    },
    computed:{
        gettitel(){
            return store.state.titel
        }
    },
    store
}
</script>

<style scoped>
.heardbox{
    background-color:#2D8CF0;
    text-align: center;
    color: #fff;
    line-height: 40px;
    font-size: 16px;
}
</style>

