<template>
  <div>
  	<head-nav title="我的信息"></head-nav>
  	<div class='container'>
  		<flexbox orient="vertical">
	      <flexbox-item><div class="flex-demo">姓名：<span v-text="doneTodosCount.name"></span></div></flexbox-item>
	      <flexbox-item><div class="flex-demo">电话：<span v-text="doneTodosCount.telephone"></span></div></flexbox-item>
	      <x-button class="info-edit" @click.native="goEdit">编辑</x-button>
	    </flexbox>
	    <div v-transfer-dom>
	      <popup v-model="popShow" height="100%">
	        <div class="popup1">
	       	  <group>
	       	  	<x-switch title="Another XSwitcher" v-model="popShow"></x-switch>
	       	  </group>
	          <group :gutter="gutter">
	            
	            <x-input title="修改姓名" :placeholder="doneTodosCount.name" v-model="reEditData.name"></x-input>
	            <x-input title="修改电话" :placeholder="doneTodosCount.telephone" v-model="reEditData.telephone"></x-input>
	          </group>
	          <x-button class="info-edit" @click.native="edit">确认修改</x-button>
	        </div>
	      </popup>
	    </div>
  	</div>
  	
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider,XButton,TransferDom, Popup,Group,XSwitch,XInput } from 'vux'
import headNav from '../../components/headNav'
export default {
  name: 'hello',
  directives: {
    TransferDom
  },
  data () {
    return {
      popShow:false,
      gutter:10,
      reEditData:{
      	name:null,
      	telephone:null
      }
    }
  },
  components:{
    headNav,
    Flexbox, 
    FlexboxItem, 
    Divider,
    XButton,
    Popup,
    Group,
    XSwitch,
    XInput
  },
  mounted:function(){
    
  },
  methods:{
 	goEdit:function(){
 		console.log(1)
 		this.popShow=true
 	},
 	edit:function(){
 		let data=this.reEditData
 		this.$http.put(this.$Apis('updateMyself'),data).then((response) => {
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
  },
  computed: {
    doneTodosCount () {
      return this.$store.getters.getLogin
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.info-edit{
	position: absolute;
	bottom: 0
}
</style>