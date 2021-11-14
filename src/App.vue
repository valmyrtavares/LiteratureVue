<template> 
 <div id="app" class="main_content"> 

<Header/>
  
  <router-view></router-view>

 </div>
</template>

<script>
  import Header from './components/header.vue'

export default {
  name:"app",
  components:{
    Header
  }
 

}
</script>

<style>
.main_content{
  width:80%;
  margin:0 auto;
}
a{
  margin:10px;
  text-decoration:none;
}
</style>
