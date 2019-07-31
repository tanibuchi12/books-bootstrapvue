import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/pages/Index'
import View from '../components/pages/View'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/books',
            name: 'index',
            component: Index
        }, {
            path: '/books/:id',
            name: 'view',
            component: View
        }
    ]
})