<template>
	<div class="index-info-header">
	  <div class="goBack" @click="goBack">&lt;</div>
	  <div v-text="this.title"></div>
	</div>
</template>
<script type="text/javascript">
	export default {
	  name: 'nav',
	  data () {
	    return {
	     	
	    }
	  },
	  mounted:function(){
	  	
	  },
	  methods:{
	    goBack:function(){
	      this.$router.go(-1)
	    }
	  },
	  props:['title']
	}
</script>
<style lang='less'>
.index-info-header{
  height: 10vw;
  line-height: 10vw;
  width: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: #eaeaea;
  text-align: center;
  border-bottom: 1px solid #ccc;
  color: #2c3e50;
  .goBack{
    position: absolute;
    top: 0;
    left: 3vw;
    
  }
}

</style>