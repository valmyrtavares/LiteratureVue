<template>
<section>
<div v-if="newAuthor" >

<img :src="newAuthor.url" alt="Mariana">
<h1>{{newAuthor.name}}</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae nunc sit amet ante dictum malesuada sit amet eleifend justo. Nullam diam risus, molestie vel libero in, efficitur bibendum elit. Fusce ultricies felis sit amet nisl convallis, sit amet interdum urna eleifend. Nulla et augue eget mauris tempus condimentum. Curabitur a mauris interdum, maximus diam vel, sagittis quam. Vivamus aliquet ex lobortis mauris luctus dapibus. Cras sed ipsum posuere tortor efficitur gravida id et urna. Morbi scelerisque mi quis orci molestie accumsan. Mauris dictum lobortis lacus ut vehicula. Maecenas ullamcorper porttitor odio, vitae accumsan mi imperdiet non.

Nunc pretium vel ipsum sit amet molestie. Proin laoreet mi pretium mi sodales, vel tempus ante cursus. Fusce elementum sem nec odio porttitor semper. Nulla consectetur volutpat blandit. Vestibulum eu semper neque, eget vulputate tortor. Etiam rutrum nec lectus dignissim cursus. Quisque sapien nisl, iaculis sit amet pretium in, sodales vel elit. Donec mauris ante, interdum nec pellentesque eget, tristique ut diam. In hac habitasse platea dictumst. Suspendisse feugiat est sed neque fringilla, sed pretium arcu posuere.

Fusce in pellentesque purus, id luctus enim. Praesent non dui ultrices eros scelerisque volutpat. Cras blandit aliquam risus, eget dignissim ante laoreet vel. Aliquam eleifend dictum arcu, nec sodales erat cursus id. Aenean at erat nec mi cursus vehicula interdum vitae est. Praesent vel dapibus nulla. Quisque non facilisis metus, eu tempus lacus. Sed convallis, ex viverra eleifend placerat, quam felis feugiat mi, molestie condimentum mi ligula non nibh.

Etiam vulputate sapien vel sapien ullamcorper, ac pretium ante mattis. Vivamus at tellus luctus, sagittis libero ac, facilisis quam. In venenatis gravida risus, sit amet iaculis urna aliquet eget. Aliquam erat volutpat. Proin sit amet hendrerit nisl, ut gravida dui. Morbi consequat enim in odio dignissim, accumsan venenatis ipsum tristique. Nulla facilisi. In egestas consequat leo vitae rutrum. Proin pulvinar vel leo nec suscipit. Vivamus id fermentum nisi. In hac habitasse platea dictumst.

Sed tincidunt nisl mi, nec eleifend nisl imperdiet et. Aenean faucibus pretium porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum eget tellus placerat ultricies. Nam sit amet sollicitudin sapien, id lobortis leo. Donec elementum velit eget elementum tempus. Integer vel dapibus dui. Mauris tempus quam at pharetra aliquam. Aenean lacus arcu, congue et odio at, cursus fermentum ex.</p>
<Button :idAuthor = newAuthor.id>Conheça a obra do autor</Button>

</div>


<div v-if="api">
    <img :src="api.url" alt="">
    <h1>{{api.name}}</h1>

</div>


</section>


</template>

<script>
import Button from '../components/button.vue'
import fetchData from '../mixins/fetchData.js'
export default {
    props:['newAuthor','text'],
    components:{
        Button
    },  
    mixins:[fetchData],       
    created(){                 
       this.fetchData(`author/${this.text}`)
    }
   
   
}
</script>

<style scoped>
div{
    padding:10px 20px;
}
h1{
    text-align: center;
    font: 30px sans-serif;
}

img{
   width:50%;
   margin: 10px 25%; 
}
button{
    margin:3px 27%;
}
</style>
