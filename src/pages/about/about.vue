<template>
  <div class="about-detail">
    <head-nav title="关于我们"></head-nav>
  	<div :class="{animate:move}">
      <div class="about-detail-version">
        最新版本号：v<span v-text="latestVersion"></span>
      </div>
      <div class="about-detail-version">
      	当前版本号：v<span v-text="version"></span>
      </div>
      <div>
      	这是一款超级酷炫的平台app，如果你喜欢我们，请联系我们。
      </div>
    </div>
  </div>
</template>

<script>
import headNav from '../../components/headNav'
export default {
  name: 'hello',
  data () {
    return {
      version:localStorage.getItem("version"),
      move:true,
      latestVersion:''
    }
  },
  components:{
    headNav
  },
  created:function(){
    this.init()
  },
  methods:{
    init:function(){
      this.$http.get(this.$Apis('lastest')).then((response) => {
         this.latestVersion=response.data.data.versionStr
      }, (response) => {
          // error callback
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import '../../assets/css/global.less';
@import '../../assets/css/animation.less';
.about-detail{
	height: 100%;
	width: 100%;
	background: url(../../assets/img/login-bg.jpg) no-repeat center;
  box-sizing: border-box;
  padding-top: 20vh;
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  padding-left: 20vw;
 
  position: relative;

}
.animate{
  position: absolute;
  animation-fill-mode:forwards;
  padding-right: 20vw;
  -webkit-animation-fill-mode:forwards;
  .animate(myfirst 3s)

}

</style>