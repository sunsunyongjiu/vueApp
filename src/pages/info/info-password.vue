<template>
	<div>
		<head-nav title="修改密码"></head-nav>
		<div class='container'>
			<group>
		      <x-input placeholder="输入当前密码" required type="password" v-model="password.oldPassword">
		        <img slot="label" style="padding-right:10px;display:block;" :src="imgUrl2" width="24" height="24">
		      </x-input>
		      <x-input placeholder="输入修改密码" required type="password" v-model="password.newPassword">
		        <img slot="label" style="padding-right:10px;display:block;" :src="imgUrl2" width="24" height="24">
		      </x-input>
		      <x-button @click.native="subPass">确认修改</x-button>
		    </group>
		</div>
	</div>

</template>

<script>
import headNav from '../../components/headNav'
import { XInput ,Group,XButton,Flexbox, FlexboxItem} from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      password:{
      	oldPassword:'',
      	newPassword:''
      },
      imgUrl1:require('../../assets/img/denglu.png'),
      imgUrl2:require('../../assets/img/mima1.png'),
    }
  },
  components:{
    headNav,
    XInput ,
    Group,
    XButton,
    Flexbox, 
    FlexboxItem
  },
  mounted:function(){
    
  },
  methods:{
 	subPass:function(){
 	  let data=this.password
      this.$http.post(this.$Apis('changePassword'),data).then((response) => {
        this.$vux.toast.show({
          text: '修改成功，将为您跳转到登录界面！',
          position:'middle',
          width:'50vw'
        })
        this.$router.push({ path: '/login' })
      }, (response) => {
        console.log(response)
          // error callback
      });
 	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>