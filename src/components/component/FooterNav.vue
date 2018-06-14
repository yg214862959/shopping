<template>
    <ul>
        <li v-for="(nav,index) in navItem"
        @click="routerlink($router.options.routes[index+1].name,index)"
        :class="{active:num==index}"
        :key="(nav,index).id"
        >{{nav}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'FooterNav' ,
    data(){
    return{
      navItem:[
                "首页",
                "分类",
                "购物车",
                "个人中心"
            ],
            num:0
    }
  },
  mounted(){
        this.routerlink()
    },
    methods:{
        routerlink(navTitle,index){
            this.num=index;
            this.$router.push({name:navTitle,    
            });
        }
    }   
}
</script>

<style scoped>

</style>
