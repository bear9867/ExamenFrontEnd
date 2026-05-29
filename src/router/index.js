import { createRouter, createWebHistory } from 'vue-router'
import CalificacionesView from '../views/CalificacionesView.vue'
import RegistroView from '../views/RegistroView.vue'

const router = createRouter({
  history: createWebHistory('/ExamenFrontEnd/'),
  routes: [
    {
      path: '/',
      name: 'Calculo de calificaciones',
      component: CalificacionesView,
    },
    {
      path: '/Formulario de registro',
      name: 'Formulario de registro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistroView.vue'),
    },
  ],
})

export default router
