import {createRouter, createWebHashHistory} from 'vue-router'
import Login from './Login.vue'
import Home from './Home.vue'
import Chart from './Chart.vue'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {path: '/', component: Login},
    {path: '/home', component: Home},
    {path: '/chart', component: Chart}
  ]
})