<template>
    <div id="app">
      <div class="bg"></div>
      <main>
        <transition name="bounce">
          <router-view/>
        </transition>
      </main>
      <footer-nav id="footer" v-if="show"/>
    </div>
</template>

<script>
import store from "./vuex/store"
import Home from "./components/page/Home";
import FooterNav from "./components/component/FooterNav";

export default {
    name: "App",
    components: {
        Home,
        FooterNav
    },
    computed:{
      show(){
        return store.state.show
      }
    },
    store
};
</script>

<style long="sass">
html,body {
    height: 100%;
}
#app {
    height: 100%;
    font-size: 16px;  
}
.bg{
    position:fixed;
    z-index: -100;
    background: rgb(241, 241, 241);
    height: 100vh;
    width: 100vh;
}
.ivu-modal-footer {
    display: none;
}
main{
    height: calc(100% - 40px);
    overflow-x: hidden;
    overflow-y: auto;
}
#footer{
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100%;
    height: 40px;
}
</style>
