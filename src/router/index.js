import { MenuComponent, FoodBreakfastComponent } from '@components/';


import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MenuComponent,
    children: [
      { path: "breakfast", component: FoodBreakfastComponent },
    ]
  },
  
],

    router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
    });
export default router;