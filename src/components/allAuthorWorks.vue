<template>
<section>
<router-link  v-for="item in authorWorks" :key="item.id" :to="{name:'author',params:{job:item.id}}" ><p>{{item.title}}</p></router-link>
</section>


</template>

<script>

import fetchData from '../mixins/fetchData.js'
export default {
    computed:{
        authorWorks(){
            if(this.api){
                return this.api.filter(item => item.idAuthor == this.text)
            }
            return null
        }        
    },
    props:['text'],   
    mixins:[fetchData],    
    created(){                 
       this.fetchData('jobs')
    }
   
}
</script>

<style scoped>

</style>
