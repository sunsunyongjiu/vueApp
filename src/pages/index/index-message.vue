<template>
  <div>
    <x-button @click.native="goMsList(0)">新闻</x-button>
    <x-button @click.native="goMsList(1)">短信</x-button>
    <x-button @click.native="goMsList(2)">消息推送</x-button>

      <popup v-model="show1" height="100%">
        <div class="popup1">
          <group gutter=0>
            <x-switch title="关闭" v-model="show1"></x-switch>
          </group>
          <div v-text="messageDetail.title"></div>
          <div v-text="messageDetail.content"></div>
          <div >
            创建时间：<span v-text="messageDetail.createTime"></span>
          </div>
          <div >
            修改时间：<span v-text="messageDetail.updateTime"></span>
          </div>
        </div>
      </popup>
  </div>
</template>

<script>
import { Popup, Group, Cell, XButton, XSwitch, Scroller, Toast, XAddress, ChinaAddressData } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      message:[],
      show1: false,
      messageDetail:{}
    }
  },
  components:{
    Popup,
    Group,
    Cell,
    XSwitch,
    Scroller,
    Toast,
    XAddress,
    XButton,
  },
  created:function(){
    this.init()
  },
  methods:{
    init:function(){
      this.$http.get(this.$Apis('message')).then((response) => {
         this.message=response.data.data
      }, (response) => {
          // error callback
      });
    },
    seeDetail:function(nm){
      console.log(nm)
      this.show1=true
      this.$http.get(this.$Apis('message'),{params:{id:nm}}).then((response) => {
         this.messageDetail=response.data.data[0]
      }, (response) => {
          // error callback
      });
    },
    goMsList(n){
      this.$router.push({ path: '/messagelist', query: { msType: n }})
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.popup1 {
  width:100%;
  height:100%;
}
</style>