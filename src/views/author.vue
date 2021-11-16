<template>
<div class="content_author">    
         
        <ShowCase :text='api.idAuthor'></ShowCase>
        <Reader :text='api'></Reader>      
        <AllAuthorWorks :text='api.idAuthor'></AllAuthorWorks>

    
  
</div>

</template>

<script>
import Reader from '../components/readerPage.vue'
import ShowCase from '../components/showcase.vue'
import AllAuthorWorks from '../components/allAuthorWorks.vue'
import fetchData from '../mixins/fetchData'


export default {   
    name:"author",
    props:['job'],
    mixins:[fetchData], 
    components:{
        Reader,
        ShowCase,
        AllAuthorWorks
    },
   created(){
       this.fetchData(`jobs/${this.job}`) ;          
   },
     beforeRouteUpdate(to, from, next){
        this.fetchData(`jobs/${to.params.job}`);
        next();
    }
   
    
}
</script>

<style scoped>
    h1 {
        text-align: center;
        font: 25px sans-serif;
        font-weight: bold;
    }
    .content_author{
        display:grid;
        grid-template-columns: 1fr 2fr;
    }
</style>
