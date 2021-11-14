<template>
<div>
    <h1>Pagina do Categorias</h1>
    <table  >
        <div> 
             <table>
            <tr>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Categoria</th>
            </tr>
            <tr  v-for="item in categoryData" :key="item.id"  >
               
                <td  >{{item.title}}</td>
                <td  >{{item.author}}</td>
                <td >{{item.category}}</td>

               
            </tr>
            </table>
        </div>
    </table>
</div>

</template>

<script>
import fetchData from '../mixins/fetchData.js'
export default {  
    data(){
        return{
            data:[],
            testeIf:true
        }
    },
    computed:{
        categoryData(){
        if(this.api){
            return this.api.filter(item => item.category===this.category)
        }else{
            return null
        }
        
        }
    },
    props:['category'],
    mixins:[fetchData],
    //methods:{
    //  testeArray(){
    //      this.map(item => {
    //          console.log(item.title)
    //      })
    //  }
    // },
    created(){      
        this.fetchData('jobs')
       console.log("Estou funcionando")
       console.log(this.api)

    },
   
}
</script>


<style scoped>
table, td, th {
  border: 1px solid black;
}
table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

</style>


