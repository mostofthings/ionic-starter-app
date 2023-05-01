import { createRouter, createWebHistory } from '@ionic/vue-router';
import App from '../App.vue';
import { IonicVueRouterOptions } from '@ionic/vue-router/dist/types/types';


const routes = [{
  path: '/',
  name: 'Home',
  component: App,
}];

export default function setupRouter() {
  return createRouter({
    history: createWebHistory(),
    routes,
  } as IonicVueRouterOptions);
}
