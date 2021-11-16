import Vue from  'vue';
import Router from 'vue-router';
import Authors from './views/authors.vue'
import Author from './views/author.vue'
import Aboutus from './views/aboutus.vue'
import Category from './views/category.vue'
import Jobs from './views/jobs.vue'
import Home from './views/home.vue'
import Admin from './views/admin.vue'


Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes:[   
       {
           path:'/autores',
           component:Authors 

       },
       {
        path:'/admin',
        component:Admin 

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
            name:'author',
            path:'/author/:job',
            component:Author,
            props:true 

        },
        {
            path:'/',
            component:Home 

        }        

    ]
})