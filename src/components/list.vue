<template>
<div >
<slot></slot>
<p v-for="item in list" :key="item.name" @click="fetchAuthor(item.id)" > {{item.name}}</p>
</div>

</template>

<script>

export default {
    data(){
        return{
            name:"Adélio Bispo"
        }
    },

props:['list'],    
methods:{
    fetchAuthor(id){      
      this.$emit("sendAuthor",id)
    }
}
}
</script>

<style scoped>
div{
   
    background:rgba(0,0,0,.2);
    overflow: scroll;
    padding: 10px
}
div p{
    font: 20px monospace;
    cursor:pointer
    
}

</style>
