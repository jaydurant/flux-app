import React from 'react';
import { Route } from 'react-router-dom';


const RouteWithSubRoutes = (route) => {
    return (
    <Route location={route.location} path={route.path} render={ props => (
        <route.component {...props} {...route} routes={route.routes} />
    )}/>
);
};

export default RouteWithSubRoutes;