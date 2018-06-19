// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from "./vuex/store"

import $ from 'jquery';
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(iView);


//价格过滤器
Vue.filter('moneyFormat', function(value) {  
  if(!value) return '0.00';  
  var intPart = Number(value).toFixed(0); //获取整数部分  
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断  
  var floatPart = ".00"; //预定义小数部分  
  var value2Array = value.toString().split(".");  
  //=2表示数据有小数位  
  if(value2Array.length == 2) {  
      floatPart = value2Array[1].toString(); //拿到小数部分  
      if(floatPart.length == 1) { //补0,实际上用不着  
          return intPartFormat + "." + floatPart + '0';  
      } else {  
          return intPartFormat + "." + floatPart;  
      }  
  } else {  
      return intPartFormat + floatPart;  
  }  
});  

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
  });

// router.beforeEach((to, from, next) => {
//     if(localStorage.login==1) 
//     {return next({path: "/Home"})}
//     else if(localStorage.login==0) {return next({path: "/Login"})};
//     next();
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
