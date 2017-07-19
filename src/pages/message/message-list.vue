<template>
  <div>
    <head-nav title="信息"></head-nav>
    <div class="padding-top">
      <div class="message-list" v-for='(item,index) in message' @click="seeDetail(item.id)" v-if="item.messageType==type">
        <div v-text="item.title" class="message-title"></div>
        <div >
          创建时间：<span v-text="item.createTime"></span>
        </div>
        <div >
          修改时间：<span v-text="item.updateTime"></span>
        </div>
      </div>
    </div>


    <popup v-model="show1" height="100%" class="detail-box">
      <div class="popup1">
        <group gutter=0 class="detail-nav">
          <x-switch title="关闭" v-model="show1"></x-switch>
        </group>
        <div class="detail-text">
          <div v-text="messageDetail.title" class="detail-title"></div>
          <div v-text="messageDetail.content"></div>
          <div >
            创建时间：<span v-text="messageDetail.createTime"></span>
          </div>
          <div >
            修改时间：<span v-text="messageDetail.updateTime"></span>
          </div>
        </div>

      </div>
    </popup>
  </div>
</template>

<script>
import { Popup, Group, Cell, XButton, XSwitch, Scroller, Toast, XAddress, ChinaAddressData } from 'vux'
import headNav from '../../components/headNav'
export default {
  name: 'hello',
  data () {
    return {
      message:'',
      messageDetail:'',
      type:this.$route.query.msType,
      show1:false
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
    headNav
  },
  created:function(){
    this.init()
  },
  methods:{
    init:function(){
      console.log(1)
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.padding-top{
  padding-top: 10vw
}
.message-list{
  height: 20vw;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  margin-top: 4vw;
  overflow: hidden;
  position: relative;
  background:#F8F8F8;
  text-align: left;
  padding-top: 2vw;
  .message-title{
    font-size: 20px;
    padding-bottom: 2vw
  }
}
.message-list:nth-child(1):after{
  content: 'new';
  position: absolute;
  background: gold;
  width: 25vw;
  text-align: center;
  height: 6vw;
  right: -8vw;
  top: 2vw;
  transform: rotate(40deg);
  color: white
}
.detail-title{
  font-size: 20px;
  margin-top: 5vw;
  margin-bottom: 5vw
}
.detail-box{
  background:#fff;
}
.detail-text{
  text-align: left;
}
</style>