import Vue from 'vue';
import home from './container/home.vue';
import test from './mock/test';

if(process.env.NODE_ENV=="development"){
  test.init();
}

const app = new Vue({
  el : "#root",
  components : {
    "home" : home
  }
})