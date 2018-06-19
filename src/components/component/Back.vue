<template>
    <div class="backbox">       
            <div class="back" @click="backpage()">
                <Icon type="playstation"></Icon>
            </div>           
    </div>
</template>

<script>
export default {
    name:'Back',
    data(){
        return{
            backrouter:""
        }
    },
    methods:{
        backpage(){
            if(sessionStorage.index==6){
                return false
            }else{
                this.$router.go(-1);
            }               
        },
    },
}
</script>

<style>
.backbox{
    line-height: 40px;
    border-top:1px solid #DCDCDC; 
    background-color: rgb(238, 238, 238);
    font-size: 35px;
    text-align: center;
    color: #2D8CF0;
}
.back{
    height: 100%;
    width: 100%;
}
</style>
