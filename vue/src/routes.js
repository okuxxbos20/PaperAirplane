import IndexComp from './components/index';
import ProductComp from './components/product';
import AboutusComp from './components/aboutus';
import HowtoComp from './components/howto';

export const routes = [{
    path: '/',
    component: IndexComp,
    name:'index'
  },{
    path: '/product',
    component: ProductComp,
    name:'product'
  },{
    path: '/aboutus',
    component: AboutusComp,
    name:'aboutus'
  },{
    path: '/howto',
    component: HowtoComp,
    name:'howto'
  }
];
