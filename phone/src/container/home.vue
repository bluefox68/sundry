<style>
  body{
    font-family: "PingFang SC","微软雅黑",Arial,"Hiragino Sans GB","Helvetica Neue",sans-serif;
    background-color:#e8e8e8; 
  }
  
  .h1,.h2{font-size:16px;}

  .h1{text-align:center;height: 53px;line-height: 53px;}
  .h2{height: 50px;line-height: 50px;}
  .h3{height:21px;line-height:21px;padding-top:18px;padding-bottom: 14px;}

  .item{font-size:14px;}
  .cont{color:rgba(102,102,102,100);}

  .h2,.tourist,.rest{background-color:#fff;padding-right:15px;}
  .h2{padding-left:15px;font-size:16px;}

  .h2,.h3{color:#333333;}

  .cont{padding-bottom:20px;line-height: 21px;}
  .cont img{margin-top:10px;margin-bottom:10px;display: block;width: 100%}
  .boundary{width:1px;background-color: transparent;margin-left:30px;margin-right:30px;}
  .boundary-border{width:1px;background-color: #ccc;margin-left:30px;margin-right:30px;}
  .boundary-ht{height: 10px;}
  .boundary-14{height: 14px;}
  .boundary-18{height: 17px;}
  .boundary-21{height: 21px;}
  .boundary-100{height:100%;}
  .float-left{float:left;}
  .clearfix{overflow: hidden;}

  .tourist,.rest{display: -webkit-flex;display: flex;}
  .menu{/*width:30px;*/}
  
  .double-circle{margin-left: 19px;}
  .double-circle-boundary{}
  .circle-wrap{width: 20px;height: 20px;border-radius: 10px;border-width:1px;border-style:solid;}
  .circle{width: 14px;height: 14px;border-radius:7px;margin:3px;}

  .border-color-orange{border-color:#E38E02;}
  .background-color-orange{background-color:#E38E02;}

  .border-color-green{border-color:#66AF17;}
  .background-color-green{background-color:#66AF17;}

  .message{text-align: center;font-size:14px;color:#999;padding-top:50px;}
</style>
<template>
  <div class="container">
    <h1 class="h1">{{ headTitle }}</h1>
    <div v-if="list && list.length && list.length > 0">
      <div class="item" v-for="item,i in list">
        <h2 class="h2">{{ item.date }}</h2>
        <div class="boundary-border boundary-ht"></div>
        <div class="tourist clearfix">
          <div class="menu">
            <div class="double-circle-boundary">
              <div class="boundary-border boundary-18"></div>
              <div class="double-circle">
                <div class="circle-wrap border-color-green">
                  <div class="circle background-color-green"></div>
                </div>
              </div>
              <div class="boundary-border boundary-14"></div>
            </div>
            <div class="boundary-border boundary-100"></div>
          </div>
          <div class="main" v-html="item.tourContent"></div>
        </div>
        <div class="boundary boundary-ht"></div>
        <div class="rest clearfix">
          <div class="menu">
            <div class="double-circle-boundary">
              <div class="boundary-border boundary-18"></div>
              <div class="double-circle">
                <div class="circle-wrap border-color-orange">
                  <div class="circle background-color-orange"></div>
                </div>
              </div>
              <div class="boundary-border boundary-14"></div>
            </div>
            <div class="boundary-border boundary-100"></div>
          </div>
          <div class="main" v-html="item.liveContent"></div>
        </div>
        <div v-if="i==(list.length-1)" class="boundary boundary-ht"></div>
        <div v-else class="boundary-border boundary-ht"></div>
      </div>
    </div>
    <div v-else class="message">
      {{ errorMsg }}
    </div>
  </div>
</template>
<script>
  import '../common/reset.css';
  import { QueryString } from '@tbj/utils';
  import axios from 'axios';

  export default {
    data(){
      return {
        headTitle : "",
        list : null,
        errorMsg : "请求失败，请稍后"
      }
    },
    mounted(){
      let _self = this;
      this.getList();
    },
    methods:{
      getList(){
        const _self = this;
        let string = window.location.search;

        if(string){
          string = string.substr(1);
        }

        let favour = QueryString.get(string,"favour");
        let playTime = QueryString.get(string,"playTime");

        let params = {
          playTime : playTime,
          favour : favour
        }

        let url = window.Config.urlPrefix + "mobile/api/customRoute/query";

        axios.get(url,{
          params : params
        }).then((response) =>{
          let result = response.data;

          if(result.code =='0'){
            _self.headTitle = result.data.headTitle;
            _self.list = result.data.customRouteDaysVOList;
          }else{
            _self.errorMsg = result.errorMsg;
          }
        },(response) => {
          this.errorMsg = response.statusText;
        });
      }
    }
  }
</script>