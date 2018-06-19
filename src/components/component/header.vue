<template>
    <Row class="heardbox">
        <Col span="24">
            <p>{{gettitel}}</p>
        </Col>
    </Row>
</template>

<script>
export default {
    name:'HeaderNav',
    created(){
        this.$store.commit('titlex')
    },
    computed:{
        gettitel(){
            return this.$store.state.titel
        }
    },
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

