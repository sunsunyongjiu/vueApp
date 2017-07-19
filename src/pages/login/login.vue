<template>
  <div class="login-bg">
    <!-- <img src="../assets/img/login-bg.jpg" class="login-bgimg"> -->
    <img src="../../assets/img/login-logo.png" class="login-logo">
    <div class="login-version">
    	当前版本号：v
      <span v-text="loginVersion"></span>
    </div>
    <group class="login-text-box" v-if="isLogin">
      <x-input placeholder="请输入电话" required type="number" v-model="loginData.telephone">
        <img slot="label" style="padding-right:10px;display:block;" :src="imgUrl1" width="24" height="24">
      </x-input>
      <x-input placeholder="请输入密码" required type="password" class="loginPass" v-model="loginData.password">
        <img slot="label" style="padding-right:10px;display:block;" :src="imgUrl2" width="24" height="24">
      </x-input>
      <flexbox class="login-btnBox">
        <flexbox-item>
          <x-button plain @click.native="goIndex()">登录</x-button>
        </flexbox-item>
      </flexbox>
      <flexbox class="login-btnBox">
        <flexbox-item @click.native="goRegister">
          <div class="goRegister">
            未拥有账号，前往注册
          </div>
        </flexbox-item>
      </flexbox>
    </group>

    <group class="login-text-box" v-else="isLogin">
      
      <x-input placeholder="请输入电话" required type="number" v-model="register.telephone">
        <img slot="label" style="padding-right:10px;display:block;" :src="imgUrl1" width="24" height="24">
      </x-input>
      <x-input placeholder="请输入密码" required type="password" v-model="register.password">
        <img slot="label" style="padding-right:10px;display:block;" :src="imgUrl2" width="24" height="24">
      </x-input>
      <x-input placeholder="请输入用户昵称" required v-model="register.name" class="loginPass">
        <img slot="label" style="padding-right:10px;display:block;" :src="imgUrl1" width="24" height="24">
      </x-input>
      <flexbox class="login-btnBox">
        <flexbox-item>
          <x-button plain @click.native="subRegister">注册</x-button>
        </flexbox-item>
        
      </flexbox>
      <flexbox>
        <flexbox-item @click.native="goLogin()">
          <div class="goRegister">
            返回登录
          </div>
        </flexbox-item>
      </flexbox>
    </group>
    
    <!-- <div v-transfer-dom>
      <popup v-model="popShow" height="100%">
        <div class="popup1">
          <group>
            <x-switch title="Another XSwitcher" v-model="popShow"></x-switch>
          </group>
        </div>
      </popup>
    </div> -->
    
  </div>
</template>

<script>
import { XInput ,Group,XButton,Flexbox, FlexboxItem,Popup,TransferDom,XSwitch } from 'vux'
export default {
  name: 'hello',
  directives: {
    TransferDom
  },
  data () {
    return {
      loginData:{
        telephone:'',
        password:''
      },
      register:{
        name:'',
        telephone:'',
        password:''
      },
      registerInit:{
        name:'',
        telephone:'',
        password:''
      },
      loginVersion:localStorage.getItem("version"),
      imgUrl1:require('../../assets/img/denglu.png'),
      imgUrl2:require('../../assets/img/mima1.png'),
      popShow:false,
      be2333: 'china-mobile',
      isLogin:true,

    }
  },
  components:{
    XInput,
    Group,
    XButton,
    Flexbox, 
    FlexboxItem,
    Popup,
    TransferDom ,
    XSwitch
  },
  created:function(){
    this.$store.dispatch({type: 'setLogin',data: ''})
    console.log(this.$Apis('login'))
  },
  methods:{
    goIndex:function(){
      let data=this.loginData
      console.log(data)
      this.$http.post(this.$Apis('login'),data).then((response) => {
         
         this.$store.dispatch({type: 'setLogin',data: response.data.data})
         // 登陆成功后显示载入
         this.$vux.loading.show({
           text: 'Loading'
          })
         this.$router.push({ path: '/Index' })
      }, (response) => {
        this.$vux.toast.show({
          text: '账号或密码错误，请检查后重试',
          type:'warn',
          position:'middle',
          width:'50vw'
        })
      });
      
      // this.$router.push({ path: '/Index' })
    },
    goRegister:function(){
      this.isLogin=false
    },
    goLogin:function(){
      this.register=this.registerInit
      this.isLogin=true
    },
    subRegister:function(){
      let data=this.register
      console.log(this.$Apis('register'))
      this.$http.post(this.$Apis('register'),data).then((response) => {
        this.$vux.toast.show({
          text: '注册成功！',
          type:'success',
          position:'middle'
        })
        this.register=this.registerInit
        this.isLogin=true
      }, (response) => {
        this.register=this.registerInit
        console.log(response)
          // error callback
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
	@import '../../assets/css/login.less';
  .login-text-box{
    width: 60vw;
    margin: 10vw auto 0;
    background: rgba(255,255,255,0);
    border:1px solid #fff;
    padding: 5vw;
    background: rgba(7, 9, 39, 0.51);
    .vux-no-group-title{
      background:rgba(0,0,0,0) !important;
    }
    input{
      color: #fff!important
    }
    .loginPass:after{
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #D9D9D9;
      color: #D9D9D9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      left: 15px;
    }
    
  }
  .login-btnBox{
    width: 60vw !important;
    margin: 5vw auto;
    button{
      color: #fff;
      background: rgba(239, 127, 28, 0.54) !important
    }
  }
  .login-version{
    position: absolute;
    bottom: 10vw;
    width: 100%;
    z-index: 1;
    text-align: center
  }
  .goRegister{
    width: 100%;
    color: #fff;
    text-align: right;
    text-decoration-line: underline;
  }
</style>