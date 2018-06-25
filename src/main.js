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

//登陆状态和权限判断
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;//网页标签更改，需要mate值
    const role = localStorage.ms_username;
    const roleones = sessionStorage.ms_username;
    if (to.matched.some(record => record.meta.requireAuth)){  //判断点击的该路由是否需要有权限进入，需要mate值
        if(!role){   //判断是有自动登陆
            if(!roleones){  //判断是否已经登陆
                next('/login');  //条件都不符合跳转登陆界面
            }else{
                next();  //进入组件
            }       
        }else{
            next();     //进入组件 
        }
    }else {
        next();        //进入组件
    }    
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
