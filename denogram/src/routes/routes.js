// layout
import LayoutBasic  from '../layouts/LayoutBasic';

// all the pages
import Home from '../pages/Home';
import User from '../pages/User';
import Error404 from '../pages/Error404';

const routes = [
    {
        path: '/',
        layout: LayoutBasic,
        component: Home,
        exact: true,
    },
    {
        path: '/:username',
        layout: LayoutBasic,
        component: User,
        exact: true,

    },
    {
        path: '*',
        component: Error404,
        layout: LayoutBasic,
    }
];

export default routes;