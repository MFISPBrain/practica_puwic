import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/layout.vue'

const routes = [
  {
    path: '/login',
    alias:'/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {value: 'Home'},
    children: [
      {
        path: '/Tablero',
        name: 'Tablero',
        component: layout,
        meta: {value: 'Tablero'},
        children: [
          {
            path: '',
            name: '',
            component: () => import(/* webpackChunkName: "tablero" */ '../views/Tablero/Tablero.vue'),
          },
          {
            path: 'CargarPagos',
            name: 'CargarPagos',
            component: () => import(/* webpackChunkName: "pagos" */ '../views/CargarPagos.vue'),
            meta: {value: 'Cargar Pagos'}
          }
        ],
        
      },
      {
        path: '/nuevoUsuario',
        
        name: 'NuevoUsuario',
        component: () => import(/* webpackChunkName: "login" */ '../views/Usuarios/NuevoUsuario.vue'),
        meta: {value: 'Nuevo Usuario'}
      },
      {
        path: '/TablaUsuario',
        name: 'TablaUsuario',
        component: () => import(/* webpackChunkName: "pagos" */ '../views/Usuarios/TablaUsuario.vue'),
        meta: {value: 'Tabla de Usuarios'}
      }
    ]
  } 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
