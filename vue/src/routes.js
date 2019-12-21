import IndexComp from './components/index';
import ProductComp from './components/product';
import ProductPresenterComp from './components/product-presenters';
import ProductAudienceComp from './components/product-audience';
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
    path: '/product-presenters',
    component: ProductPresenterComp,
    name:'product-presenters'
  },{
    path: '/product-audience',
    component: ProductAudienceComp,
    name:'product-audience'
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
