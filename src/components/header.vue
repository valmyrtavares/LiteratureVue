<template>
<nav>
  <router-link to="/">Home</router-link>
  <router-link to="/autores">Autores</router-link>
  <router-link to="/obras">Obras</router-link>
  <router-link to="/categorias" class="hide_menu">Categorias
    <span>
     <router-link to="/categoria/poesia">Poesia</router-link>
     <router-link to="/categoria/cronica">Crônica</router-link>
     <router-link to="/categoria/conto">Contos</router-link>
     <router-link to="/categoria/desenho">Desenhos</router-link>
    </span>
  </router-link>
  <router-link to="/quemsomos">Quem somos</router-link>
  <router-link to="/admin">Admin</router-link>

  
  
</nav>
</template>

<script>
export default {
    
}
</script>
<style scoped>
nav{
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:10px;
}
nav a{
    font: 18px monospace;
}
.hide_menu{
  position:relative;
 
}
.hide_menu span{
  display:flex;
  opacity: 0;
  flex-direction:column;
  position: absolute;
  top:0px;
  left:0;
  background:rgba(0,0,0,.1);
  padding-top:30px;
  transition: opacity .5s;
}
.hide_menu:hover span{
  display:flex;
  opacity: 1;
 
}

</style>
