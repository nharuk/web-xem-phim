import Home from '../pages/Home'
import Detail from '../pages/detail/Detail'
import Catalog from '../pages/Catalog'

const publicRoutes = [
    { path: '/:category/search/:keyword', component: Catalog },
    { path: '/:category/:id', component: Detail },
    { path: '/:category', component: Catalog },
    { path: '/', component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
 