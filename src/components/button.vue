<template>

    <button>
        <router-link :to="{name:'author',params:{job: this.firstWork}}"> <slot></slot> </router-link>     
    </button>

</template>

<script>
import fetchData from '../mixins/fetchData.js'
export default {
    computed:{
        firstWork(){
            if(this.api){
                return   this.api.findIndex(item => item.idAuthor ===this.idAuthor  ) + 1
            }else{
                return null
            }            
        }
    },
    props:[
        'idAuthor'
    ],
    mixins:[fetchData],    
    created(){
        this.fetchData('jobs')
    }
}
</script>
<style scoped>
button{
    padding:15px 25px;
    font: 20px sans-serif;
    background:rgba(0,0,0,.4);
    color:white;

}
</style>