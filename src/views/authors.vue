<template>
<div class="content_author">   
   
    <List :list=authorList @sendAuthor='updateAuthor($event)'> 
        <h1>Pagina do autor</h1>
    </List>
    
    <ShowCase :newAuthor=author></ShowCase>
</div>

</template>

<script>
import List from '../components/list.vue'
import ShowCase from '../components/showcase.vue'

export default {
    name:"authors",
   components:{
       List,    
       ShowCase
   },
   data(){
       return{
           authorList:null,
           mensagem:"",
        author:null

       }
   },
   methods:{
       fetchAuthorList(){
           fetch("http://localhost:3000/author")
           .then(r => r.json())
           .then(r => {
               this.authorList = r
           })
       },
       updateAuthor(id){
            fetch(`http://localhost:3000/author/${id}`)
           .then(r => r.json())
           .then(r => {
               this.author = r              
           })
       }
   },
   created(){
       this.fetchAuthorList();     
       
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
