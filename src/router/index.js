import Vue from 'vue';
import Router from 'vue-router';
import goods from './components/goods/goods';


Vue.use(Router);

const routes = [
  {path:'/', component: goods},
  {path:'/goods', component: goods}
  // ,
  // {path:'/ratings', component: ratings},
  // {path:'/seller', component: seller}
];
