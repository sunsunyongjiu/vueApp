<template>
    <group>
      <selector title="性别" v-model="sexSelevtValue" :options="sex" placeholder="请选择性别" class="area-selector" @on-change="submit"></selector>
    </group>
</template>

<script>
import { Selector,Group } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      sexSelevtValue:'',
      sex:[],
    }
  },
  components:{
    Selector,
    Group
  },
  created:function(){
    this.init()
  },
  methods:{
   init:function(){
      // 选择性别
      this.$http.get(this.$Apis('dictionary'),{params: {dictType: 'sex'}}).then((response) => {
         console.log(response.data.data)
         let lists=response.data.data
         let list=[]
         for(let n=0;n<lists.length;n++){
          list.push({key:lists[n].dictId,value:lists[n].dictValue1})
         }
         this.sex=list
      }, (response) => {
          // error callback
      });
    },
    submit:function(){
    	this.$emit('sex',this.sexSelevtValue);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>