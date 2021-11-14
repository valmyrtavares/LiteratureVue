import Vue from  'vue';
import Router from 'vue-router';
import Author from './views/author.vue'
import Aboutus from './views/aboutus.vue'
import Category from './views/category.vue'
import Jobs from './views/jobs.vue'
import Home from './views/home.vue'


Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes:[   
       {
           path:'/autores',
           component:Author 

       },
       {
        path:'/obras',
        component:Jobs 

    },
    {
        path:'/categoria/:category',
        component:Category, 
        props:true

    },
    {
        path:'/quemsomos',
        component:Aboutus 

    },
    {
        path:'/',
        component:Home 

    }
        

    ]
})