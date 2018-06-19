<template>
    <div class="footbox">       
        <div v-for="(nav,index) in getnav" 
        @click="routerlink($router.options.routes[index+1].name,index),titelx()" 
        :class="{active:num==index,noactive:num!=index}"
        :key="(nav,index).id">
        <Icon :type="nav"></Icon>
        </div>
        <Badge :count=len class="badge" v-if="shoplength!==0"></Badge>      
    </div>
</template>

<script>
export default {
    name:'FooterNav' ,
    data(){
    return{
            num:0,
            len:0
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
            this.$store.commit('titlex')
        }
    },
    computed:{
        getnav(){
            return this.$store.state.navItem
        },
        shoplength(){
            return this.len=this.$store.state.addshop.length
        }
    },
}
</script>

<style scoped>
.active {
    color:#2D8CF0;
    transform: scale(1.6,1.6);
    transition: all 0.1s linear;
}
.noactive{
    transition: all 0.1s linear;
}
.footbox{
    display: flex;
    justify-content: space-around;
    line-height: 39px;
    border-top:1px solid #DCDCDC; 
    background-color: rgb(238, 238, 238);
    font-size: 20px
}
.badge{
    position: absolute;
    top: 1px;
    right: 26%;
}
</style>
