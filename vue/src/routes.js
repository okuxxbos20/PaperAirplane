// import IndexComp from './components/index';
import ProductComp from './components/product';
import AboutusComp from './components/aboutus';
import HowtoComp from './components/howto';
import ComunityComp from './components/comunity';

export const routes = [{
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
  },{
    path: '/comunity',
    component: ComunityComp,
    name:'comunity'
  }
];
