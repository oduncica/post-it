import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '@/views/TodosView.vue'
/* import AddTodoView from '@/views/AddTodoview.vue' */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodosView
    },
    /* {
      path: '/:notesid',
      name: 'notes',
      component: ()=> import('../views/ContentView')
    }, */
  
   
  ]
})

export default router
