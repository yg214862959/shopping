<template>
    <div id="app">
            <div class="bg"></div>
            <header-nav id="header"></header-nav>
            <main>
                <transition name="bounce">
                    <router-view/>
                </transition>
            </main>
            <footer-nav id="footer" v-if="show"/>
            <back id="footer" v-if="!show"/>
    </div>

</template>

<script>
import store from "./vuex/store";
import Home from "./components/page/Home";
import HeaderNav from "./components/component/Header";
import FooterNav from "./components/component/FooterNav";
import Back from "./components/component/Back";

export default {
    name: "App",
    components: {
        Home,
        FooterNav,
        HeaderNav,
        Back
    },
    computed: {
        show() {
            return store.state.show;
        }
    },
    store
};
</script>

<style>
html,
body {
    height: 100%;
    font-family: Microsoft Yahei;
}
#app {
    height: 100%;
}
.bg {
    position: fixed;
    z-index: -100;
    background: rgb(241, 241, 241);
    height: 100vh;
    width: 100vh;
}

main {
    position: relative;
    top: 40px;
    height: calc(100% - 40px - 40px);
    overflow-x: hidden;
    overflow-y: auto;
}
#header {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    z-index: 100;
}
#footer {
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100%;
    height: 40px;
}
/* iview全局样式*/
.ivu-tooltip-inner{
    background:  rgba(45, 140, 240,0.9)
}
.ivu-modal-footer {
    display: none;
}
.ivu-tooltip-popper[x-placement^=top] .ivu-tooltip-arrow{
    border-top-color:  rgba(45, 140, 240,0.9)
}

</style>
