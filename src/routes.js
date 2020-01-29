import IndexComp from './components/index';
import ProductComp from './components/product';
import ProductPresenterComp from './components/product-presenters';
import ProductAudienceComp from './components/product-audience';
import AboutusComp from './components/aboutus';
import HowtoComp from './components/howto';
import TermsComp from './components/terms';
import PrivacyComp from './components/privacy';
import GetInTouchComp from './components/get-in-touch';
import SupportComp from './components/support';
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
