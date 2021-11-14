<template>
<div>
    <table>
  <tr>
    <th>Titulo</th>
    <th>Autor</th>
     <th>Categoria</th>
  </tr>
  <tr v-for="item in api" :key="item.id">
    <td>{{item.title}}</td>
    <td>{{item.author}}</td>
     <td>{{item.category}}</td>
  </tr>
 
</table>
</div>
</template>

<script>
export default {
    data(){
        return{
            api:null
        }
    },
      methods:{
        fetchJob(){
            fetch("http://localhost:3000/jobs")
            .then(r=> r.json())
            .then(r=> {
                this.api = r
            })
        }
    },
    created(){
        this.fetchJob();
        console.log(this.api)
    }
    
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
