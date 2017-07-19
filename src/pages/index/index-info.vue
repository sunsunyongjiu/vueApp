<template>
  <div>
    <img src="../../assets/img/logo-oms.png" class="info-logo">
  	<div class="index-info-header-textBody">
      <x-button @click.native="goNext('/password')">修改密码</x-button>
      <x-button @click.native="goNext('/myInfo')">我的信息</x-button>
      <x-button @click.native="goNext('/about')">关于</x-button>
      <x-button @click.native="goNext('/feedback')">意见反馈</x-button> 
      <x-button @click.native="goNext('/login')">退出登陆</x-button>
    </div>
  	
  </div>
</template>

<script>
import { XButton } from 'vux'

export default {

  name: 'hello',
  data () {
    return {
      
    }
  },
  components:{
    XButton,
  },
  mounted:function(){
   
  },
  methods:{
   	goNext:function(url){
      if(url=="/login"){
        this.$http.get(this.$Apis('logout')).then((response) => {
           console.log('登出成功')
        }, (response) => {
            // error callback
        });
      }
   		this.$router.push({path:url})
   	}
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

.index-info-header-textBody{
  overflow: hidden;
  position: absolute;
  bottom: 15vw;
  width: 100%;

}
.info-logo{
  width: 30vw;
  margin: 15vw 0 15vw
}
</style>