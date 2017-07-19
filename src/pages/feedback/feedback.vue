<template>
  <div>
    <head-nav title="意见反馈"></head-nav>
    <div class="scroll-box">
      <div class="suggest-box">
        <div v-text="suggest.suggestContent"></div>
        <div>
            创建时间:
            <span v-text="suggest.createTime"></span>
          </div>
        </div>
          <group class="sg-bottom">
            <x-textarea title="反馈:" :height="height"></x-textarea>
            <x-button>反馈吧！少年</x-button>
          </group>
      </div>
    </div>
    
</template>

<script>
import { XTextarea,Group,XButton  } from 'vux'
import headNav from '../../components/headNav'
export default {
  name: 'hello',
  data () {
    return {
      height:200,
      suggest:''
    }
  },
  components:{
    XTextarea,
    Group,
    XButton ,
    headNav,

  },
  created:function(){
    this.init()
  },
  methods:{
    init:function(){
      this.$http.get(this.$Apis('suggest')).then((response) => {
         console.log(response.data.data)
         this.suggest=response.data.data
      }, (response) => {
          // error callback
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.suggest-box{
  margin-top: 5vw;
  text-align: left;
  border-top:1px solid #D9D9D9;
  border-bottom:1px solid #D9D9D9;
  padding: 5vw
}
.sg-bottom{
  position: absolute;
  bottom: 0
}
.scroll-box{
  padding-top: 10vw;
}
</style>