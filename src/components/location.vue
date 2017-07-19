<template>
  <div>
    <group>
      <selector title="省份" v-model="selevtValue" :options="province" placeholder="请选择省份" class="area-selector" @on-change="getCityLocation"></selector>
    </group>
    <group>
      <selector title="市区" v-model="citySelevtValue" :options="city" placeholder="请选择市区" class="area-selector" @on-change="getDistrictLocation"></selector>
    </group>
    <group>
      <selector title="地区" v-model="districtSelevtValue" :options="district" placeholder="请选择地区" class="area-selector" @on-change="getTownLocation"></selector>
    </group>
    <group>
      <selector title="街道" v-model="townSelevtValue" :options="town" placeholder="请选择街道" class="area-selector" @on-change="submit"></selector>
    </group>
  </div>
</template>

<script>
import { Selector,Group } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      province:[],
      city:[],
      district:[],
      town:[],
      selevtValue:'',
      citySelevtValue:'',
      districtSelevtValue:'',
      townSelevtValue:'',
    }
  },
  components:{
    Selector,
    Group,
  },
  created:function(){
    this.init()
  },
  methods:{
     init:function(){
      this.$http.get(this.$Api('/area'),{params: {parentId: 0}}).then((response) => {
         let lists=response.data.data
         // 省份结构改造
         let list=[]
         for(let n=0;n<lists.length;n++){
          list.push({key:lists[n].id,value:lists[n].areaNm})
         }
         this.province=list
         
      }, (response) => {
          // error callback
      });
    },
    // 获取城市
    getCityLocation:function(val){
      this.$http.get(this.$Apis('area'),{params: {parentId: val}}).then((response) => {
         let lists=response.data.data
         // 省份结构改造
         let list=[]
         for(let n=0;n<lists.length;n++){
          list.push({key:lists[n].id,value:lists[n].areaNm})
         }
         this.city=list
         
      }, (response) => {
          // error callback
      });
    },
    // 获取地区
    getDistrictLocation:function(val){
      this.$http.get(this.$Apis('area'),{params: {parentId: val}}).then((response) => {
         let lists=response.data.data
         // 省份结构改造
         let list=[]
         for(let n=0;n<lists.length;n++){
          list.push({key:lists[n].id,value:lists[n].areaNm})
         }
         this.district=list
         
      }, (response) => {
          // error callback
      });
    },
    // 获取街道
    getTownLocation:function(val){
      this.$http.get(this.$Apis('area'),{params: {parentId: val}}).then((response) => {
         let lists=response.data.data
         // 省份结构改造
         let list=[]
         for(let n=0;n<lists.length;n++){
          list.push({key:lists[n].id,value:lists[n].areaNm})
         }
         this.town=list
         
      }, (response) => {
          // error callbackn
      });
    },
    // 提交选中信息到父组件
    submit:function(){
      this.$emit('location', [this.selevtValue,this.citySelevtValue,this.districtSelevtValue,this.townSelevtValue]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>