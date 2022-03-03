import { createRouter, createWebHistory } from 'vue-router';

import HomeInterna from '@/views/PagesInternas/HomeInterna';
import Produtos from '@/views/PagesInternas/Produtos/Produtos';
import Login from '@/views/PagesExternas/Login';
import Register from '@/views/PagesExternas/Register';

import Authentication from './middleware/authentication';

const routes = [

  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/views/PagesInternas/TemplateInterno.vue'),
    children: [

      {
        path: '/',
        name: 'HomeInterna',
        component: HomeInterna,
        meta: {
          authenticated: true,
        },
      },
      {
        path: '/produtos',
        name: 'Produtos',
        component: Produtos,
        meta: {
          authenticated: true,
        },
      },
    ],

  },

  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/views/PagesExternas/TemplateExterno.vue'),
    children: [

      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
      },
    ],

  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(Authentication);

export default router;
