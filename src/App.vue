<template>
  <div id="app">
    <view-box ref="viewBox">
      <transition name="fade" mode="out-in" appear>
        <router-view transition="back" keep-alive class="router-back">
        </router-view>
      </transition>
    </view-box>
    
  </div>
</template>

<script>
import { ViewBox } from 'vux'
export default {
  name: 'app',
  components:{
    ViewBox
  }
}
</script>

<style lang="less">
@import 'assets/css/global.less';
@import 'assets/css/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.weui-tab__panel{
  padding-bottom: 0px !important
}

// css重铸
body,html{height: 100%;overflow: hidden;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}
table{border-collapse:collapse;border-spacing:0}
fieldset,img{border:0}
address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}
ol,ul{list-style:none}
caption,th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
q:before,q:after{content:''}
abbr,acronym{border:0;font-variant:normal}
sup{vertical-align:text-top}
sub{vertical-align:text-bottom}
input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}
input,textarea,select{*font-size:100%}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.router-back{
  height: 100%;
  width: 100%
}
</style>
