<template>
    <div class="backbox">       
        <router-link :to="{name: backpage}" tag="div" class="back"><Icon type="playstation"></Icon></router-link>
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
    computed:{
        backpage(){
            if(sessionStorage.index==4){
                return this.backrouter="home"
            }else if(sessionStorage.index==5){
                return this.backrouter="shopping"
            }
        }
    }
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
