import { HeaderOnly } from '~/components/Layout';

import routesConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import ForgotPassword from '~/pages/ForgotPassword';
import Explore from '~/pages/Explore/Explore';

//Public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Home },
    { path: routesConfig.explore, component: Explore },
    { path: routesConfig.login, component: Login, layout: null },
    { path: routesConfig.register, component: Register, layout: null },
    { path: routesConfig.forgotpassword, component: ForgotPassword, layout: null },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
