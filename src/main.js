import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../src/components/Home.vue';
import Login from "../src/components/login.vue";

    const routes = [
        {path: '/', component: HomePage},
            {path: '/login', component: Login},
            ]
    
    const router = createRouter({
        history: createMemoryHistory(),
        routes,
        })
        
const app = createApp(App)
app.use(router)
app.mount('#app')

