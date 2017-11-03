import login from '../components/app/login';
import Viewer from '../components/viewer/Viewer';

const routes = {
    login : {
        path:'/login',
        component: login,
    },
    app : {
        path: '/app',
        component: Viewer
    }
};

export default routes;