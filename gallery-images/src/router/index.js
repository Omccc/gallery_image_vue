import { createRouter, createWebHistory } from 'vue-router'

import BasicPage from '../views/BasicPage.vue'
import ImageListPage from '../views/ImageListPage.vue'
import ImageDetailPage from '../views/ImageDetailPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'

    const routes = [
        { 
            name: "Home",
            path: '/', 
            component: BasicPage
        },
        { 
            name: "ImageList",
            path: '/images', 
            component: ImageListPage
        },
        { 
            name: "ImageDetail",
            path: '/images/:id', 
            component: ImageDetailPage
        },
        { 
            name: "About",
            path: '/about', 
            component: AboutPage
        },
        { 
            name: "Contact",
            path: '/contact', 
            component: ContactPage
        },
    ]

    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes 
    
    })
    
    export default router