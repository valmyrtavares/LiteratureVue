<template>
    <div>
        <h1>{{text.title}}</h1>
        <p>{{text.body}}</p>        
       

    </div>
</template>

<script>
export default{
    props:['text']
}
</script>