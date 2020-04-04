import IndexComp from './components/index';
//product
import ProductComp from './components/product/';
import ProductPresenterComp from './components/product/presenters';
import ProductAudienceComp from './components/product/audience';
//aboutus
import AboutusComp from './components/aboutus/';
import GetInTouchComp from './components/aboutus/get-in-touch';
import BlogComp from './components/aboutus/blog';
//howto
import HowtoComp from './components/howto/';
import TermsComp from './components/howto/terms';
import PrivacyComp from './components/howto/privacy';
//class
import ClassComp from './components/class/';
import ClassDemoComp from './components/class-demo';

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
    path: '/get-in-touch',
    component: GetInTouchComp,
    name:'get-in-touch'
  },{
    path: '/blog',
    component: BlogComp,
    name:'blog'
  },{
    path: '/howto',
    component: HowtoComp,
    name:'howto'
  },{
    path: '/terms',
    component: TermsComp,
    name:'terms'
  },{
    path: '/privacy',
    component: PrivacyComp,
    name:'privacy'
  },{
    path: '/class',
    component: ClassComp,
    name:'class'
  },{
    path: '/class-demo',
    component: ClassDemoComp,
    name:'class-demo'
  }
];
