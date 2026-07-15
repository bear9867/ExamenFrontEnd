import { createRouter, createWebHistory } from 'vue-router'
import CalificacionesView from '../views/CalificacionesView.vue'
import RegistroView from '../views/RegistroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Calculo de calificaciones',
      component: CalificacionesView,
    },
    {
      path: '/formulario-registro',
      name: 'formulario-registro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistroView.vue'),
    },
  ],
})

export default router
