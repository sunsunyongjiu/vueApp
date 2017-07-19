<template>
  <div>
    <my-location v-on:location="recieveMessage"></my-location>
    <my-sex v-on:sex="recieveMessage"></my-sex>
  </div>
</template>

<script>
import myLocation from '../../components/location'
import mySex from '../../components/sex'
export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  components:{
    myLocation,
    mySex
  },
  mounted:function(){
    
  },
  methods:{
    recieveMessage:function(text){
      console.log(text)
    },
    recieveSex:function(sex){
      console.log(sex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>