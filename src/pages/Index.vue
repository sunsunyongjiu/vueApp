<template>
  <div class="index-bg">
    <div class="index-head-nav">
      <span v-text="headTitle"></span>
    </div>
    <div class="index-router">
      <router-view >
      </router-view>
    </div>
    <div class="index-bottom-nav">
      <flexbox :gutter='gutter'>

        <flexbox-item v-for="(item,index) in bannerList" :key="index" class="index-font-color">
          <router-link :to="item.path" :class="item.class" @click.native="rmClass"> 
            <i class="iconfont" :class="item.icon" ></i>
            <div class="flex-demo" v-text="item.title"></div>
          </router-link>
         
        </flexbox-item>
        
      </flexbox>
    </div>
  </div>
</template>

<script>
import {state} from 'vuex';
import {Flexbox, FlexboxItem} from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      gutter:0,
      msg: '这是起始页',
      yes:false,
      headTitle:this.$route.name,
      bannerList:[
        {
          title:'首页',
          path:'/index/home',
          icon:'icon-shouye_fuzhi',
          class:''
        },
        {
          title:'业务',
          path:'/index/business',
          icon:'icon-yewu',
          class:''
        },
        {
          title:'信息',
          path:'/index/message',
          icon:'icon-xinxi',
          class:''
        },
        {
          title:'我的',
          path:'/index/info',
          icon:'icon-wode_fuzhi',
          class:''
        }
      ]
      
    }
  },
  components:{
    Flexbox, 
    FlexboxItem
  },
  mounted:function(){
    this.init()
  },
  methods:{
    // 路由跳转
    goNext(goPath){
      this.$router.push({path:goPath})
    },
    init:function(){
      if(this.$route.path=='/Index/home'){
        this.bannerList[0].class='router-link-active'
      }
      
    },
    rmClass:function(){
      this.headTitle=this.$route.name
      this.bannerList[0].class=''
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/hello.less';
@import '../assets/css/global.less';
.index-head-nav{
  position: absolute;
  top: 0;
  left: 0;
  height: 10vw;
  background: #eaeaea;
  line-height: 10vw;
  font-size: 16px;
  width: 100%
}
.index-bottom-nav{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border: none;
  height: 9vw;
  padding-top: 1.5vw;
  line-height: 4vw;
  background: #eaeaea;
  font-size: 12px;
  div{
    text-align:center;
  }
}
.index-router{
  height: 100%;
  width: 100%;
  padding-top: 12vw;
  padding-bottom: 10vw;
  box-sizing: border-box;
  overflow: hidden;
  overflow: scroll;
}
.index-bg{
  background: #fff;
  height: 100%
}

.index-font-color{
  a{
    color: #aaa;
    text-decoration: none
  }
  .router-link-active{
    color: #f5c027 !important
  }
  
}
</style>
