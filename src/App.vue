<template>
    <div id="app">
      <div class="bg"></div>
      <main>
        <transition name="bounce">
          <router-view/>
        </transition>
      </main>
      <footer-nav v-if="show"/>
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

<style>
html,body {
    height: 100%;
}
#app {
    height: 100%;
    font-size: 16px;
    overflow-x: hidden;
    overflow-y: auto;  
}
.bg{
    position:fixed;
    z-index: -100;
    background: rgb(241, 241, 241);
    height: 100vh;
    width: 100vh;
}
.active {
    color: red;
}
.ivu-modal-footer {
    display: none;
}
</style>
