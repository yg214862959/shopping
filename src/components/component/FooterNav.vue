<template>
    <div class="footbox">       
        <div v-for="(nav,index) in getnav" 
        @click="routerlink($router.options.routes[index+1].name,index),titelx()" 
        :class="{active:num==index}"
        :key="(nav,index).id">
        <Icon :type="nav"></Icon>
        </div>      
    </div>
</template>

<script>
import store from "../../vuex/store"
export default {
    name:'FooterNav' ,
    data(){
    return{
            num:0
    }
  },
  created (){
      if(sessionStorage.index)
      this.num=sessionStorage.index;
  },
    methods:{
        routerlink(navTitle,index){
            sessionStorage.index=index;
            this.num=index;
            this.$router.push({name:navTitle,    
            });
        },
        titelx(){
            store.commit('titlex')
        }
    },
    computed:{
        getnav(){
            return store.state.navItem
        }
    },
    store   
}
</script>

<style scoped>
.active {
    color:rgb(39, 109, 223);
    /* color: rgb(255, 115, 0); */
    transform: scale(1.5,1.5)
}
.footbox{
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    border-top:1px solid #DCDCDC; 
    background-color: rgb(238, 238, 238);
    font-size: 20px
}
</style>
