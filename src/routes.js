import IndexComp from './components/index/index';
//product
import ProductComp from './components/product/product';
import ProductPresenterComp from './components/product/product-presenters';
import ProductAudienceComp from './components/product/product-audience';
//aboutus
import AboutusComp from './components/aboutus/aboutus';
import GetInTouchComp from './components/aboutus/get-in-touch';
import SupportComp from './components/aboutus/support';
//howto
import HowtoComp from './components/howto/howto';
import TermsComp from './components/howto/terms';
import PrivacyComp from './components/howto/privacy';
//class
import ClassComp from './components/class';

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
    path: '/support',
    component: SupportComp,
    name:'support'
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
  }
];
