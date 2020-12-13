import { MenuComponent, FoodDinnerComponent, FoodBreakfastComponent, FoodSupperComponent, LoginComponent, AdminComponent } from '@components/';


import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MenuComponent,
    children: [
      { path: "breakfast", component: FoodBreakfastComponent },
      { path: "dinner", component: FoodDinnerComponent },
      { path: "supper", component: FoodSupperComponent },
      { path: "login", component: LoginComponent }
    ]
  },
  {
    path: '/admin',
    component: AdminComponent
  }
  
],

    router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
    });
export default router;