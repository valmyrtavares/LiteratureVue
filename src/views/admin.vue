<template>
    <div>
        <input type="text" v-model="user.name">
        <p>{{user.name}}</p>
        <input type="text" v-model="user.id_author">
        <p>{{user.id_author}}</p>
        <input type="text" v-model="user.url">
        <p>{{user.url}}</p>
        <button @click="UserFetch" >Enviar</button>
    </div>

</template>

<script>

    export default{
        name:"admin",
        data(){
            return{
                user:{
                    name:"",
                    url:"",
                    id_author:""
                }
            }
        },    
        methods:{
            UserFetch(){              
                fetch("http://localhost:3000/author",{
                method: 'POST',       
                    body: new URLSearchParams(this.user)
                })
            }
        }
    }
</script>